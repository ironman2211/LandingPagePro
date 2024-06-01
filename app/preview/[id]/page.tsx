'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Page {
  id: number;
  title: string;
  description: string;
  components: any[];
  status: string;
}

const PreviewPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState<Page | null>(null);

  useEffect(() => {
    const storedPages = JSON.parse(localStorage.getItem('pages') || '[]');
    const currentPage = storedPages.find((p: Page) => p.id === parseInt(id as string, 10));
    if (currentPage) {
      setPage(currentPage);
    }
  }, [id]);

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      {page.components.map((component) => {
        switch (component.type) {
          case 'Header':
            return <h2 key={component.id}>{component.content}</h2>;
          case 'Footer':
            return <footer key={component.id}>{component.content}</footer>;
          case 'TextBlock':
            return <p key={component.id}>{component.content}</p>;
          case 'ImageBlock':
            return <img key={component.id} src={component.content} alt="Image" />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PreviewPage;
