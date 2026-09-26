// Netlify Function: Google Cloud Text-to-Speech proxy.
// Requires env var GOOGLE_TTS_API_KEY (a Google Cloud API key with the
// "Cloud Text-to-Speech API" enabled). Falls back to GOOGLE_API_KEY if set.
// Frontend calls `${VITE_SERVER_URL}/api/tts` with JSON { text, voice }.

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
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { text, voice = 'en-IN-Neural2-A', speakingRate = 0.96, pitch = 0 } = body
  if (!text || !text.trim()) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Missing text' }) }
  }

  const apiKey = process.env.GOOGLE_TTS_API_KEY || process.env.GOOGLE_API_KEY
  if (!apiKey) {
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'TTS API key not configured' }) }
  }

  // Derive "en-IN" from a voice name like "en-IN-Neural2-A".
  const languageCode = voice.split('-').slice(0, 2).join('-') || 'en-IN'

  const requestBody = {
    input: { text: text.slice(0, 4800) },
    voice: { languageCode, name: voice },
    audioConfig: { audioEncoding: 'MP3', speakingRate, pitch },
  }

  try {
    const resp = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
    const data = await resp.json()
    if (!resp.ok || !data.audioContent) {
      const detail = data?.error?.message || JSON.stringify(data)
      console.error('Google TTS error:', detail)
      return { statusCode: resp.status || 500, headers: corsHeaders, body: JSON.stringify({ error: 'TTS failed', detail }) }
    }
    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ audioContent: data.audioContent }) }
  } catch (err) {
    console.error('TTS proxy error:', err)
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'TTS request failed', detail: err.message }) }
  }
}
