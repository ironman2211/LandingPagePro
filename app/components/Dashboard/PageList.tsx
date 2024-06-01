'use client'
import React from 'react';

interface Page {
  id: number;
  title: string;
  description: string;
}

interface PageListProps {
  pages: Page[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
  onDelete: (id: number) => void;
}

const PageList: React.FC<PageListProps> = ({ pages, onEdit, onView, onDelete }) => {
  return (
    <div>
      {pages.map((page) => (
        <div key={page.id}>
          <h2>{page.title}</h2>
          <p>{page.description}</p>
          <button onClick={() => onEdit(page.id)}>Edit</button>
          <button onClick={() => onView(page.id)}>View</button>
          <button onClick={() => onDelete(page.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PageList;
