"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Template } from "@/interfaces";
import Template1 from "@/app/templates/Template1";
import Template2 from "@/app/templates/Template2";
import Template3 from "@/app/templates/Template3";
import Template4 from "@/app/templates/Template4";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AddTemplateForm } from "./AddTemplate";

interface TemplateLibraryProps {
  templates: Template[];
  onCreatePage: (templateId: number) => void;
}

const TemplateLibrary: React.FC<TemplateLibraryProps> = ({
  templates,
  onCreatePage,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-xl">Choose a template to continue</p>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              <Plus size="1.2rem" className="mr-2" /> Add Template
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="fixed  w-full h-[90vh] p-0 max-h-screen overflow-hidden bg-white">
            <div className="overflow-y-scroll scrollbar-hide h-full">
              <AddTemplateForm cancel={
                <AlertDialogCancel>Cancel</AlertDialogCancel>} />
              <AlertDialogFooter>
              </AlertDialogFooter>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Carousel className="w-full max-w-3xl mt-4">
        <CarouselContent className="flex space-x-4">
          {templates.map((template, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0">
              {template.type === "template1" && <Template1 {...template.props} />}
              {template.type === "template2" && <Template2 {...template.props} />}
              {template.type === "template3" && <Template3 {...template.props} />}
              {template.type === "template4" && <Template4 {...template.props} />}
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
