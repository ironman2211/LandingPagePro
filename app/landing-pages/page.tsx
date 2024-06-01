
'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LandingPageForm from '../components/Dashboard/LandingPageForm';
import { LandingPage } from '../../interfaces';

const CreateLandingPage: React.FC = () => {
  const router = useRouter();
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);

  const handleSave = (newLandingPage: LandingPage) => {
    setLandingPages((prevPages) => [...prevPages, newLandingPage]);
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Create New Landing Page</h1>
      <LandingPageForm onSave={handleSave} />
    </div>
  );
};

export default CreateLandingPage;
