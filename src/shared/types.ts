export enum SelectedPage {
  Home = "home",
  Benefits = "Benefits",
  ContactsUs = "contactus",
  OurClasses = "ourClasses",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }