export interface Styles {
  intro: string;
  introText: string;
  introButton: string;
  goals: string;
  goalsTitle: string;
  goalsCard: string;
  goalsButton: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
