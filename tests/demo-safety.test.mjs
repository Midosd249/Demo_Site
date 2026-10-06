import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("completed demos do not ship placeholder phone numbers", () => {
  const barber = read("demos/riyadh-barber/index.html");
  const salon = read("demos/riyadh-salon/index.html");
  assert.doesNotMatch(barber, /tel:\+966500000000/);
  assert.doesNotMatch(salon, /tel:\+966500000000/);
});

test("completed website demos remain outside the digital-menu product", () => {
  const barber = read("demos/riyadh-barber/index.html").toLowerCase();
  const salon = read("demos/riyadh-salon/index.html").toLowerCase();
  assert.doesNotMatch(barber, /digital menu|qr menu|menu system/);
  assert.doesNotMatch(salon, /digital menu|qr menu|menu system/);
});

test("public portfolio exposes completed demos without requiring Supabase auth", () => {
  const index = read("index.html");
  assert.doesNotMatch(index, /supabase-config\.js/);
  assert.match(index, /riyadh-barber/);
  assert.match(index, /riyadh-salon/);
  assert.match(index, /riyadh-clinic/);
});

test("clinic demo keeps medical demo data truthful", () => {
  const clinic = read("demos/riyadh-clinic/index.html");
  assert.match(clinic, /DEMO/);
  assert.match(clinic, /dir="rtl"/);
  assert.doesNotMatch(clinic, /tel:\+966500000000/);
  assert.doesNotMatch(clinic.toLowerCase(), /digital menu|qr menu|menu system/);
  assert.match(clinic, /طلب موعد/);
});

test("completed demos keep explicit DEMO labeling", () => {
  assert.match(read("demos/riyadh-barber/index.html"), /DEMO/);
  assert.match(read("demos/riyadh-salon/index.html"), /DEMO/);
});


test("clinic demo uses the premium visual system instead of a text-first template stack", () => {
  const clinic = read("demos/riyadh-clinic/index.html");
  const css = read("demos/riyadh-clinic/styles.css");
  const js = read("demos/riyadh-clinic/app.js");

  assert.match(clinic, /class="hero-stage"/);
  assert.match(clinic, /class="floating-nav"/);
  assert.match(clinic, /data-reveal/);
  assert.match(clinic, /class="service-stage"/);
  assert.match(clinic, /class="appointment-dock"/);
  assert.match(css, /position:sticky/);
  assert.match(css, /clip-path/);
  assert.match(css, /mix-blend-mode/);
  assert.match(css, /@keyframes/);
  assert.match(js, /IntersectionObserver/);
  assert.match(js, /prefers-reduced-motion/);
});

test("public portfolio has no fake contact destination", () => {
  const index = read("index.html");
  assert.doesNotMatch(index, /hello@example\.com/);
});


test("all sales demos prioritize phone composition before tablet widths", () => {
  for (const file of [
    "demos/riyadh-barber/styles.css",
    "demos/riyadh-salon/styles.css",
    "demos/riyadh-clinic/styles.css"
  ]) {
    assert.match(read(file), /@media\s*\(max-width:1100px\)/);
  }
});


test("auto demo uses the Refero-led automotive visual system and truthful quote flow", () => {
  const auto = read("demos/riyadh-auto/index.html");
  const css = read("demos/riyadh-auto/styles.css");
  const js = read("demos/riyadh-auto/app.js");
  assert.match(auto, /VANTA/);
  assert.match(auto, /dir="rtl"/);
  assert.match(auto, /noindex,nofollow/);
  assert.match(auto, /data-compare/);
  assert.match(auto, /طلب تسعيرة/);
  assert.match(auto, /DEMO/);
  assert.doesNotMatch(auto.toLowerCase(), /digital menu|qr menu|menu system/);
  assert.match(css, /@media\(max-width:1100px\)/);
  assert.match(css, /--acid:/);
  assert.match(css, /clip-path/);
  assert.doesNotMatch(css, /box-shadow:inset 3px/);
  assert.match(js, /navigator\.clipboard/);
  assert.match(js, /prefers-reduced-motion/);
});
