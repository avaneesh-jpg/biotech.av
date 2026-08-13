"use client";

import type { Company, EssayParagraph, Run } from "../types";
import type { ReactNode } from "react";

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

const subsectorClass:Record<string,string>={
  "AI Discovery & Bio Foundation Models":"sector-ai","Neurotech & BCI":"sector-neuro","Lab Automation, Agentic Science & Data Infra":"sector-lab","Cell/Tissue, Ag-Vet & Biosecurity":"sector-cell","Diagnostics, Biosensors & Sample Infra":"sector-diagnostics","Genomics, Omics, Proteomics & Imaging":"sector-omics","Delivery Systems":"sector-delivery","Synthesis, Biomanufacturing & Bioprocess":"sector-synthesis","Strategic Therapeutics / Asset-Building":"sector-ai"
};

function RichText({runs,company,onCompany}:{runs:Run[];company?:Company;onCompany?:(company:Company)=>void}){
  const styled = (run:Run, content:ReactNode, key:string) => {
    let node = content;
    if(run.italic) node = <em>{node}</em>;
    if(run.bold) node = <strong>{node}</strong>;
    return run.href?<a key={key} href={run.href} target="_blank" rel="noreferrer">{node}</a>:<span key={key}>{node}</span>;
  };
  let inserted=false;
  return <>{runs.flatMap((run,index)=>{
    const content=styled(run,run.text,`${index}-run`);
    if(!company||!onCompany||inserted)return [content];
    const offset=run.text.toLowerCase().indexOf(company.name.toLowerCase());
    if(offset<0)return [content];
    inserted=true;const before=run.text.slice(0,offset);const name=run.text.slice(offset,offset+company.name.length);const after=run.text.slice(offset+company.name.length);
    return [<span key={`${index}-rich`}>{styled({...run,href:""},before,`${index}-before`)}<button className={`company-chip ${subsectorClass[company.subsector]||""}`} onClick={()=>onCompany(company)} aria-label={`View ${company.name} in the company map`}>{name}<span>↘</span></button>{styled(run,after,`${index}-after`)}</span>];
  })}</>;
}

export function Essay({ paragraphs, companies = [], onCompany, home=false }: { paragraphs: EssayParagraph[]; companies?: Company[]; onCompany?: (company: Company) => void; home?:boolean }) {
  const firstMentions = new Set<string>();
  return <article className={`essay ${home?"main-thesis":""}`}>
    {paragraphs.slice(1).map((paragraph,index) => {
      const text = paragraph.text;
      if (["The generic theme of drug discovery is now over.","Also noting down some of AV’s companies in this sector…Osmo?","Open whitespaces: extremophiles?"].includes(text)) return null;
      const found = companies.find(company => !firstMentions.has(company.name) && text.toLowerCase().includes(company.name.toLowerCase()));
      if (found) firstMentions.add(found.name);
      if(text.startsWith("New Biology:")) return <div key={index} className="essay-paragraph"><p>New Biology: Just as genetic medicines and DNA offer novel sectors for innovation in biotech, New Biology groups together other unexplored sectors of biology. It is highly difficult in mid-2026 to innovate in generic fields of biology. Therefore, we encourage approaches built around novel cell states, previously unmeasurable molecular interactions, extremophile biology, olfaction, and other under-explored systems.</p></div>;
      const paragraphClass = `essay-paragraph${paragraph.bullet?" is-bullet":""}${paragraph.indentLevel?` is-indented indent-${paragraph.indentLevel}`:""}`;
      const prose = <RichText runs={paragraph.runs} company={found} onCompany={onCompany}/>;
      return <div key={index} className={paragraphClass}>{paragraph.bullet?<ul className="essay-list"><li>{prose}</li></ul>:<p>{prose}</p>}
        {text.startsWith("As the best companies within") && <figure className="essay-diagram"><img src="/diagrams/taxonomy.png" alt="Original diagram mapping biotech to eight final subsectors"/><figcaption>THE FINAL EIGHT SUBSECTORS / ORIGINAL RESEARCH DIAGRAM</figcaption></figure>}
        {text.startsWith("To understand why, we must look") && <figure className="essay-diagram"><img src="/diagrams/drug-lifecycle.png" alt="Original simplified drug lifecycle diagram"/><figcaption>THE DRUG LIFECYCLE / ORIGINAL RESEARCH DIAGRAM</figcaption></figure>}
      </div>;
    })}
  </article>;
}

export { slug, subsectorClass };
