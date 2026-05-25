import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  let body: { password?: string; action?: string; data?: Record<string, unknown> }
  try { body = await req.json() } catch { return json({ error: 'Invalid JSON' }, 400) }

  const { password, action, data } = body
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const sb = createClient(supabaseUrl, serviceKey)

  // Senha vem do banco (_config) — nunca do código
  const { data: cfg } = await sb.from('_config').select('value').eq('key', 'teacher_password').single()
  const teacherPassword = cfg?.value
  if (!teacherPassword) return json({ error: 'Configuração ausente' }, 500)

  if (!password || password !== teacherPassword) return json({ error: 'Unauthorized' }, 401)

  if (action === 'check') return json({ ok: true })

  if (action === 'update_state') {
    const { error } = await sb.from('portal_state').update(data).eq('id', 1)
    if (error) return json({ error: error.message }, 500)
    return json({ ok: true })
  }

  if (action === 'delete_history') {
    const id = (data as { id: number })?.id
    if (!id) return json({ error: 'Missing id' }, 400)
    const { error } = await sb.from('quiz_history').delete().eq('id', id)
    if (error) return json({ error: error.message }, 500)
    return json({ ok: true })
  }

  if (action === 'clear_history') {
    const { error } = await sb.from('quiz_history').delete().neq('id', 0)
    if (error) return json({ error: error.message }, 500)
    return json({ ok: true })
  }

  if (action === 'change_password') {
    const newPw = (data as { new_password?: string })?.new_password
    if (!newPw || newPw.length < 4) return json({ error: 'Senha muito curta' }, 400)
    const { error } = await sb.from('_config').update({ value: newPw }).eq('key', 'teacher_password')
    if (error) return json({ error: error.message }, 500)
    return json({ ok: true })
  }

  return json({ error: 'Unknown action' }, 400)
})
