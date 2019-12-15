export interface Styles {
  card: string;
  stretch: string;
  title: string;
  children: string;
  buttonWrapper: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
