const items=[...document.querySelectorAll(".item")];
const cats=[...document.querySelectorAll(".cat")];
const sheet=document.querySelector("#itemSheet");
const title=document.querySelector("#sheetTitle");
const desc=document.querySelector("#sheetDesc");
const price=document.querySelector("#sheetPrice");
const langToggle=document.querySelector("#langToggle");

cats.forEach(cat=>{
  cat.addEventListener("click",()=>{
    cats.forEach(x=>{x.classList.remove("active");x.setAttribute("aria-selected","false")});
    cat.classList.add("active");cat.setAttribute("aria-selected","true");
    const selected=cat.dataset.category;
    items.forEach(item=>item.classList.toggle("hidden",selected!=="all"&&item.dataset.category!==selected));
  });
});

function openSheet(item){
  title.textContent=item.dataset.name;
  desc.textContent=item.dataset.desc;
  price.textContent=item.dataset.price+" ر.س";
  sheet.classList.remove("hidden");
  document.body.classList.add("lock");
  sheet.querySelector(".sheet-close")?.focus();
}
function closeSheet(){sheet.classList.add("hidden");document.body.classList.remove("lock")}
items.forEach(item=>item.addEventListener("click",()=>openSheet(item)));
sheet.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeSheet));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!sheet.classList.contains("hidden"))closeSheet()});

const translations={
ar:{
navMenu:"المنيو",navStory:"الحكاية",navSpace:"المكان",navVisit:"زيارة",openMenu:"افتح المنيو",eyebrow:"قهوة تُحضر بهدوء، وتُذكر طويلاً.",
heroTitle:"نور،<br><em>على مهل.</em>",heroCopy:"مقهى مختص افتراضي صُمم ليُظهر كيف يمكن للموقع والمنيو الرقمي أن يصبحا امتدادًا حقيقيًا لتجربة المكان.",
findUs:"اكتشف المكان",menuTitle:"قائمة قصيرة. اختيارات محسوبة.",menuIntro:"هذا الجزء هو نقطة البيع الأولى: منيو يمكن تصفحه بسرعة، فهمه على الجوال، وتحديثه بدون إعادة طباعة.",
items:"عنصر تجريبي",storyTitle:"المنيو ليست صفحة. هي لحظة قرار.",storyCopy:"التصميم هنا لا يدفن القائمة تحت عشرات الأقسام. العميل يصل إلى المنتج، يرى السعر والوصف، ثم يقرر أين يذهب بعد ذلك.",
spaceTitle:"تفاصيل قليلة، حضور كبير.",quote:"الموقع الجيد لا ينافس المكان. يجعلك متحمسًا للوصول إليه.",
visitTitle:"الخطوة التالية: زيارة المكان.",visitCopy:"في النسخة الحقيقية تُربط هذه المنطقة بموقع الفرع، ساعات العمل، واتساب، الخرائط والحجز.",whatsapp:"واتساب",directions:"الاتجاهات"
},
en:{
navMenu:"Menu",navStory:"Story",navSpace:"Space",navVisit:"Visit",openMenu:"Open menu",eyebrow:"Coffee made slowly. Remembered longer.",
heroTitle:"NŪR,<br><em>take it slow.</em>",heroCopy:"A fictional specialty coffee concept showing how a website and digital menu can become a natural extension of the hospitality experience.",
findUs:"Find the space",menuTitle:"A short menu. Considered choices.",menuIntro:"The first commercial moment: a menu that is quick to browse, clear on mobile, and easy to update without reprinting.",
items:"demo items",storyTitle:"The menu is not a page. It is a decision moment.",storyCopy:"The interface avoids burying the menu under endless sections. Guests reach the product, see the price and description, then know what to do next.",
spaceTitle:"Few details. Strong presence.",quote:"A good website does not compete with the place. It makes you want to arrive.",
visitTitle:"Next step: come by.",visitCopy:"In a real client build this area connects the branch, hours, WhatsApp, maps, and booking flow.",whatsapp:"WhatsApp",directions:"Directions"
}
};
let currentLang="ar";
function setLanguage(lang){
currentLang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
langToggle.textContent=lang==="ar"?"EN":"AR";
}
langToggle?.addEventListener("click",()=>setLanguage(currentLang==="ar"?"en":"ar"));
setLanguage("ar");
