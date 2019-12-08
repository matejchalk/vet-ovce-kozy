export interface Styles {
  title: string;
  contact: string;
  section: string;
  map: string;
  texts: string;
  address: string;
  links: string;
  linkIcon: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
