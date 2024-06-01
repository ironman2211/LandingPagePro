"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Template } from "@/interfaces";
import Template1 from "@/app/templates/Template1";
import Template2 from "@/app/templates/Template2";
import Template3 from "@/app/templates/Template3";



interface TemplateLibraryProps {
  templates: Template[];
  onCreatePage: (templateId: number) => void;
}

const TemplateLibrary: React.FC<TemplateLibraryProps> = ({
  templates,
  onCreatePage,
}) => {
  console.log(templates);
  return (
    <div className="w-full  ">
      <div className="flex items-center justify-between w-full ">
        <div>
          <p className="text-xl  ">Choose a template to continue</p>
        </div>
        <Button>
          <Plus size="1.2rem" className="mr-2" /> Add Template
        </Button>
      </div>
      <div className="template-list flex w-full items-center gap-14 justify-around overflow-x-scroll py-5 bg-red-100">
      {templates.map((template, index) => (
        <div key={index} className="w-[25rem] h-[17rem]">
          {template.type === 'template1' && <Template1 {...template.props} />}
          {template.type === 'template2' && <Template2 {...template.props} />}
          {template.type === 'template3' && <Template3 {...template.props} />}
        </div>
      ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;
