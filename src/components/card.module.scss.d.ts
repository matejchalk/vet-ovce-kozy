export interface Styles {
  card: string;
  title: string;
  buttonWrapper: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
