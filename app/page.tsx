import type { CSSProperties } from "react";

const sectors = [
  ["01", "Neurotechnology", "Interfaces that let biology speak to machines.", "Neuralink · Synchron · Precision Neuroscience"],
  ["02", "Genetic Medicines & DNA", "New instructions for cells, not just new molecules.", "Orbital Therapeutics · Tome · Tessera"],
  ["03", "New Biology", "Unexplored mechanisms, modalities, and biological systems.", "Isomorphic Labs · Enveda · Chai Discovery"],
  ["04", "Horizontal Platforms", "The picks-and-shovels layer behind every drug race.", "Vivodyne · Culture Biosciences · Formation Bio"],
  ["05", "Having an Asset", "A novel owned drug or IP that proves the engine can produce value.", "Company profiles loading · 22 more to come"],
];

const stageCards = [
  { stage: "SEED", title: "Novelty", copy: "Is the science new enough to deserve the chance to grow?", accent: "#c7ff5e" },
  { stage: "SERIES A/B", title: "Platform credibility", copy: "Are customers, pharma partners, and repeated programs validating the platform?", accent: "#69d7ff" },
  { stage: "SERIES C+", title: "Compounding advantage", copy: "Does each new program, patient, and workflow make the company harder to replace?", accent: "#ff9d70" },
];

const examples = [
  { name: "Chai Discovery", tag: "Foundation models", copy: "A rapid run of pharma deployments across Lilly, Pfizer, Novartis, and argenx turns model novelty into external proof." },
  { name: "Isomorphic Labs", tag: "Platform credibility", copy: "Major pharmaceutical partnerships validate the problem and the platform. The next proof is named assets and clinical candidates." },
  { name: "Precision Neuroscience", tag: "BCI", copy: "More patients, hospital partners, FDA clearance, and a Medtronic integration show evidence beyond a technical demonstration." },
  { name: "Formation Bio", tag: "Development infrastructure", copy: "AI, proprietary pharma data, and an operating platform are brought together around downstream development outcomes." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav"><a href="#top" className="wordmark"><span className="mark" /> AV / BIOTECH</a><div className="nav-links"><a href="#thesis">Thesis</a><a href="#stages">Stages</a><a href="#map">Map</a><a href="#examples">Examples</a></div><span className="nav-status">MARKET MAP / 2026</span></nav>
      <section className="hero" id="top"><div className="hero-grid" /><div className="hero-copy"><p className="eyebrow">ALUMNI VENTURES / DEEP TECH</p><h1>Biotech is not<br /><em>one</em> industry.</h1><p className="hero-sub">It is an infrastructure problem disguised as a drug problem.</p><a className="scroll-cue" href="#thesis"><span>↓</span> Scroll to explore</a></div><div className="hero-orbit"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit-core">BIO<br /><span>MAP</span></div><div className="node node-1">DATA</div><div className="node node-2">DNA</div><div className="node node-3">BCI</div><div className="node node-4">CELL</div></div><div className="hero-footer"><span>THE BIOTECH PICKS & SHOVELS</span><span>SCROLL / 01</span></div></section>
      <section className="statement" id="thesis"><p className="eyebrow">THE CENTRAL IDEA</p><h2>The generic theme of drug discovery is over.</h2><p className="lede">More simple therapeutics will not magically surpass the scientific obstacles that already exist. The companies that matter most will make the industry more intelligent, more measurable, and more capable of discovering what biology has kept hidden.</p><div className="rule" /><div className="statement-grid"><span className="big-number">01</span><p>We are looking for companies that expand across biotech. Not just one drug. Not just one customer. A lasting science pipeline.</p></div></section>
      <section className="stages" id="stages"><div className="section-head"><p className="eyebrow">THE PROGRESSION</p><h2>Different stages ask<br /><em>different questions.</em></h2></div><div className="stage-grid">{stageCards.map((card) => <article className="stage-card" key={card.stage} style={{"--accent": card.accent} as CSSProperties}><span className="stage-dot" /><p className="stage-label">{card.stage}</p><h3>{card.title}</h3><p>{card.copy}</p><span className="card-arrow">↗</span></article>)}</div></section>
      <section className="map-section" id="map"><div className="map-title"><p className="eyebrow">THE MAP / 05 BUCKETS</p><h2>Where the<br /><em>leverage</em> lives.</h2><p>Our initial buckets became more precise as we mapped the companies. The common thread is leverage across the biology stack.</p><div className="map-legend"><span className="legend-dot live" /> Profiled now <span className="legend-dot queued" /> Placeholder</div></div><div className="sector-list">{sectors.map(([num, title, copy, companies]) => <div className="sector-row" key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p><div className="company-chips">{companies.split(" · ").map((company) => <span className={company.includes("loading") ? "placeholder-chip" : "company-chip"} key={company}>{company}</span>)}</div></div><b>↗</b></div>)}</div></section>
      <section className="platform" id="platform"><div className="platform-art"><div className="platform-ring r1" /><div className="platform-ring r2" /><div className="platform-ring r3" /><span className="platform-center">∞</span></div><div className="platform-copy"><p className="eyebrow">THE PICKS-AND-SHOVELS LAYER</p><h2>Build the<br /><em>engine.</em></h2><p>Horizontal platforms sell the tools, infrastructure, data, or workflows that many drug developers need. Their advantage compounds as every experiment adds data, improves the process, and proves utility across programs.</p><p>At Series A/B, we look for sophisticated customers and repeat usage. At Series C+, we look for embedded workflows and an operating advantage compounding faster than the services burden.</p></div></section>
      <section className="examples" id="examples"><div className="section-head"><p className="eyebrow">CASE STUDIES</p><h2>From interesting<br /><em>to inevitable.</em></h2></div><div className="example-grid">{examples.map((example, i) => <article className="example-card" key={example.name}><span className="example-num">0{i + 1}</span><p className="tag">{example.tag}</p><h3>{example.name}</h3><p>{example.copy}</p><a href="#top">Read the thesis ↗</a></article>)}</div></section>
      <section className="asset"><div><p className="eyebrow">THE CROSS-CUTTING TRAIT</p><h2>Having<br /><em>an asset.</em></h2></div><div className="asset-copy"><p>A company can be both a horizontal platform and an asset builder. Owning a differentiated asset can create a direct value inflection, establish defensible IP, and prove that the platform generates valuable biology.</p><p>But a single conventional molecule is not a platform. We ask whether the mechanism is genuinely differentiated, whether the company owns meaningful rights, whether the same technology can produce additional programs, and whether the asset is moving toward a commercially important indication.</p><div className="asset-line"><span>PLATFORM</span><b>+</b><span>OWNED IP</span><b>+</b><span>REPEATABILITY</span><b>→</b><strong>LEVERAGE</strong></div></div></section>
      <footer><div className="wordmark"><span className="mark" /> AV / BIOTECH</div><p>A market map for the next generation of biology.</p><span>© 2026 / ALUMNI VENTURES</span></footer>
    </main>
  );
}
