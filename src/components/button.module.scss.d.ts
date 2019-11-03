export interface Styles {
  button: string;
  ripple: string;
  shade: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
