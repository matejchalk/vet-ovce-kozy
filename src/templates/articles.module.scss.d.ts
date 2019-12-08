export interface Styles {
  title: string;
  section: string;
  previews: string;
  preview: string;
  card: string;
  nav: string;
  button: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
