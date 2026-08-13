import companies from "../content/companies.json";
import essay from "../content/growth.json";
import { StageExperience } from "../components/StageExperience";
import type { Company, EssayParagraph } from "../types";
export default function Growth(){const list=(companies as Company[]).filter(c=>c.stage==="Series C+");return <StageExperience kind="growth" label="STAGE 03 / TOP 25" title="Series C+" thesis="At Series C+, the question is no longer whether the science is interesting, but whether the company can compound its advantage across biotech." paragraphs={essay as EssayParagraph[]} companies={list}/>}
