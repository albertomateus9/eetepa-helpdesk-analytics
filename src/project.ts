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
  "title": "EETEPA Analitica De Help Desk",
  "description": "Simulador de chamados de laboratorio, SLA, categorias de falha e metricas operacionais.",
  "topics": [
    "eetepa",
    "helpdesk",
    "analytics",
    "dashboard",
    "education-technology",
    "react",
    "typescript",
    "dados",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica",
    "sala-de-aula"
  ],
  "deploy": true,
  "tagline": "Leitura de chamados sinteticos para discutir suporte tecnico e gestao de laboratorio.",
  "type": "helpdesk",
  "accent": "#355f75",
  "secondary": "#b45b6b"
};
