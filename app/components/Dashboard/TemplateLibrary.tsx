import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleX, Eye, Pencil, Plus, Trash } from "lucide-react";
import { Template } from "@/interfaces";
import Template1 from "@/app/templates/Template1";
import Template2 from "@/app/templates/Template2";
import Template3 from "@/app/templates/Template3";
import Template4 from "@/app/templates/Template4";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AddTemplateForm } from "./AddTemplate";
import { Card, CardContent } from "@/components/ui/card";

interface TemplateLibraryProps {
  templates: Template[];
  onCreatePage: (templateId: number) => void;
}

const useTemplateDialog = (initialState: Template | null) => {
  const [currTemplate, setCurrTemplate] = useState<Template | null>(initialState);
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const onEdit = (template: Template) => {
    setCurrTemplate(template);
    setIsUpdate(true);
    setOpen(true);
  };

  const addTemplate = () => {
    setCurrTemplate({
      type: "",
      baseColor: "",
      components: {
        header: { title: "", logo: "", loginButton: false },
        main: { text: "", description: "", imageUrl: "", },
        footer: { text: "" },
      },
    });
    setIsUpdate(false);
    setOpen(true);
  };

  return {
    currTemplate,
    open,
    isUpdate,
    setOpen,
    onEdit,
    addTemplate,
  };
};

const TemplatePreview: React.FC<{ template: Template }> = ({ template }) => {
  switch (template.type) {
    case "template-1":
      return <Template1 baseColor={template.baseColor} components={template.components} />;
    case "template-2":
      return <Template2 baseColor={template.baseColor} components={template.components} />;
    case "template-3":
      return <Template3 baseColor={template.baseColor} components={template.components} />;
    case "template-4":
      return <Template4 baseColor={template.baseColor} components={template.components} />;
    default:
      return null;
  }
};

const TemplateLibrary: React.FC<TemplateLibraryProps> = ({ templates, onCreatePage }) => {
  const { currTemplate, open, isUpdate, setOpen, onEdit, addTemplate } = useTemplateDialog(null);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl">Choose a template to continue</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={addTemplate}>
              <Plus size="1.2rem" className="mr-2" /> Add Template
            </Button>
          </DialogTrigger>
          <DialogContent className="fixed w-full h-[90vh] p-0 max-h-screen overflow-hidden bg-white sm:max-w-[900px]">
            <div className="overflow-y-scroll scrollbar-hide h-full">
              {currTemplate && (
                <AddTemplateForm
                  setOpen={setOpen}
                  temp={currTemplate}
                  isUpdate={isUpdate}
                  addTemplate={addTemplate}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {templates.map((template, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2 h-[23rem]">
              <Card className="h-full rounded-2xl">
                <CardContent className="flex flex-col h-full p-5 gap-2">
                  <div className="w-full h-[15rem] rounded-2xl relative">
                    <TemplatePreview template={template} />
                  </div>
                  <div className="flex items-center justify-evenly mt-auto">
                    <Button variant="outline" className="flex gap-2" onClick={() => onEdit(template)}>
                      <Pencil size="14" /> Edit
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex gap-2">
                          <Eye size="14" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="fixed w-full h-[90vh] p-0 max-h-screen overflow-hidden bg-white sm:max-w-[90vw]">
                        <TemplatePreview template={template} />
                      </DialogContent>
                    </Dialog>
                    <Button variant="destructive" className="flex gap-2">
                      <Trash size="14" /> Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TemplateLibrary;
