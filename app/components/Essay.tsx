"use client";

import type { Company, EssayParagraph, Run } from "../types";

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

function linkedRuns(runs: Run[]) {
  return runs.map((run,index) => run.href ? <a key={index} href={run.href} target="_blank" rel="noreferrer">{run.text}</a> : <span key={index}>{run.text}</span>);
}

export function Essay({ paragraphs, companies = [], onCompany }: { paragraphs: EssayParagraph[]; companies?: Company[]; onCompany?: (company: Company) => void }) {
  const firstMentions = new Set<string>();
  return <article className="essay">
    {paragraphs.slice(1).map((paragraph,index) => {
      const text = paragraph.text;
      if (["The generic theme of drug discovery is now over.","Also noting down some of AV’s companies in this sector…Osmo?","Open whitespaces: extremophiles?"].includes(text)) return null;
      const found = companies.find(company => !firstMentions.has(company.name) && text.toLowerCase().includes(company.name.toLowerCase()));
      if (found) firstMentions.add(found.name);
      const question = text.startsWith("Q:");
      const answer = text.startsWith("A:");
      const bullet = text.startsWith("The FDA granted") || text.startsWith("Precision reports") || text.startsWith("The company reports real-time") || text.startsWith("Precision and Medtronic");
      return <div key={index} className={`essay-paragraph ${question?"question":""} ${answer?"answer":""} ${bullet?"essay-bullet":""}`}>
        <p>{linkedRuns(paragraph.runs)}</p>
        {found && onCompany && <button className="company-chip" onClick={() => onCompany(found)} aria-label={`View ${found.name} in the company map`}>{found.name}<span>↘</span></button>}
        {text.startsWith("As the best companies within") && <figure className="essay-diagram"><img src="/diagrams/taxonomy.png" alt="Original diagram mapping biotech to eight final subsectors"/><figcaption>THE FINAL EIGHT SUBSECTORS / ORIGINAL RESEARCH DIAGRAM</figcaption></figure>}
        {text.startsWith("To understand why, we must look") && <figure className="essay-diagram"><img src="/diagrams/drug-lifecycle.png" alt="Original simplified drug lifecycle diagram"/><figcaption>THE DRUG LIFECYCLE / ORIGINAL RESEARCH DIAGRAM</figcaption></figure>}
        {text.startsWith("New Biology:") && <aside className="editorial-insert"><p>New Biology matters where a company is not merely optimizing a familiar therapeutic race, but opening a biological mechanism, modality, or sensing layer that was previously inaccessible. This includes approaches built around novel cell states, previously unmeasurable molecular interactions, extremophile biology, olfaction, and other underexplored systems. The investment test is not novelty for its own sake. It is whether that new science can become a repeatable engine for generating targets, tools, materials, or medicines across more than one program.</p></aside>}
      </div>;
    })}
  </article>;
}

export { slug };
