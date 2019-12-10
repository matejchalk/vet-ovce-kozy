export interface Styles {
  footer: string;
  contactLinks: string;
  contactLink: string;
  linkIcon: string;
  socialLinks: string;
  facebookButton: string;
  location: string;
  address: string;
  mapsButton: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
