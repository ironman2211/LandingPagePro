// components/Dashboard/LandingPageList.tsx

import React from 'react';
import LandingPageItem from './LandingPageItem';
import { LandingPage } from '../../../interfaces';

interface LandingPageListProps {
  landingPages: LandingPage[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
  onDelete: (id: number) => void;
}

const LandingPageList: React.FC<LandingPageListProps> = ({ landingPages, onEdit, onView, onDelete }) => {
  return (
    <div>
      <h2>List of Landing Pages</h2>
      {landingPages.map((landingPage) => (
        <LandingPageItem
          key={landingPage.id}
          landingPage={landingPage}
          onEdit={onEdit}
          onView={onView}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default LandingPageList;
