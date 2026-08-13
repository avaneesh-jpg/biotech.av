export type Stage = "Seed" | "Series A/B" | "Series C+";
export type Run = { text: string; href?: string };
export type EssayParagraph = { text: string; runs: Run[] };
export type Company = {
  name: string; stage: Stage; subsector: string; type: string; logo?: string;
  hq?: string; founded?: string; ceo?: string; linkedin?: string; website?: string;
  funding?: string; fundingSource?: string; investors?: string; av: boolean;
  description?: string; news?: string; newsUrl?: string;
};
