import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.resolve(root, "../bridge/trusted-read-blog-1786601377794/document-result.json");
const raw = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const document = raw.structuredContent?.result ?? raw.structuredContent ?? raw;
const targets = {
  "Biotech Seed Thesis": "seed.json",
  "Biotech Early Thesis": "early.json",
  "Biotech Growth Thesis": "growth.json",
};

const clean = (value = "") => value.replace(/\n$/, "");
const normalized = (value = "") => value.trimEnd();

function sourceParagraphs(tab) {
  return (tab.body?.content ?? []).flatMap((element) => {
    const paragraph = element.paragraph;
    if (!paragraph) return [];
    const runs = (paragraph.elements ?? []).flatMap((item) => {
      const textRun = item.textRun;
      if (!textRun) return [];
      const style = textRun.textStyle ?? {};
      return [{ text: clean(textRun.content), href: style.link?.url ?? "", bold: Boolean(style.bold), italic: Boolean(style.italic) }];
    });
    const text = normalized(runs.map((run) => run.text).join(""));
    if (!text) return [];
    const paragraphStyle = paragraph.paragraphStyle ?? {};
    const indentPt = paragraphStyle.indentStart?.magnitude ?? 0;
    return [{ text, runs, bullet: Boolean(paragraph.bullet), indentLevel: Math.max(0, Math.round(indentPt / 36)) }];
  });
}

for (const [title, filename] of Object.entries(targets)) {
  const tab = document.tabs.find((candidate) => candidate.title === title);
  if (!tab) throw new Error(`Missing source tab: ${title}`);
  const source = sourceParagraphs(tab);
  const targetPath = path.join(root, "app/content", filename);
  const current = JSON.parse(fs.readFileSync(targetPath, "utf8"));
  if (current.length !== source.length) throw new Error(`${title}: paragraph count changed (${current.length} local, ${source.length} source)`);
  const merged = current.map((paragraph, index) => {
    const formatting = source[index];
    if (normalized(paragraph.text) !== formatting.text) throw new Error(`${title}: paragraph ${index + 1} no longer matches the source document`);
    return { ...paragraph, runs: formatting.runs, ...(formatting.bullet ? { bullet: true } : {}), ...(formatting.indentLevel ? { indentLevel: formatting.indentLevel } : {}) };
  });
  fs.writeFileSync(targetPath, `${JSON.stringify(merged, null, 2)}\n`);
}
