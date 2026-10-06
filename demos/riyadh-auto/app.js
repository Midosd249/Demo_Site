const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const detailMap = {
  restore: {
    title: "RESTORE",
    copy: "جلسة تجريبية تجمع تنظيفًا عميقًا، معالجة بصرية للدهان، وإنهاءً نهائيًا. في الإنتاج تُكتب المكونات الفعلية فقط بعد اعتماد المركز.",
    fit: "للأعمال التي تحتاج استعادة المظهر",
    price: "سعر يحدد بعد المعاينة"
  },
  shield: {
    title: "SHIELD",
    copy: "مسار تجريبي لحماية السطح بعد تجهيز السيارة. تفاصيل المنتج، مدة الحماية، الضمان، والسعر تُثبت فقط من المركز قبل الإطلاق.",
    fit: "لمن يريد حماية السطح بعد التجهيز",
    price: "المنتج والمدة يحددان السعر"
  },
  signature: {
    title: "SIGNATURE",
    copy: "تجربة عناية متكاملة تجمع الداخل والخارج ضمن رحلة واحدة. الباقة قابلة لإعادة التكوين بحسب خدمات الورشة الفعلية.",
    fit: "لجلسة شاملة قبل مناسبة أو تسليم",
    price: "تسعير حسب حجم السيارة"
  }
};

const detailLabel = document.getElementById("detailLabel");
const detailTitle = document.getElementById("detailTitle");
const detailCopy = document.getElementById("detailCopy");
const detailFit = document.getElementById("detailFit");
const detailPrice = document.getElementById("detailPrice");

document.querySelectorAll(".service").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".service").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const data = detailMap[button.dataset.service];
    detailLabel.textContent = "SELECTED PACKAGE";
    detailTitle.textContent = data.title;
    detailCopy.textContent = data.copy;
    detailFit.textContent = data.fit;
    detailPrice.textContent = data.price;
  });
});

const compare = document.querySelector("[data-compare]");
const range = document.querySelector(".compare-range");
const after = document.querySelector(".compare-after");
const line = document.querySelector(".compare-line");

function updateCompare(value) {
  const percent = Number(value);
  after.style.clipPath = "inset(0 " + (100 - percent) + "% 0 0)";
  line.style.left = percent + "%";
}
range.addEventListener("input", (event) => updateCompare(event.target.value));
updateCompare(range.value);

const choices = { vehicle: "سيدان", service: "RESTORE — تصحيح الدهان" };
const requestText = document.getElementById("requestText");

function renderRequest() {
  requestText.textContent =
    "مرحبًا، أريد طلب تسعيرة تجريبية لسيارة " +
    choices.vehicle +
    " لخدمة " +
    choices.service +
    ". أرجو توضيح السعر التقريبي وما إذا كانت المعاينة مطلوبة.";
}

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest("[data-choice]");
    const type = group.dataset.choice;
    group.querySelectorAll(".choice").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    choices[type] = button.dataset.value;
    renderRequest();
  });
});

document.querySelectorAll("[data-jump-quote]").forEach((button) => {
  button.addEventListener("click", () => {
    const active = document.querySelector(".service.active");
    const map = { restore: "RESTORE — تصحيح الدهان", shield: "SHIELD — سيراميك", signature: "SIGNATURE — عناية كاملة" };
    if (active && map[active.dataset.service]) {
      choices.service = map[active.dataset.service];
      document.querySelectorAll('[data-choice="service"] .choice').forEach((item) => {
        item.classList.toggle("active", item.dataset.value === choices.service);
      });
      renderRequest();
    }
    document.getElementById("quote").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  });
});

const copyButton = document.getElementById("copyRequest");
const copyStatus = document.getElementById("copyStatus");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(requestText.textContent);
    copyStatus.textContent = "تم نسخ الطلب.";
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = requestText.textContent;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    copyStatus.textContent = "تم نسخ الطلب.";
  }
  window.setTimeout(() => { copyStatus.textContent = ""; }, 2200);
});

if (!reducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.dataset.visible = "true";
    });
  }, { threshold: 0.14 });
  document.querySelectorAll(".manifesto,.section-head,.compare,.service,.feature,.gallery-head,.quote-intro,.location-copy").forEach((item) => {
    item.dataset.reveal = "true";
    observer.observe(item);
  });
}
