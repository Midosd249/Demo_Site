const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const sheet=$("#sheet"),selected=$("#selectedService"),selectedTime=$("#selectedTime"),wa=$("#bookWhatsApp");
const encode=s=>encodeURIComponent(s);
function setBooking(name,price,time){selected.textContent=name;selectedTime.textContent=time;wa.href="https://wa.me/?text="+encode("مرحباً، أرغب بحجز "+name+" في LUMÉRA. السعر الابتدائي "+price+" ر.س، والمدة "+time+". أود معرفة أقرب موعد متاح.");}
function openService(btn){const name=btn.dataset.service,price=btn.dataset.price,time=btn.dataset.time;$("#sheetTitle").textContent=name;$("#sheetMeta").textContent=time+" · السعر الابتدائي";$("#sheetPrice").textContent=price+" ر.س";$("#sheetBook").href="https://wa.me/?text="+encode("مرحباً، أرغب بحجز "+name+" في LUMÉRA. السعر الابتدائي "+price+" ر.س، والمدة "+time+". أود معرفة أقرب موعد متاح.");sheet.classList.remove("hidden");document.body.style.overflow="hidden";setBooking(name,price,time)}
$$(".service").forEach(btn=>btn.addEventListener("click",()=>openService(btn)));
$$("[data-close]").forEach(el=>el.addEventListener("click",()=>{sheet.classList.add("hidden");document.body.style.overflow=""}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){sheet.classList.add("hidden");document.body.style.overflow=""}});
$$(".ritual-tabs button").forEach(tab=>tab.addEventListener("click",()=>{const f=tab.dataset.filter;$$(".ritual-tabs button").forEach(x=>x.classList.remove("active"));tab.classList.add("active");$$(".service").forEach(item=>item.hidden=f!=="all"&&item.dataset.category!==f)}));
$("#lang").addEventListener("click",()=>{const root=document.documentElement;const en=root.lang==="ar";root.lang=en?"en":"ar";root.dir=en?"ltr":"rtl";$("#lang").textContent=en?"AR":"EN";document.title=en?"LUMÉRA — Beauty Atelier · DEMO":"LUMÉRA — Beauty Atelier · DEMO";});
selected.addEventListener("click",()=>document.querySelector("#rituals").scrollIntoView({behavior:"smooth"}));