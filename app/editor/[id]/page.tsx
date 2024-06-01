'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import PrivateRoute from '../../components/Auth/PrivateRoute';
import Editor from '../../components/Editor/Editor';

interface Page {
  id: number;
  title: string;
  description: string;
  components: any[];
  status: string;
}

const EditorPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState<Page | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedPages = JSON.parse(localStorage.getItem('pages') || '[]');
    const currentPage = storedPages.find((p: Page) => p.id === parseInt(id as string, 10));
    if (currentPage) {
      setPage(currentPage);
    }
  }, [id]);

  const handleSave = (updatedPage: Page) => {
    const storedPages = JSON.parse(localStorage.getItem('pages') || '[]');
    const updatedPages = storedPages.map((p: Page) =>
      p.id === updatedPage.id ? updatedPage : p
    );
    localStorage.setItem('pages', JSON.stringify(updatedPages));
  };

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <PrivateRoute>
      <Editor page={page} onSave={handleSave} />
    </PrivateRoute>
  );
};

export default EditorPage;
