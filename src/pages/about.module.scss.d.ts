export interface Styles {
  teamTitle: string;
  intro: string;
  introText: string;
  introButton: string;
  team: string;
  teamCards: string;
  name: string;
  description: string;
  links: string;
  linkIcon: string;
  link: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
