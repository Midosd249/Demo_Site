const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const sheet=$("#sheet"),selected=$("#selectedService"),selectedTime=$("#selectedTime"),preview=$("#messagePreview"),status=$("#copyStatus");
let booking={name:"",price:"",time:""};
const makeMessage=()=>booking.name?("مرحباً، أرغب بحجز "+booking.name+" في LUMÉRA. السعر الابتدائي "+booking.price+" ر.س، والمدة "+booking.time+". أود معرفة أقرب موعد متاح."):"مرحباً، أرغب بحجز موعد في LUMÉRA. أود معرفة أقرب موعد متاح.";
function setBooking(name,price,time){booking={name,price,time};selected.textContent=name;selectedTime.textContent=time;preview.textContent=makeMessage()}
function openService(btn){const{name,price,time}={name:btn.dataset.service,price:btn.dataset.price,time:btn.dataset.time};$("#sheetTitle").textContent=name;$("#sheetMeta").textContent=time+" · السعر الابتدائي";$("#sheetPrice").textContent=price+" ر.س";setBooking(name,price,time);sheet.classList.remove("hidden");document.body.style.overflow="hidden";$("#sheetChoose").focus()}
function closeSheet(){sheet.classList.add("hidden");document.body.style.overflow=""}
$$(".ritual").forEach(btn=>btn.addEventListener("click",()=>openService(btn)));
$$("[data-close]").forEach(el=>el.addEventListener("click",closeSheet));
$("#sheetChoose").addEventListener("click",closeSheet);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!sheet.classList.contains("hidden"))closeSheet()});
$$(".filter-wrap button").forEach(tab=>tab.addEventListener("click",()=>{const f=tab.dataset.filter;$$(".filter-wrap button").forEach(x=>x.classList.remove("active"));tab.classList.add("active");$$(".ritual").forEach(item=>item.hidden=f!=="all"&&item.dataset.category!==f)}));
selected.addEventListener("click",()=>$("#rituals").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}));
$("#copyMessage").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(makeMessage());status.textContent="تم نسخ رسالة الحجز — جاهزة للصقها في واتساب."}catch{status.textContent="تعذر النسخ تلقائياً؛ حددي الرسالة وانسخيها يدوياً."}});