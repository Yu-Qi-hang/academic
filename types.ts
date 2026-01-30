
export enum ContentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  PDF = 'PDF',
  IMAGE_COMPARISON = 'IMAGE_COMPARISON',
  IMAGE_GRID = 'IMAGE_GRID',
  CAROUSEL = 'CAROUSEL'
}

export interface MediaItem {
  type: 'IMAGE' | 'VIDEO';
  src: string;
  caption?: string;
}

export interface Author {
  name: string;
  link?: string;
  affiliationIndices?: number[];
  isEqualContribution?: boolean;
}

export interface Affiliation {
  id: number;
  name: string;
  icon?: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  icon: string;
  customIcon?: string; // URL for a custom icon image
  color?: 'blue' | 'black' | 'red' | 'green' | 'purple' | 'orange';
}

export interface SectionContent {
  type: ContentType;
  title?: string;
  text?: string;
  src?: string;
  srcSecondary?: string;
  items?: string[]; // Legacy support for simple image strings
  mediaItems?: MediaItem[]; // Enhanced support for mixed media
  caption?: string;
  width?: 'small' | 'medium' | 'large' | 'full' | string; // Customizable width (e.g., '50%', '75%')
  gridConfig?: number[]; // Array defining columns per row, e.g. [2, 3] means row1 has 2 cols, row2 has 3.
}

export interface PaperSection {
  id: string;
  title?: string; // Title is now optional
  contents: SectionContent[];
}

export interface Venue {
  name: string;
  link?: string;
}

export interface Profile {
  name: string;
  avatarUrl: string;
  homeUrl: string;
}

export interface PaperData {
  title: string;
  venue?: Venue; // Optional venue information
  authors: Author[];
  affiliations: Affiliation[];
  abstract: string;
  links: ExternalLink[];
  sections: PaperSection[];
  bibtex: string;
}
