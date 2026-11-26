import {cp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {dirname, join, resolve, sep} from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'src');
const output = join(root, 'public');
if (!output.startsWith(root + sep)) throw new Error('Unsafe output path');
await rm(output, {recursive:true, force:true});
await mkdir(output, {recursive:true});
await cp(source, output, {recursive:true});

const oldOrigin = 'https://selecta-art-portfolio.lukas-mitlener.chatgpt.site';
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const origin = host ? `https://${host}` : oldOrigin;
for (const file of ['index.html','robots.txt','sitemap.xml']) {
  const path = join(output, file);
  let contents = await readFile(path, 'utf8');
  contents = contents.replaceAll(oldOrigin, origin);
  if (file === 'index.html') {
    const ld = contents.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    if (!ld) throw new Error('Missing JSON-LD');
    const hash = createHash('sha256').update(ld).digest('base64');
    const csp = `default-src 'none'; script-src 'self' 'sha256-${hash}'; style-src 'self'; img-src 'self'; connect-src 'self'; font-src 'self'; form-action 'self'; base-uri 'none'; object-src 'none'; upgrade-insecure-requests`;
    contents = contents.replace('<title>', `<meta http-equiv="Content-Security-Policy" content="${csp}">\n  <title>`);
  }
  await writeFile(path, contents);
}
console.log(`Built static site for ${origin}`);
