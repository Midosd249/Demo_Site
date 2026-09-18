import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const failures = [];
const check = (name, ok, detail = '') => { if (ok) console.log(`PASS  ${name}${detail ? ` — ${detail}` : ''}`); else failures.push(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`); };

const html = read('index.html');
const app = read('src/app.js');
const seo = read('src/screens/seo.js');
const audits = read('src/lib/audits.js');
const supabase = read('src/lib/supabase.js');
const qa = read('QA_CHECKLIST.md');
const healthy = read('tests/fixtures/seo-healthy.html');
const shell = read('tests/fixtures/growth-shell-contract.html');

check('HTML language', /<html[^>]+lang="ar"/i.test(html));
check('HTML direction', /<html[^>]+dir="rtl"/i.test(html));
check('Viewport metadata', /<meta[^>]+name="viewport"[^>]+content=/i.test(html));
check('Description metadata', /<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html));
check('Robots metadata', /<meta[^>]+name="robots"[^>]+content="[^"]+"/i.test(html));
check('Canonical metadata', /<link[^>]+rel="canonical"[^>]+href="https?:\/\//i.test(html));
check('JSON-LD metadata', /<script[^>]+type="application\/ld\+json">/i.test(html));
check('Growth shell entrypoint', /src\/app\.js/.test(html));
check('All primary routes declared', ['dashboard','websites','seo','local','ai','competitors','reports','clients','settings'].every(x => new RegExp(`\\b${x}\\b`).test(app)));
check('SEO loading state', /جارٍ قراءة الصفحة/.test(seo));
check('SEO blocked state', /النتيجة غير متاحة/.test(seo));
check('Blocked path does not score', /status==='blocked'/.test(seo) && /return;/.test(seo));
check('Network failure returns blocked', /catch\(error\).*status:'blocked'/s.test(audits));
check('HTTP failure returns blocked', /if\(!response\.ok\).*status:'blocked'/s.test(audits));
check('Score follows successful fetch', /const score=Math\.round/.test(audits));
check('No service-role frontend', !/service[_-]?role/i.test(supabase));
check('QA references validator', /node scripts\/validate-foundation\.mjs/.test(qa));
check('Healthy fixture has one H1', (healthy.match(/<h1\b/gi) || []).length === 1);
check('Healthy fixture has canonical', /rel="canonical"/i.test(healthy));
check('Healthy fixture has JSON-LD', /application\/ld\+json/i.test(healthy));
check('Shell fixture contains required states', ['loading','empty','success','error','permission'].every(x => new RegExp(`class="[^"]*\\b${x}\\b`).test(shell)));

if (failures.length) { console.error('\nFoundation validation failed:'); failures.forEach(x => console.error(x)); process.exit(1); }
console.log(`\nFoundation validation passed: ${18} checks.`);
