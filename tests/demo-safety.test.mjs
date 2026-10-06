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

test("completed demos keep explicit DEMO labeling", () => {
  assert.match(read("demos/riyadh-barber/index.html"), /DEMO/);
  assert.match(read("demos/riyadh-salon/index.html"), /DEMO/);
});
