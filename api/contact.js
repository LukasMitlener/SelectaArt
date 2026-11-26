/* Vercel Web signature function. No submitted content is rendered as HTML. */
const destination = 'SelectaArt4U@gmail.com';
const allowedServices = new Set(['fotografie', 'kaligrafie', 'jine']);
const attempts = new Map();

function json(body, status = 200) {
  return Response.json(body, {status, headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
function clean(value, max) {
  if (typeof value !== 'string' || value.length > max) return null;
  const trimmed = value.trim();
  return /[\u0000-\u001f\u007f]/.test(trimmed) ? null : trimmed;
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') return json({error:'method'}, 405);
    const origin = request.headers.get('Origin');
    if (origin && origin !== new URL(request.url).origin) return json({error:'origin'}, 403);
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) return json({error:'content_type'}, 415);
    const length = Number(request.headers.get('Content-Length') || 0);
    if (length > 8192) return json({error:'too_large'}, 413);
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const recent = (attempts.get(ip) || []).filter(time => now - time < 60000);
    if (recent.length >= 4) return json({error:'rate_limit'}, 429);
    recent.push(now); attempts.set(ip, recent);
    if (attempts.size > 5000) attempts.clear();
    let data;
    try { data = await request.json(); } catch { return json({error:'json'}, 400); }
    if (data.website) return json({ok:true});
    const started = Number(data.startedAt);
    if (!Number.isFinite(started) || now - started < 2000 || now - started > 86400000) return json({error:'timing'}, 400);
    const name = clean(data.name, 100);
    const email = clean(data.email, 254);
    const service = clean(data.service, 20);
    const message = clean(data.message, 3000);
    if (!name || name.length < 2 || !email || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || !allowedServices.has(service) || !message || message.length < 10) return json({error:'validation'}, 400);
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) return json({error:'not_configured'}, 503);
    const mail = {from:process.env.RESEND_FROM_EMAIL,to:[destination],reply_to:email,subject:`Selecta Art: nová poptávka (${service})`,text:`Jméno: ${name}\nE-mail: ${email}\nSlužba: ${service}\n\n${message}`};
    try {
      const sent = await fetch('https://api.resend.com/emails', {method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify(mail)});
      return sent.ok ? json({ok:true}) : json({error:'delivery'}, 502);
    } catch { return json({error:'delivery'}, 502); }
  }
};
