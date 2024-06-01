// interfaces.ts

export interface LandingPage {
    id: number;
    title: string;
    description: string;
    template: string;
}
export interface Template {
    type: string;
    props: {
      title: string;
      description: string;
      imageUrl: string;
      baseColor: string; // Add the baseColor property
    };
  }
  