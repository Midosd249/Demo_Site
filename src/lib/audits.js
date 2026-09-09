const checks = (doc, url) => {
  const title=doc.querySelector('title')?.textContent?.trim()||'';
  const meta=doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim()||'';
  const h1=[...doc.querySelectorAll('h1')];
  const imgs=[...doc.images];
  const links=[...doc.querySelectorAll('a[href]')];
  const canonical=doc.querySelector('link[rel="canonical"]')?.href||'';
  const robots=doc.querySelector('meta[name="robots"]')?.content||'';
  const viewport=doc.querySelector('meta[name="viewport"]')?.content||'';
  const html=doc.documentElement;
  const internal=links.some(a=>{try{return new URL(a.href,url).origin===new URL(url).origin}catch{return false}});
  return [
    ['العنوان',!!title,'High',title||'غير موجود'],['الوصف التعريفي',!!meta,'High',meta||'غير موجود'],['H1',h1.length===1,'High',`عدد H1: ${h1.length}`],
    ['lang/dir',!!html.lang&&!!html.dir,'Medium',`lang=${html.lang||'—'} dir=${html.dir||'—'}`],['canonical',!!canonical,'Medium',canonical||'غير موجود'],
    ['robots',!!robots,'Low',robots||'غير موجود'],['viewport',!!viewport,'High',viewport||'غير موجود'],['image alt',imgs.every(i=>i.hasAttribute('alt')),'Medium',`${imgs.filter(i=>!i.hasAttribute('alt')).length} صور بلا alt`],
    ['internal links',internal,'Medium',`${links.length} روابط مكتشفة`],['HTTPS',url.startsWith('https://'),'Critical',url.startsWith('https://')?'HTTPS':'الرابط ليس HTTPS'],
    ['JSON-LD',!!doc.querySelector('script[type="application/ld+json"]'),'Medium','Schema '+(doc.querySelector('script[type="application/ld+json"]')?'موجود':'غير موجود')]
  ].map(([name,ok,priority,detail])=>({name,ok,priority,detail}));
};

export async function auditUrl(url) {
  let response;
  try { response=await fetch(url,{redirect:'follow'}); }
  catch(error) { return { status:'blocked', url, error:'تعذر قراءة الصفحة من المتصفح. قد يكون السبب CORS أو الشبكة.', errorName:error?.name||'FetchError' }; }
  if(!response.ok) return { status:'blocked', url, error:`تعذر قراءة الصفحة: HTTP ${response.status}` };
  const text=await response.text();
  const doc=new DOMParser().parseFromString(text,'text/html');
  const items=checks(doc,url);
  const score=Math.round(items.filter(x=>x.ok).length/items.length*100);
  return { status:'completed', url, score, checks:items, issues:items.filter(x=>!x.ok), recommendations:items.filter(x=>!x.ok).map(x=>`${x.priority}: ${x.name}`), raw_signals:{title:doc.title,lang:doc.documentElement.lang||null,dir:doc.documentElement.dir||null,canonical:doc.querySelector('link[rel="canonical"]')?.href||null,robots:doc.querySelector('meta[name="robots"]')?.content||null,viewport:doc.querySelector('meta[name="viewport"]')?.content||null} };
}
