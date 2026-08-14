import Link from "next/link";

export function SiteNav() {
  return <nav className="site-nav" aria-label="Primary navigation">
    <Link href="/" className="site-brand"><b>AV</b>BIOTECH / 2026</Link>
    <div className="site-links"><Link href="/seed">Seed <sup>100</sup></Link><Link href="/early">Series A/B <sup>50</sup></Link><Link href="/growth">Series C+ <sup>25</sup></Link></div>
    <span className="nav-note">THE PICKS &amp; SHOVELS</span>
  </nav>;
}
