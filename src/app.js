import { db, currentSession, scopedSelect } from './lib/supabase.js';
import { renderDashboard } from './screens/dashboard.js';
import { renderWebsites, wireWebsiteActions } from './screens/websites.js';
import { renderSEO, wireSEO } from './screens/seo.js';
import { renderLocal, wireLocal } from './screens/local.js';
import { renderAI, wireAI } from './screens/ai.js';
import { renderCompetitors, wireCompetitors } from './screens/competitors.js';
import { renderReports } from './screens/reports.js';
import { renderClients, wireClients } from './screens/clients.js';
import { renderSettings, wireSettings } from './screens/settings.js';

const pages={dashboard:['لوحة التحكم','ملخص العمل الفعلي'],websites:['المواقع','إنشاء وإدارة وPreview المواقع'],seo:['SEO','تدقيق تقني صادق'],local:['الرؤية المحلية','إشارات الحضور المحلي'],ai:['AI Visibility','جاهزية القراءة والاكتشاف'],competitors:['المنافسون','مدخلات تنافسية موثقة'],reports:['التقارير','مصادر حقيقية فقط'],clients:['العملاء','CRM خفيف'],settings:['الإعدادات','الحساب والاتصالات']};
const state={page:location.hash.replace('#/','')||'dashboard',user:null,websites:[],audits:[],clients:[],reports:[],competitors:[]};
const root=document.querySelector('.app');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const card=(label,value)=>`<div class="card stat"><small>${esc(label)}</small><strong>${value??'—'}</strong></div>`;
function go(page){location.hash='/'+page;state.page=page;render()}; window.go=go;
function notice(text,type='success'){const n=document.querySelector('#notice');if(n){n.textContent=text;n.className='toast '+type;n.hidden=false;setTimeout(()=>n.hidden=true,3500)}}
async function load(){if(!db){state.user=null;return}const s=await currentSession();state.user=s.user;if(!s.user)return;const [w,a,c,rp,cp]=await Promise.all([scopedSelect('growth_websites'),scopedSelect('seo_audits'),scopedSelect('growth_clients'),scopedSelect('growth_reports'),scopedSelect('competitors')]);if(w.error&&w.permissionDenied)notice('لا توجد صلاحية على مساحة النشاط.','error');state.websites=w.data||[];state.audits=a.data||[];state.clients=c.data||[];state.reports=rp.data||[];state.competitors=cp.data||[]}
function shell(){const nav=Object.keys(pages).map(k=>`<button class="nav-btn" data-page="${k}">${pages[k][0]}</button>`).join('');return `<header class="topbar"><div><b>Growth Studio</b><small>Website + Digital Growth</small></div><div class="actions"><span class="badge">${state.user?'متصل':'وضع محلي'}</span><button id="auth" class="btn">${state.user?'خروج':'دخول'}</button></div></header><div class="layout"><aside>${nav}</aside><main><div class="page-head"><div><span class="eyebrow">${esc(pages[state.page][0])}</span><h1>${esc(pages[state.page][0])}</h1><p>${esc(pages[state.page][1])}</p></div></div><div id="content"></div></main></div><nav class="mobile-nav">${nav}</nav><div id="notice" class="toast" hidden></div>`}
function screen(){const ctx={state,go,card,notice,reload:async()=>{await load();render()}};switch(state.page){case'dashboard':return renderDashboard(ctx);case'websites':return renderWebsites(ctx);case'seo':return renderSEO(ctx);case'local':return renderLocal(ctx);case'ai':return renderAI(ctx);case'competitors':return renderCompetitors(ctx);case'reports':return renderReports(ctx);case'clients':return renderClients(ctx);case'settings':return renderSettings(ctx);default:return renderDashboard(ctx)}}
async function render(){root.innerHTML=shell();document.querySelectorAll('[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===state.page);b.onclick=()=>go(b.dataset.page)});document.querySelector('#content').innerHTML=screen();const ctx={state,go,card,notice,reload:async()=>{await load();render()}};wireWebsiteActions(ctx);wireSEO(ctx);wireLocal(ctx);wireAI(ctx);wireCompetitors(ctx);wireClients(ctx);wireSettings(ctx);document.querySelector('#auth')?.addEventListener('click',async()=>{if(!db){notice('الوضع المحلي فعال؛ لا توجد جلسة Supabase.','error');return}if(state.user)await db.auth.signOut();else await db.auth.signInWithOtp({email:prompt('البريد الإلكتروني')||''});await load();render()})}
window.addEventListener('hashchange',()=>{state.page=location.hash.replace('#/','')||'dashboard';render()});
await load();render();
