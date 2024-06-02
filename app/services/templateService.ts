// Define the TemplateProps interface
interface TemplateProps {
  title: string;
  description: string;
  imageUrl: string;
  baseColor: string; // Add the baseColor property
}

// Update the Template interface
interface Template {
  type: string;
  props: TemplateProps;
}

// Define the templates array
const templates: Template[] = [
  {
    type: 'template1',
    props: {
      title: 'c1',
      description: 'Description for Template 10',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=1',
      baseColor: '#FF5733'
    }
  },
  {
    type: 'template2',
    props: {
      title: 'Template 2',
      description: 'Description for Template 2',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=1',
      baseColor: '#33FF57'
    }
  },
  {
    type: 'template3',
    props: {
      title: 'Template 3',
      description: 'Description for Template 3',
      imageUrl: '',
      baseColor: '#5733FF'
    }
  },
  {
    type: 'template4',
    props: {
      title: 'Template 4',
      description: 'Description 101 for Template 4',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=1',
      baseColor: '#5733FF'
    }
  }
];

// Export the getTemplates function
export const getTemplates = (): Promise<Template[]> => {
  return new Promise((resolve) => {
    // Simulate asynchronous data fetching
    resolve(templates);
  });
};
