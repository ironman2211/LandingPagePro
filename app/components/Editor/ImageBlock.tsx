import React from 'react';

interface ImageBlockProps {
  component: {
    id: number;
    type: string;
    content: string;
  };
  onChange: (id: number, newContent: string) => void;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ component, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={component.content}
        onChange={(e) => onChange(component.id, e.target.value)}
        placeholder="Image URL"
      />
    </div>
  );
};

export default ImageBlock;
