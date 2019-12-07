export interface Styles {
  contact: string;
  section: string;
  title: string;
  address: string;
  links: string;
  linkIcon: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
