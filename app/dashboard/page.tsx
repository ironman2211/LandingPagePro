'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PrivateRoute from '../components/Auth/PrivateRoute';
import PageList from '../components/Dashboard/PageList';
import TemplateLibrary from '../components/Dashboard/TemplateLibrary';
import { getLandingPages } from '../services/LandingPageService';
import { getTemplates } from '../services/templateService';

interface LandingPage {
  id: number;
  title: string;
  description: string;
}

interface Template {
  id: number;
  name: string;
  description: string;
}

const Dashboard = () => {
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]); // Specify the type for landingPages state
  const [templates, setTemplates] = useState<Template[]>([]); // Specify the type for templates state
  const router = useRouter();

  useEffect(() => {
    // Fetch landing pages and templates when component mounts
    fetchLandingPages();
    fetchTemplates();
  }, []);

  const fetchLandingPages = async () => {
    try {
      const landingPagesData = await getLandingPages();
      setLandingPages(landingPagesData);
    } catch (error) {
      console.error('Error fetching landing pages:', error);
    }
  };

  const fetchTemplates = async () => {
    try {
      const templatesData = await getTemplates();
      setTemplates(templatesData);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  const handleCreatePage = (templateId: any) => {
    router.push(`/editor/new?templateId=${templateId}`);
  };

  const handleEditPage = (id: any) => {
    router.push(`/editor/${id}`);
  };

  const handleViewPage = (id: any) => {
    router.push(`/preview/${id}`);
  };

  const handleDeletePage = async (id: any) => {
    try {
      // Implement deletion logic here
      console.log(`Deleting page with ID: ${id}`);
    } catch (error) {
      console.error('Error deleting page:', error);
    }
  };

  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
        <TemplateLibrary templates={templates} onCreatePage={handleCreatePage} />
        <PageList
          pages={landingPages}
          onEdit={handleEditPage}
          onView={handleViewPage}
          onDelete={handleDeletePage}
        />
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
