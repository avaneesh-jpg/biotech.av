import home from "./content/home.json";
import { Essay } from "./components/Essay";
import { SiteNav } from "./components/SiteNav";
import type { EssayParagraph } from "./types";

const stages=[
  {href:"/seed",index:"01",stage:"SEED",title:"Fund the new thing.",copy:"Scientific novelty with a credible path to horizontal value.",count:100},
  {href:"/early",index:"02",stage:"SERIES A/B",title:"Prove the platform.",copy:"Repeated programs and sophisticated external validation.",count:50},
  {href:"/growth",index:"03",stage:"SERIES C+",title:"Compound the advantage.",copy:"Clinical, regulatory, or workflow evidence that strengthens with scale.",count:25},
];

export default function Home(){return <main className="home-page" id="top"><SiteNav/><section className="home-hero"><p className="home-kicker">ALUMNI VENTURES / DEEP TECH / 2026</p><h1 className="home-title">The Picks-and-Shovels<br/>behind <em>better biotech.</em></h1><div className="home-deck-wrap"><p className="home-deck">A research-led map of 175 companies building the intelligence, interfaces, measurement systems, and infrastructure that modern biotech needs.</p><a href="#essay" className="scroll-cue">Read the Main Thesis ↓</a></div></section><div className="thesis-rail"><a href="#essay">READ THE MAIN THESIS ↓</a></div><section className="home-essay" id="essay"><Essay home paragraphs={home as EssayParagraph[]}/></section><section className="stage-portals"><p>CONTINUE INTO THE MAPS</p><div className="portal-grid">{stages.map(item=><a href={item.href} key={item.stage} className="portal"><span>{item.index} / {item.stage}</span><h2>{item.title}</h2><p>{item.copy}</p><b>EXPLORE {item.count} COMPANIES ↗</b></a>)}</div></section><footer className="site-footer"><span>AV / BIOTECH / 2026</span><p>Seed 100 · Series A/B 50 · Series C+ 25</p><a href="#top">BACK TO TOP ↑</a></footer></main>}
