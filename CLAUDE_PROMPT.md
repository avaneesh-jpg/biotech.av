# Claude handoff prompt

You are working on an existing four-page editorial biotech market-map website. Continue from the repository exactly as it exists. Do not replace the data, rewrite the essays, or collapse the site into one page.

The product structure is:

- Home: a Humans&-inspired cream editorial page containing the complete main biotech essay.
- `/seed`: complete Seed essay plus an interactive map of exactly 100 Seed companies.
- `/early`: complete Series A/B essay plus an interactive map of exactly 50 companies.
- `/growth`: complete Series C+ essay plus an interactive map of exactly 25 companies.

All essays and source links are already represented in `app/content/*.json`. Preserve every word and every integrated hyperlink. The two author-created static diagrams live in `public/diagrams`. Do not summarize or truncate anything. The one explicitly marked editorial completion in the main essay may be refined, but must remain marked for author review.

The visual direction is a dense magazine crossed with a scientific instrument. Essay mode is cream, dark blue, restrained orange, and editorial serif typography. Company mode inverts into a dark scientific atlas. Each stage has its own motif: Seed is emergent network formation; Series A/B is a dry-lab/wet-lab validation loop; Series C+ is a dense neural signal field.

The map requirements are strict:

- Alphabetical, unranked company tiles.
- Search, eight-subsector filters, and an AV Portfolio filter. No type filter.
- AV portfolio companies receive a gold glow.
- Hover previews a company; click pins the panel.
- Desktop uses a stable grid with a fixed detail rail. Mobile uses a bottom sheet.
- Logo/wordmark tiles must remain visible.
- Company name links to the company website. The logo itself does not navigate.
- Detail panel includes company, subsector, type, HQ, CEO with LinkedIn, total funding with PitchBook/Harmonic/web badge, notable investor(s), description, and linked news headline.
- First mapped-company mention in each stage essay receives a chip that opens that company in the map.

Use the existing source data in `app/content/companies.json`; do not invent replacement facts. Keep the site private when deploying. Verify all four routes, exact map counts of 100/50/25, essay links, filters, hover/click behavior, focus panel, mobile bottom sheet, and console before declaring completion.
