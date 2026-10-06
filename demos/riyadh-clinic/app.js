const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sheet = document.querySelector("#sheet");
const title = document.querySelector("#sheetTitle");
const note = document.querySelector("#sheetNote");
const select = document.querySelector("#service");
const progress = document.querySelector("#progress");

const openSheet = (service, description) => {
  title.textContent = service;
  note.textContent = description;
  sheet.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  sheet.dataset.service = service;
};

const closeSheet = () => {
  sheet.classList.add("hidden");
  document.body.style.overflow = "";
};

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => openSheet(card.dataset.service, card.dataset.note));
});

document.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeSheet));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !sheet.classList.contains("hidden")) closeSheet();
});

document.querySelector("#chooseService").addEventListener("click", () => {
  if (!sheet.dataset.service) return;
  select.value = sheet.dataset.service;
  closeSheet();
  document.querySelector("#appointment").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  select.focus();
});

document.querySelector("#copyRequest").addEventListener("click", async () => {
  const service = select.value || "طلب موعد";
  const noteValue = document.querySelector("#note").value.trim();
  const message = [
    "مرحباً، أرغب بطلب موعد في NOVA (DEMO).",
    "الخدمة: " + service,
    noteValue ? "ملاحظتي: " + noteValue : ""
  ].filter(Boolean).join("\n");

  try {
    await navigator.clipboard.writeText(message);
    document.querySelector("#status").textContent = "تم نسخ طلب الموعد. عند اعتماد بيانات العيادة يمكن ربطه بقناة الحجز الحقيقية.";
  } catch {
    document.querySelector("#status").textContent = message;
  }
});

if (reducedMotion) {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
}

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.height = scrollable > 0 ? `${Math.min(window.scrollY / scrollable, 1) * 100}%` : "0%";
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");
if (dot && ring && !reducedMotion && window.matchMedia("(pointer:fine)").matches) {
  let ringX = window.innerWidth / 2;
  let ringY = window.innerHeight / 2;
  let targetX = ringX;
  let targetY = ringY;

  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    dot.style.left = `${targetX}px`;
    dot.style.top = `${targetY}px`;
  }, { passive: true });

  const follow = () => {
    ringX += (targetX - ringX) * 0.16;
    ringY += (targetY - ringY) * 0.16;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(follow);
  };
  follow();

  document.querySelectorAll("a,button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "46px";
      ring.style.height = "46px";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "34px";
      ring.style.height = "34px";
    });
  });
}
