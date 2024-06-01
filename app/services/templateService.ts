import { Template } from "@/interfaces";

const templates: Template[] = [
    { 
      type: 'template1', 
      props: { 
        title: 'Template 1', 
        description: 'Description for Template 1', 
        imageUrl: 'https://example.com/image1.jpg',
        baseColor: '#FF5733' // Add the baseColor property
      } 
    },
    { 
      type: 'template2', 
      props: { 
        title: 'Template 2', 
        description: 'Description for Template 2', 
        imageUrl: 'https://example.com/image2.jpg',
        baseColor: '#33FF57' // Add the baseColor property
      } 
    },
    { 
      type: 'template3', 
      props: { 
        title: 'Template 3', 
        description: 'Description for Template 3', 
        imageUrl: 'https://example.com/image3.jpg',
        baseColor: '#5733FF' // Add the baseColor property
      } 
    }
  ];
  

export const getTemplates = (): Promise<Template[]> => {
    return new Promise((resolve) => {
        // Simulate asynchronous data fetching
        setTimeout(() => {
            resolve(templates);
        }, 500);
    });
};
