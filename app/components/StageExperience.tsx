"use client";

import { useState } from "react";
import type { Company, EssayParagraph } from "../types";
import { CompanyAtlas, } from "./CompanyAtlas";
import { Essay, slug } from "./Essay";
import { Motif } from "./Motif";
import { ResearchFooter } from "./ResearchFooter";
import { SiteNav } from "./SiteNav";

export function StageExperience({ kind, stage, title, thesis, paragraphs, companies }: { kind:"seed"|"early"|"growth";stage:string;title:string;thesis:string;paragraphs:EssayParagraph[];companies:Company[] }) {
  const [view,setView]=useState<"essay"|"map">("essay"); const [focus,setFocus]=useState<Company|null>(null);
  function changeView(){setView(current=>current==="essay"?"map":"essay")}
  function showCompany(company:Company){setFocus(company);setView("map");setTimeout(()=>document.getElementById(`company-${slug(company.name)}`)?.scrollIntoView({behavior:"smooth",block:"center"}),350)}
  return <main className={`stage-page ${kind} ${view==="map"?"map-mode":""}`}><SiteNav/><section className="stage-hero"><Motif kind={kind}/><p>{stage}</p><h1>{title}</h1><h2>{thesis}</h2><button className="view-switch" onClick={changeView} aria-label={`Switch to ${view==="essay"?"companies":"essay"}`}><span className={view==="essay"?"active":""}>ESSAY</span><i className={view==="map"?"right":""}/><span className={view==="map"?"active":""}>COMPANIES</span></button></section>{view==="essay"?<section className="essay-shell"><Essay paragraphs={paragraphs} companies={companies} onCompany={showCompany}/></section>:<CompanyAtlas companies={companies} initialCompany={focus}/>}<ResearchFooter kind={kind}/></main>;
}
