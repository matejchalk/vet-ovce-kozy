export interface Styles {
  title: string;
  contact: string;
  avatar: string;
  section: string;
  map: string;
  texts: string;
  groupContact: string;
  address: string;
  individualContacts: string;
  individualContact: string;
  member: string;
  link: string;
  linkIcon: string;
  linkText: string;
  facebookButton: string;
  facebookIcon: string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
