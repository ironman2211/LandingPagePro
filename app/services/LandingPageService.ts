interface LandingPage {
    id: number;
    title: string;
    description: string;
  }
  
  const landingPages: LandingPage[] = [
    { id: 1, title: 'Landing Page 1', description: 'Description for Landing Page 1' },
    { id: 2, title: 'Landing Page 2', description: 'Description for Landing Page 2' },
    { id: 3, title: 'Landing Page 3', description: 'Description for Landing Page 3' },
  ];
  
  export const getLandingPages = (): Promise<LandingPage[]> => {
    return new Promise((resolve) => {
      // Simulate asynchronous data fetching
      setTimeout(() => {
        resolve(landingPages);
      }, 500);
    });
  };
  