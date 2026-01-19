// Netlify Function: AI proxy for Gemini (and optional Claude)
// Environment variables required in Netlify: GOOGLE_API_KEY (required), ANTHROPIC_API_KEY (optional)
// Frontend should call `${VITE_SERVER_URL}/api/generate` with JSON { model, prompt, short }

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' }
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch (err) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { model = 'gemini-2.5-pro', prompt, short = false } = body
  if (!prompt) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Missing prompt' }) }
  }

  try {
    // Claude (optional)
    if (model.toLowerCase().includes('claude')) {
      const apiKey = process.env.ANTHROPIC_API_KEY
      if (!apiKey) return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Anthropic API key not configured' }) }

      const requestBody = {
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
        body: JSON.stringify(requestBody),
      })

      const data = await resp.json()
      const text = data.completion ?? data.output ?? data?.choices?.[0]?.text ?? JSON.stringify(data)
      return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ text }) }
    }

    // Gemini
    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Google API key not configured' }) }

    let modelName = model.startsWith('models/') ? model.replace('models/', '') : model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`
    const maxTokens = short ? 200 : 2048

    const requestBody = {
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
      body: JSON.stringify(requestBody),
    })

    if (!resp.ok) {
      const detail = await resp.text()
      console.error('Gemini API error:', detail)
      const isOverloaded = /overloaded|resource_exhausted|429|503/i.test(detail)
      return {
        statusCode: isOverloaded ? 503 : 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: isOverloaded ? 'Model overloaded' : 'Gemini API error', detail })
      }
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

    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ text }) }
  } catch (err) {
    console.error('Proxy error:', err)
    const isOverloaded = /overloaded|resource_exhausted|429|503/i.test(err.message || '')
    return {
      statusCode: isOverloaded ? 503 : 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: isOverloaded ? 'Model overloaded' : 'Generation failed', detail: err.message })
    }
  }
}
