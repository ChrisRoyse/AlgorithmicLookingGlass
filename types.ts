
export enum SlideType {
  TITLE = 'TITLE',
  BULLET = 'BULLET',
  SPLIT_IMAGE = 'SPLIT_IMAGE',
  THEORY_VISUAL = 'THEORY_VISUAL',
  SECTION_HEADER = 'SECTION_HEADER'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  bullets?: string[];
  image?: string;
  footer?: string;
  visualData?: any[];
  visualVariant?: 'SCATTER' | 'CYCLE';
}
