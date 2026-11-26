import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import handler from '../api/contact.js';

const origin = 'https://selecta-art-preview.test';
const payload = () => ({name:'Test Klient',email:'klient@example.com',service:'fotografie',message:'Rád bych nafotil koncert v Praze.',website:'',startedAt:String(Date.now()-5000)});
const post = data => new Request(`${origin}/api/contact`, {method:'POST',headers:{'Content-Type':'application/json','Origin':origin},body:JSON.stringify(data)});

test('static build contains the story and a restrictive CSP', async () => {
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  assert.match(html, /Vzhledem k tomu, že jsem dvakrát moc peněz neměl/);
  assert.match(html, /Content-Security-Policy/);
  assert.match(html, /script-src 'self' 'sha256-/);
});

test('contact rejects invalid input and foreign origins', async () => {
  assert.equal((await handler.fetch(post({...payload(),message:'x'}))).status, 400);
  const foreign = new Request(`${origin}/api/contact`, {method:'POST',headers:{'Content-Type':'application/json','Origin':'https://foreign.example'},body:JSON.stringify(payload())});
  assert.equal((await handler.fetch(foreign)).status, 403);
});

test('contact handles spam and missing mail configuration', async () => {
  assert.equal((await handler.fetch(post({...payload(),website:'spam.example'}))).status, 200);
  assert.equal((await handler.fetch(post(payload()))).status, 503);
});
