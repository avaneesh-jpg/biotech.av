"use client";

import { useState } from "react";
import type { Company, EssayParagraph } from "../types";
import { CompanyAtlas, } from "./CompanyAtlas";
import { Essay, slug } from "./Essay";
import { Motif } from "./Motif";
import { SiteNav } from "./SiteNav";

export function StageExperience({ kind, label, title, thesis, paragraphs, companies }: { kind:"seed"|"early"|"growth";label:string;title:string;thesis:string;paragraphs:EssayParagraph[];companies:Company[] }) {
  const [view,setView]=useState<"essay"|"map">("essay"); const [focus,setFocus]=useState<Company|null>(null);
  function showCompany(company:Company){setFocus(company);setView("map");setTimeout(()=>document.getElementById(`company-${slug(company.name)}`)?.scrollIntoView({behavior:"smooth",block:"center"}),120)}
  return <main className={`stage-page ${kind} ${view==="map"?"map-mode":""}`}><SiteNav/><section className="stage-hero"><Motif kind={kind}/><p>{label}</p><h1>{title}</h1><h2>{thesis}</h2><div className="view-switch" role="group" aria-label="Choose essay or company map"><button className={view==="essay"?"active":""} onClick={()=>setView("essay")}>ESSAY</button><i className={view==="map"?"right":""}/><button className={view==="map"?"active":""} onClick={()=>setView("map")}>COMPANIES</button></div></section>{view==="essay"?<section className="essay-shell"><header><span>FULL THESIS / ORIGINAL ESSAY</span><b>{companies.length} COMPANIES IN THIS MAP</b></header><Essay paragraphs={paragraphs} companies={companies} onCompany={showCompany}/></section>:<CompanyAtlas companies={companies} initialCompany={focus}/>}</main>;
}
