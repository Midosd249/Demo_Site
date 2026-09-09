export const SECTION_TYPES = [
  ['hero','Hero'],['about','About'],['services','Services'],['map','Map'],['testimonials','Testimonials'],['faq','FAQ'],['cta','CTA'],['contact','Contact']
];

export function emptySite(name, businessType='Business') {
  return { name, business_type: businessType, status: 'draft', payload: { version: 1, branding: {}, seo: {}, sections: [] } };
}

export function addSection(site, type) {
  const defaults = {
    hero: { title:'عنوان النشاط', text:'وصف مختصر وواضح للنشاط.', cta:'تواصل معنا' },
    about: { title:'عن النشاط', text:'اكتب نبذة حقيقية عن النشاط.' },
    services: { title:'الخدمات', items:['خدمة أولى','خدمة ثانية'] },
    map: { title:'الموقع', address:'', embedUrl:'' },
    testimonials: { title:'آراء العملاء', items:[] },
    faq: { title:'الأسئلة الشائعة', items:[] },
    cta: { title:'جاهزون لخدمتكم', text:'اختر الإجراء المناسب.' },
    contact: { title:'تواصل معنا', phone:'', email:'', whatsapp:'' }
  };
  const sections = [...(site.payload?.sections || [])];
  sections.push({ id: crypto.randomUUID(), type, content: structuredClone(defaults[type]) });
  return { ...site, payload: { ...(site.payload || {}), sections } };
}

export function updateSection(site, id, patch) {
  return { ...site, payload: { ...(site.payload || {}), sections: (site.payload?.sections || []).map(s => s.id === id ? { ...s, content: { ...s.content, ...patch } } : s) } };
}

export function moveSection(site, id, direction) {
  const sections = [...(site.payload?.sections || [])];
  const index = sections.findIndex(s => s.id === id);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= sections.length) return site;
  [sections[index], sections[target]] = [sections[target], sections[index]];
  return { ...site, payload: { ...(site.payload || {}), sections } };
}

export function sectionLabel(type) { return SECTION_TYPES.find(x => x[0] === type)?.[1] || type; }

export function previewHtml(site) {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  return (site.payload?.sections || []).map(s => {
    const c=s.content||{};
    if(s.type==='services') return `<section><h2>${esc(c.title)}</h2><ul>${(c.items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`;
    if(s.type==='faq') return `<section><h2>${esc(c.title)}</h2>${(c.items||[]).map(x=>`<details><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join('')}</section>`;
    return `<section><h2>${esc(c.title)}</h2><p>${esc(c.text||c.address||'')}</p>${c.cta?`<button>${esc(c.cta)}</button>`:''}</section>`;
  }).join('');
}
