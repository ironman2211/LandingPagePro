import React from 'react';

interface Template {
  id: number;
  name: string;
  description: string;
  // Other properties specific to the template
}

interface TemplateLibraryProps {
  templates: Template[];
  onCreatePage: (templateId: number) => void;
}

const TemplateLibrary: React.FC<TemplateLibraryProps> = ({ templates, onCreatePage }) => {
  return (
    <div>
      <h2>Choose a Template</h2>
      <div className="template-list">
        {templates.map((template) => (
          <div key={template.id} className="template-item">
            <h3>{template.name}</h3>
            <p>{template.description}</p>
            <button onClick={() => onCreatePage(template.id)}>Create Page</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;
