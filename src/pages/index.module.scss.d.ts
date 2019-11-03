export interface Styles {
  intro: string;
  heading: string;
  button: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
