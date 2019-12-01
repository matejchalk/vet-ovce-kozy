export interface Styles {
  services: string;
  section: string;
  title: string;
  serviceCheck: string;
  service: string;
  examples: string;
  exampleCheck: string;
  example: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
