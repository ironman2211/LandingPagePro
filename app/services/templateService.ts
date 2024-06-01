interface Template {
    id: number;
    name: string;
    description: string;
  }
  
  const templates: Template[] = [
    { id: 1, name: 'Template 1', description: 'Description for Template 1' },
    { id: 2, name: 'Template 2', description: 'Description for Template 2' },
    { id: 3, name: 'Template 3', description: 'Description for Template 3' },
  ];
  
  export const getTemplates = (): Promise<Template[]> => {
    return new Promise((resolve) => {
      // Simulate asynchronous data fetching
      setTimeout(() => {
        resolve(templates);
      }, 500);
    });
  };
  