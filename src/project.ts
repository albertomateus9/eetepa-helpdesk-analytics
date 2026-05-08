export type ProjectType = 'subnet' | 'packet' | 'etl' | 'serial' | 'helpdesk' | 'inventory' | 'schedule' | 'cyber';

export type ProjectConfig = {
  slug: string;
  title: string;
  type: ProjectType;
  deploy: boolean;
  description: string;
  tagline: string;
  accent: string;
  secondary: string;
  topics: string[];
};

export const project: ProjectConfig = {
  "slug": "eetepa-helpdesk-analytics",
  "title": "EETEPA Helpdesk Analytics",
  "type": "helpdesk",
  "deploy": false,
  "description": "Synthetic helpdesk analytics simulator for lab operations, SLA, failure categories, and dashboards.",
  "tagline": "Synthetic helpdesk analytics for lab operations, SLA, and failure categories.",
  "accent": "#355f75",
  "secondary": "#b45b6b",
  "topics": [
    "eetepa",
    "helpdesk",
    "analytics",
    "dashboard",
    "education-technology",
    "react",
    "typescript"
  ]
};
