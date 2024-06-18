// interfaces.ts

export interface LandingPage {
    id: number;
    title: string;
    description: string;
    template: string;
}
// Define the HeaderProps interface
interface HeaderProps {
  title: string;
  logo: string;
  loginButton: boolean;
}
// Define the MainProps interface
interface MainProps {
  text: string;
  description: string;
  imageUrl: string;
}

// Define the FooterProps interface
interface FooterProps {
  text: string;
}

// Define the Components interface
export interface Components {
  header?: HeaderProps;
  main?: MainProps;
  footer?: FooterProps;
}

// Define the Template interface

export interface Template {
  type: string;
  baseColor: string;
  components: Components;
}