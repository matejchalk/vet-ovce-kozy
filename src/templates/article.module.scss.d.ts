export interface Styles {
  article: string;
  authorName: string;
  date: string;
  section: string;
  title: string;
  author: string;
  authorAvatar: string;
  content: string;
  bold: string;
  italic: string;
  underline: string;
  paragraph: string;
  heading2: string;
  heading3: string;
  heading4: string;
  orderedList: string;
  unorderedList: string;
  listItem: string;
  quote: string;
  embeddedAsset: string;
  hyperlink: string;
  entryHyperlink: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
