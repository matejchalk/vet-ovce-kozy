export interface Styles {
  goalsTitle: string;
  intro: string;
  introText: string;
  introButton: string;
  goals: string;
  goalsCards: string;
  goalsButton: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
