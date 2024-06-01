import React, { useState } from 'react';
import { LandingPage } from '../../../interfaces';

interface LandingPageFormProps {
  onSave: (newLandingPage: LandingPage) => void;
}

const LandingPageForm: React.FC<LandingPageFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [template, setTemplate] = useState('template1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLandingPage: LandingPage = {
      id: Date.now(),
      title,
      description,
      template,
    };
    onSave(newLandingPage);
    setTitle('');
    setDescription('');
    setTemplate('template1');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Select Template:
          <select value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>
        </label>
      </div>
      <button type="submit">Create Landing Page</button>
    </form>
  );
};

export default LandingPageForm;
