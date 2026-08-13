import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("ships the four-page 175-company research atlas", async () => {
  const [home, seed, early, growth, raw, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/seed/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/early/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/growth/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/content/companies.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  const companies=JSON.parse(raw);
  assert.equal(companies.length,175);
  assert.equal(companies.filter(c=>c.stage==="Seed").length,100);
  assert.equal(companies.filter(c=>c.stage==="Series A/B").length,50);
  assert.equal(companies.filter(c=>c.stage==="Series C+").length,25);
  assert.match(home,/Picks-and-Shovels/);
  assert.match(home,/Read the Main Thesis/);
  assert.match(seed,/Seed Top 100/);
  assert.match(early,/Series A\/B Top 50/);
  assert.match(growth,/Series C\+ Top 25/);
  assert.ok(companies.some(c=>c.name==="Neuralink"));
  assert.ok(companies.some(c=>c.name==="Isomorphic Labs"));
  assert.match(layout,/og\.png/);
});
