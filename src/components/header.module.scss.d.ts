export interface Styles {
  header: string;
  logo: string;
  input: string;
  label: string;
  open: string;
  close: string;
  nav: string;
  link: string;
  active: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
