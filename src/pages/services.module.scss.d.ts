export interface Styles {
  title: string;
  services: string;
  section: string;
  serviceCheck: string;
  service: string;
  examples: string;
  exampleCheck: string;
  example: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
