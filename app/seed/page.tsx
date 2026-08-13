import companies from "../content/companies.json";
import essay from "../content/seed.json";
import { StageExperience } from "../components/StageExperience";
import type { Company, EssayParagraph } from "../types";
export default function Seed(){const list=(companies as Company[]).filter(c=>c.stage==="Seed");return <StageExperience kind="seed" stage="STAGE 01" title="Seed Top 100" thesis="At Seed, the strongest biotech companies pair scientific novelty with a credible path to making the wider industry more capable." paragraphs={essay as EssayParagraph[]} companies={list}/>}
