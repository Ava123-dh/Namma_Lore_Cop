// Vercel serverless function for AI proxy
// Deploy this file; set environment variables: GOOGLE_API_KEY (required), ANTHROPIC_API_KEY (optional)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const { model = 'gemini-2.5-pro', prompt, short = false } = req.body || {}
    if (!prompt) {
      res.status(400).json({ error: 'Missing prompt' })
      return
    }

    // Claude support (optional)
    if (model.toLowerCase().includes('claude')) {
      const apiKey = process.env.ANTHROPIC_API_KEY
      if (!apiKey) return res.status(500).json({ error: 'Anthropic API key not configured' })

      const body = {
        model,
        prompt,
        max_tokens: short ? 256 : 512,
        temperature: 0.2,
      }

      const resp = await fetch('https://api.anthropic.com/v1/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(body),
      })

      const data = await resp.json()
      const text = data.completion ?? data.output ?? data?.choices?.[0]?.text ?? JSON.stringify(data)
      res.status(200).json({ text })
      return
    }

    // Gemini
    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
      res.status(500).json({ error: 'Google API key not configured' })
      return
    }

    let modelName = model.startsWith('models/') ? model.replace('models/', '') : model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`
    const maxTokens = short ? 200 : 2048

    const body = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: maxTokens,
      },
    }

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!resp.ok) {
      const detail = await resp.text()
      console.error('Gemini API error:', detail)
      res.status(500).json({ error: 'Gemini API error', detail })
      return
    }

    const data = await resp.json()

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

    res.status(200).json({ text })
  } catch (err) {
    console.error('Proxy error:', err)
    res.status(500).json({ error: 'Generation failed', detail: err.message })
  }
}
