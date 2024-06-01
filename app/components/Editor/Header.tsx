import React from 'react';

interface HeaderProps {
  component: {
    id: number;
    type: string;
    content: string;
  };
  onChange: (id: number, newContent: string) => void;
}

const Header: React.FC<HeaderProps> = ({ component, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={component.content}
        onChange={(e) => onChange(component.id, e.target.value)}
        placeholder="Header Content"
      />
    </div>
  );
};

export default Header;
