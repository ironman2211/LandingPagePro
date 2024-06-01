import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';

interface EditorProps {
  page: {
    id: number;
    title: string;
    description: string;
    components: any[];
  };
  onSave: (updatedPage: any) => void;
}

const Editor: React.FC<EditorProps> = ({ page, onSave }) => {
  const [title, setTitle] = useState(page.title);
  const [description, setDescription] = useState(page.description);
  const [components, setComponents] = useState(page.components);
  const router = useRouter();

  const handleAddComponent = (type: string) => {
    const newComponent = {
      id: Date.now(),
      type,
      content: '',
    };
    setComponents([...components, newComponent]);
  };

  const handleRemoveComponent = (id: number) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const handleComponentChange = (id: number, newContent: string) => {
    setComponents(
      components.map((component) =>
        component.id === id ? { ...component, content: newContent } : component
      )
    );
  };

  const handleSave = () => {
    const updatedPage = {
      ...page,
      title,
      description,
      components,
    };
    onSave(updatedPage);
    router.push('/dashboard');
  };

  const handlePreview = () => {
    const updatedPage = {
      ...page,
      title,
      description,
      components,
    };
    onSave(updatedPage);
    router.push(`/preview/${page.id}`);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Page Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Page Description"
      />
      {components.map((component) => {
        switch (component.type) {
          case 'Header':
            return (
              <Header
                key={component.id}
                component={component}
                onChange={handleComponentChange}
              />
            );
          case 'Footer':
            return (
              <Footer
                key={component.id}
                component={component}
                onChange={handleComponentChange}
              />
            );
          case 'TextBlock':
            return (
              <TextBlock
                key={component.id}
                component={component}
                onChange={handleComponentChange}
              />
            );
          case 'ImageBlock':
            return (
              <ImageBlock
                key={component.id}
                component={component}
                onChange={handleComponentChange}
              />
            );
          default:
            return null;
        }
      })}
      <button onClick={() => handleAddComponent('Header')}>Add Header</button>
      <button onClick={() => handleAddComponent('Footer')}>Add Footer</button>
      <button onClick={() => handleAddComponent('TextBlock')}>Add Text Block</button>
      <button onClick={() => handleAddComponent('ImageBlock')}>Add Image Block</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={handlePreview}>Preview</button>
    </div>
  );
};

export default Editor;
