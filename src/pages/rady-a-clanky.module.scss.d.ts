export interface Styles {
  wrapper: string;
  title: string;
  cards: string;
  button: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
