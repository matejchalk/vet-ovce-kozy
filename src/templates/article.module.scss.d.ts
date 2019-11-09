export interface Styles {
  article: string;
  authorName: string;
  date: string;
  section: string;
  title: string;
  author: string;
  authorAvatar: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
