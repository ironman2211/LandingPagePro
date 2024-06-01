import React from 'react';

interface FooterProps {
  component: {
    id: number;
    type: string;
    content: string;
  };
  onChange: (id: number, newContent: string) => void;
}

const Footer: React.FC<FooterProps> = ({ component, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={component.content}
        onChange={(e) => onChange(component.id, e.target.value)}
        placeholder="Footer Content"
      />
    </div>
  );
};

export default Footer;
