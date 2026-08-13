"use client";

import { useMemo, useState } from "react";
import type { Company } from "../types";
import { slug } from "./Essay";

function safeLink(value?: string) { if (!value) return ""; return /^https?:\/\//i.test(value) ? value : value.includes(".") ? `https://${value}` : ""; }
function domain(value?: string) { try { return new URL(safeLink(value)).hostname.replace(/^www\./,""); } catch { return ""; } }

function Logo({ company, large=false }: { company: Company; large?: boolean }) {
  const host=domain(company.website);
  return <div className={`company-logo ${large?"large":""}`}><span>{company.name}</span>{host && <img src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`} alt="" onError={e=>{e.currentTarget.style.display="none"}}/>}</div>;
}

function SourceBadge({ source }: { source?: string }) {
  const s=(source||"").toLowerCase(); const label=s.includes("pitch")?"PB":s.includes("harmonic")?"H":"◎"; const kind=s.includes("pitch")?"pb":s.includes("harmonic")?"harmonic":"web";
  return <span className={`source-badge ${kind}`} title={source || "Web source"}>{label}</span>;
}

function Detail({ company, onClose }: { company: Company; onClose: () => void }) {
  return <aside className="company-detail" aria-live="polite"><button className="detail-close" onClick={onClose} aria-label="Close company detail">×</button><Logo company={company} large/><a className="detail-name" href={safeLink(company.website)||undefined} target="_blank" rel="noreferrer">{company.name} <span>↗</span></a><span className="detail-subsector">{company.subsector}</span><p className="detail-type">— {company.type}</p><dl><dt>HQ</dt><dd>{company.hq||"Not disclosed"}</dd><dt>CEO</dt><dd>{company.ceo||"Not disclosed"}{company.linkedin&&<a className="linkedin" href={safeLink(company.linkedin)} target="_blank" rel="noreferrer" aria-label={`${company.ceo} LinkedIn`}>in</a>}</dd><dt>Raised</dt><dd>{company.funding||"Not disclosed"} <SourceBadge source={company.fundingSource}/></dd><dt>Investors</dt><dd>{company.investors||"Not publicly disclosed"}</dd></dl><p className="detail-description">{company.description||"Company profile in progress."}</p><div className="detail-news"><span>IN THE NEWS</span>{company.news?<a href={safeLink(company.newsUrl)||undefined} target="_blank" rel="noreferrer">{company.news} ↗</a>:<p>No linked headline available.</p>}</div></aside>;
}

export function CompanyAtlas({ companies, initialCompany }: { companies: Company[]; initialCompany?: Company | null }) {
  const [query,setQuery]=useState(""); const [subsector,setSubsector]=useState("All"); const [avOnly,setAvOnly]=useState(false); const [hovered,setHovered]=useState<Company|null>(null); const [pinned,setPinned]=useState<Company|null>(initialCompany||null);
  const subsectors=useMemo(()=>["All",...Array.from(new Set(companies.map(c=>c.subsector))).sort()],[companies]);
  const visible=useMemo(()=>companies.filter(c=>(!query||`${c.name} ${c.subsector} ${c.type}`.toLowerCase().includes(query.toLowerCase()))&&(subsector==="All"||c.subsector===subsector)&&(!avOnly||c.av)).sort((a,b)=>a.name.localeCompare(b.name)),[companies,query,subsector,avOnly]);
  const selected=pinned||hovered;
  return <section className="atlas"><div className="atlas-controls"><label className="atlas-search"><span>⌕</span><input placeholder="Search companies" value={query} onChange={e=>setQuery(e.target.value)}/></label><div className="filter-scroll">{subsectors.map(item=><button key={item} className={subsector===item?"active":""} onClick={()=>setSubsector(item)}>{item}</button>)}</div><label className="av-filter"><input type="checkbox" checked={avOnly} onChange={e=>setAvOnly(e.target.checked)}/><span/> AV PORTFOLIO</label><b>{visible.length} COMPANIES</b></div><div className="atlas-key"><span><i/> AV portfolio company</span><span>Hover to preview · click to pin</span></div><div className="logo-grid">{visible.map(company=><button id={`company-${slug(company.name)}`} className={`logo-tile ${company.av?"av-company":""} ${pinned?.name===company.name?"pinned":""}`} key={company.name} onMouseEnter={()=>setHovered(company)} onMouseLeave={()=>setHovered(null)} onClick={()=>setPinned(company)}><Logo company={company}/><small>{company.type}</small></button>)}</div>{selected&&<Detail company={selected} onClose={()=>{setPinned(null);setHovered(null)}}/>}</section>;
}
