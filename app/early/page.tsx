import companies from "../content/companies.json";
import essay from "../content/early.json";
import { StageExperience } from "../components/StageExperience";
import type { Company, EssayParagraph } from "../types";
export default function Early(){const list=(companies as Company[]).filter(c=>c.stage==="Series A/B");return <StageExperience kind="early" stage="STAGE 02" title="Series A/B Top 50" thesis="At Series A/B, the strongest companies move from scientific credibility to platform credibility through repeated external validation." paragraphs={essay as EssayParagraph[]} companies={list}/>}
