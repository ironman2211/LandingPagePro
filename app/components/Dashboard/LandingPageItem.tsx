import React from 'react';
import { LandingPage } from '../../../interfaces';

interface LandingPageItemProps {
  landingPage: LandingPage;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
  onDelete: (id: number) => void;
}

const LandingPageItem: React.FC<LandingPageItemProps> = ({ landingPage, onEdit, onView, onDelete }) => {
  return (
    <div>
      <h3>{landingPage.title}</h3>
      <button onClick={() => onEdit(landingPage.id)}>Edit</button>
      <button onClick={() => onView(landingPage.id)}>View</button>
      <button onClick={() => onDelete(landingPage.id)}>Delete</button>
    </div>
  );
};

export default LandingPageItem;
