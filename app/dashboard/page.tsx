'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PrivateRoute from '../components/Auth/PrivateRoute';
import PageList from '../components/Dashboard/PageList';

interface Page {
  id: number;
  title: string;
  description: string;
  components: any[];
  status: string;
}

const Dashboard = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedPages = JSON.parse(localStorage.getItem('pages') || '[]');
    setPages(storedPages);
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/editor/${id}`);
  };

  const handleView = (id: number) => {
    router.push(`/preview/${id}`);
  };

  const handleDelete = (id: number) => {
    const updatedPages = pages.filter((page) => page.id !== id);
    setPages(updatedPages);
    localStorage.setItem('pages', JSON.stringify(updatedPages));
  };

  const handleCreate = () => {
    const newPage: Page = {
      id: Date.now(),
      title: 'New Page',
      description: 'Description',
      components: [],
      status: 'Draft',
    };
    setPages([...pages, newPage]);
    localStorage.setItem('pages', JSON.stringify([...pages, newPage]));
    router.push(`/editor/${newPage.id}`);
  };

  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleCreate}>Create New Landing Page</button>
        <PageList pages={pages} onEdit={handleEdit} onView={handleView} onDelete={handleDelete} />
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
