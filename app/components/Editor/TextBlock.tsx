import React from 'react';

interface TextBlockProps {
  component: {
    id: number;
    type: string;
    content: string;
  };
  onChange: (id: number, newContent: string) => void;
}

const TextBlock: React.FC<TextBlockProps> = ({ component, onChange }) => {
  return (
    <div>
      <textarea
        value={component.content}
        onChange={(e) => onChange(component.id, e.target.value)}
        placeholder="Text Block Content"
      />
    </div>
  );
};

export default TextBlock;
