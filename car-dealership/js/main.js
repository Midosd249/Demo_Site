/* ==========================================================================
   RIYADH CARS — INTERACTION LAYER
   Vanilla JavaScript. No dependencies.
   ========================================================================== */

(() => {
  "use strict";

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const debounce = (callback, delay = 50) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };

  /* ==========================================================================
     Header scroll state + progress bar
     ========================================================================== */

  const header = $(".site-header");
  const progress = $(".scroll-progress");

  const updateScrollUI = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

    header?.classList.toggle("scrolled", window.scrollY > 50);

    if (progress) {
      progress.style.width = Math.min(Math.max(percent, 0), 100) + "%";
    }
  };

  const handleScroll = debounce(updateScrollUI, 50);
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });
  updateScrollUI();

  /* ==========================================================================
     Mobile menu
     ========================================================================== */

  const menuToggle = $(".site-header__toggle");
  const navigation = $("#site-navigation");

  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح قائمة التنقل");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  };

  const openMenu = () => {
    if (!menuToggle || !navigation) return;
    navigation.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "إغلاق قائمة التنقل");
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
  };

  menuToggle?.addEventListener("click", () => {
    navigation?.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  navigation?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  }, { passive: true });

  /* ==========================================================================
     Smooth internal navigation
     ========================================================================== */

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();

    const offset = (header?.getBoundingClientRect().height || 0) + 12;
    const top = window.scrollY + target.getBoundingClientRect().top - offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reducedMotion ? "auto" : "smooth"
    });

    history.replaceState(null, "", id);
  });

  /* ==========================================================================
     Hero slider — 3 slides, 5-second interval, fade + dots
     ========================================================================== */

  const hero = $(".hero");
  const heroSlides = $$(".hero__slide", hero || document);

  if (hero && heroSlides.length > 1) {
    const dots = document.createElement("div");
    dots.className = "hero__dots";
    dots.setAttribute("role", "tablist");
    dots.setAttribute("aria-label", "التنقل بين شرائح العرض");

    heroSlides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hero__dot";
      dot.dataset.slide = index;
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "الشريحة " + (index + 1));
      dot.setAttribute("aria-selected", index === 0 ? "true" : "false");
      dots.appendChild(dot);
    });

    hero.appendChild(dots);

    let current = 0;
    let timer = null;

    const showSlide = (index, restart = false) => {
      current = (index + heroSlides.length) % heroSlides.length;

      heroSlides.forEach((slide, slideIndex) => {
        slide.classList.toggle("hero__slide--active", slideIndex === current);
      });

      $$(".hero__dot", dots).forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle("hero__dot--active", active);
        dot.setAttribute("aria-selected", String(active));
      });

      if (restart && !reducedMotion) {
        clearInterval(timer);
        timer = setInterval(() => showSlide(current + 1), 5000);
      }
    };

    dots.addEventListener("click", (event) => {
      const dot = event.target.closest(".hero__dot");
      if (dot) showSlide(Number(dot.dataset.slide), true);
    });

    const start = () => {
      if (reducedMotion) return;
      clearInterval(timer);
      timer = setInterval(() => showSlide(current + 1), 5000);
    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clearInterval(timer);
      else start();
    });

    showSlide(0);
    start();
  }

  /* ==========================================================================
     Search tabs — شراء / تأجير
     ========================================================================== */

  const searchTabs = $$("[data-search-tab]");
  const searchPanels = $$("[data-search-panel]");

  const activateSearchTab = (key, moveFocus = false) => {
    searchTabs.forEach((tab) => {
      const active = tab.dataset.searchTab === key;
      tab.classList.toggle("search-box__tab--active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && moveFocus) tab.focus();
    });

    searchPanels.forEach((panel) => {
      const active = panel.dataset.searchPanel === key;
      panel.hidden = !active;
      panel.classList.toggle("search-box__panel--active", active);
    });
  };

  searchTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateSearchTab(tab.dataset.searchTab));

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let next = index;
      if (event.key === "ArrowLeft") next = (index + 1) % searchTabs.length;
      if (event.key === "ArrowRight") next = (index - 1 + searchTabs.length) % searchTabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = searchTabs.length - 1;

      activateSearchTab(searchTabs[next].dataset.searchTab, true);
    });
  });

  if (searchTabs.length) {
    const initial = searchTabs.find((tab) => tab.getAttribute("aria-selected") === "true");
    activateSearchTab(initial?.dataset.searchTab || searchTabs[0].dataset.searchTab);
  }

  /* ==========================================================================
     Scroll reveal — Intersection Observer
     ========================================================================== */

  const revealTargets = $$(".car-card, .service-card, .brand-card");

  if (!reducedMotion && "IntersectionObserver" in window) {
    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });

    revealTargets.forEach((element) => revealObserver.observe(element));
  }

  /* ==========================================================================
     Counter animation — supports [data-counter="1200"]
     ========================================================================== */

  const counters = $$("[data-counter]");

  const animateCounter = (element) => {
    const target = Number(element.dataset.counter);
    if (!Number.isFinite(target)) return;

    if (reducedMotion) {
      element.textContent = target.toLocaleString("en-US");
      return;
    }

    const duration = Number(element.dataset.counterDuration) || 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const progressValue = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      element.textContent = Math.round(target * eased).toLocaleString("en-US");

      if (progressValue < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  /* ==========================================================================
     Brands slider — duplicated track + Previous / Next controls
     ========================================================================== */

  const brandSlider = $("[data-brands-slider]");
  const brandTrack = $(".brands__track", brandSlider || document);

  if (brandSlider && brandTrack) {
    const originals = [...brandTrack.children];

    if (originals.length > 1) {
      originals.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("a, button").forEach((element) => {
          element.tabIndex = -1;
        });
        brandTrack.appendChild(clone);
      });

      let offset = 0;
      let setWidth = 0;
      let cardStep = 0;
      let lastTime = performance.now();
      let pausedUntil = performance.now() + 1000;

      const measure = () => {
        const first = originals[0];
        if (!first) return;

        const gap = parseFloat(getComputedStyle(brandTrack).gap) || 0;
        cardStep = first.getBoundingClientRect().width + gap;
        setWidth = cardStep * originals.length;
        offset = setWidth ? offset % setWidth : 0;
        brandTrack.style.transform = "translate3d(" + (-offset) + "px, 0, 0)";
      };

      const move = (direction) => {
        if (!cardStep) measure();
        offset += direction * cardStep;
        if (offset < 0) offset += setWidth;
        if (offset >= setWidth) offset -= setWidth;

        brandTrack.style.transition = reducedMotion ? "none" : "transform 0.35s ease";
        brandTrack.style.transform = "translate3d(" + (-offset) + "px, 0, 0)";
        pausedUntil = performance.now() + 1600;
      };

      $("[data-brands-prev]", brandSlider)?.addEventListener("click", () => move(-1));
      $("[data-brands-next]", brandSlider)?.addEventListener("click", () => move(1));

      brandSlider.addEventListener("mouseenter", () => {
        pausedUntil = Number.POSITIVE_INFINITY;
      });

      brandSlider.addEventListener("mouseleave", () => {
        pausedUntil = performance.now() + 600;
      });

      brandSlider.addEventListener("focusin", () => {
        pausedUntil = Number.POSITIVE_INFINITY;
      });

      brandSlider.addEventListener("focusout", () => {
        pausedUntil = performance.now() + 600;
      });

      const animate = (time) => {
        const delta = Math.min(time - lastTime, 40);
        lastTime = time;

        if (!reducedMotion && time > pausedUntil && setWidth > 0) {
          offset += delta * 0.035;
          if (offset >= setWidth) offset -= setWidth;
          brandTrack.style.transition = "none";
          brandTrack.style.transform = "translate3d(" + (-offset) + "px, 0, 0)";
        }

        requestAnimationFrame(animate);
      };

      measure();
      window.addEventListener("resize", debounce(measure, 100), { passive: true });
      requestAnimationFrame(animate);
    }
  }

  /* ==========================================================================
     Favorite buttons
     ========================================================================== */

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".car-card__favorite");
    if (!button) return;

    const icon = $("i", button);
    const saved = button.getAttribute("aria-pressed") === "true";
    const next = !saved;

    button.setAttribute("aria-pressed", String(next));
    button.setAttribute(
      "aria-label",
      next ? "إزالة السيارة من المفضلة" : "إضافة السيارة للمفضلة"
    );
    button.classList.toggle("is-saved", next);
    icon?.classList.toggle("fa-regular", !next);
    icon?.classList.toggle("fa-solid", next);
  });

  /* ==========================================================================
     WhatsApp float button
     ========================================================================== */

  const whatsapp = $(".whatsapp-float a");

  if (whatsapp) {
    whatsapp.setAttribute("target", "_blank");
    whatsapp.setAttribute("rel", "noopener noreferrer");
    whatsapp.setAttribute("aria-label", "تواصل معنا عبر واتساب");
  }
})();
