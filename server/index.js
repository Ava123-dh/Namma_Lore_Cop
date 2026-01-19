import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import https from 'https'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

// Create an HTTPS agent that doesn't reject unauthorized certificates (for development only)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

app.post('/api/generate', async (req, res) => {
  const { model = 'gemini', prompt } = req.body
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' })

  try {
    // Claude (Anthropic)
    if (model.toLowerCase().includes('claude')) {
      const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
      if (!ANTHROPIC_API_KEY) return res.status(500).json({ error: 'Anthropic API key not configured' })

      const body = {
        model: model,
        prompt: prompt,
        max_tokens: 512,
        temperature: 0.2
      }

      const resp = await fetch('https://api.anthropic.com/v1/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY
        },
        body: JSON.stringify(body),
        agent: httpsAgent
      })

      const data = await resp.json()
      const text = data.completion ?? data.output ?? (data?.choices?.[0]?.text) ?? JSON.stringify(data)
      return res.json({ text })
    }

    // Default: Google Generative Language (Gemini) via REST
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
    if (!GOOGLE_API_KEY) return res.status(500).json({ error: 'Google API key not configured' })

    let modelName = model
    if (modelName.startsWith('models/')) {
      modelName = modelName.replace('models/', '')
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GOOGLE_API_KEY}`
    // Allow client to request a short response (smaller token budget) when needed
    const maxTokens = req.body.short ? 200 : 2048
    const body = {
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        // increase max tokens to avoid truncated responses; adjust as needed
        maxOutputTokens: maxTokens
      }
    }

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      agent: httpsAgent
    })

    if (!resp.ok) {
      const errorData = await resp.text()
      console.error('Gemini API error:', errorData)
      const isOverloaded = /overloaded|resource_exhausted|429|503/i.test(errorData)
      return res.status(isOverloaded ? 503 : 500).json({ error: isOverloaded ? 'Model overloaded' : 'Gemini API error', detail: errorData })
    }

    const data = await resp.json()

    // Assemble text from candidates/parts to avoid accidental truncation
    let text = ''
    if (Array.isArray(data?.candidates) && data.candidates.length > 0) {
      for (const cand of data.candidates) {
        if (cand?.content?.parts && Array.isArray(cand.content.parts)) {
          text += cand.content.parts.map((p) => p.text || '').join('\n')
        } else if (typeof cand === 'string') {
          text += cand
        } else if (cand?.output) {
          text += cand.output
        }
      }
    } else if (data?.output) {
      text = data.output
    } else if (data?.error) {
      text = data.error.message
    } else {
      text = JSON.stringify(data)
    }

    return res.json({ text })
  } catch (err) {
    console.error(err)
    const isOverloaded = /overloaded|resource_exhausted|429|503/i.test(err.message || '')
    res.status(isOverloaded ? 503 : 500).json({ error: isOverloaded ? 'Model overloaded' : 'Generation failed', detail: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`AI proxy server listening on ${PORT}`)
})
