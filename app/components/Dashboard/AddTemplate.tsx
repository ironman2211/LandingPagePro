"use client";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  cancel: React.ReactNode;
}

const initialState = {
  type: "",
  baseColor: "",
  components: {
    header: {
      title: "",
      logo: "",
      loginButton: false,
    },
    main: {
      text: "",
      description: "",
      imageUrl: "",
    },
    footer: {
      text: "",
    },
  },
};
export function AddTemplateForm({ setOpen, temp, isUpdate }: any) {
  const [template, setTemplate] = useState(temp);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const [component, field] = id.split(".");
    if (component && field) {
      setTemplate((prevState:any) => ({
        ...prevState,
        components: {
          ...prevState.components,
          [component]: {
            ...prevState.components[component],
            [field]: value,
          },
        },
      }));
    } else {
      setTemplate((prevState:any) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    const [component, field] = id.split(".");
    setTemplate((prevState:any) => ({
      ...prevState,
      components: {
        ...prevState.components,
        [component]: {
          ...prevState.components[component],
          [field]: checked,
        },
      },
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setTemplate((prevState:any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isUpdate) {
      await axios.patch("/api/template", template);
      toast({
        title: "Template update successfully",
        description: new Date().toDateString().toString(),
      });
    } else {
      await axios.post("/api/template", template);
      toast({
        title: "Template Added successfully",
        description: new Date().toDateString().toString(),
      });
    }

    setTimeout(() => {
      window.location.reload();
    }, 500);
    setTemplate({
      type: "",
      baseColor: "",
      components: {
        header: {
          title: "",
          logo: "",
          loginButton: false,
        },
        main: {
          text: "",
          description: "",
          imageUrl: "",
        },
        footer: {
          text: "",
        },
      },
    });
    setOpen(false);
  };
  return (
    <Card className="p-0 border-0 shadow-none">
      <CardHeader>
        <CardTitle>
          {isUpdate ? "Update Template" : "Create Template"}
        </CardTitle>
        <CardDescription>
          Fill in the details to {isUpdate ? "update" : "create"} a template.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4 focus-visible:ring-transparent">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Template Type</Label>
              <Select
                value={template.type}
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <SelectTrigger
                  id="type"
                  className="focus:ring-offset-0 focus:ring-0"
                >
                  <SelectValue placeholder="Select a Template" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="template-1">Template 1</SelectItem>
                  <SelectItem value="template-2">Template 2</SelectItem>
                  <SelectItem value="template-3">Template 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="baseColor">Base Color</Label>
              <Select
                value={template.baseColor}
                onValueChange={(value) =>
                  handleSelectChange("baseColor", value)
                }
              >
                <SelectTrigger
                  id="baseColor"
                  className="focus:ring-offset-0 focus:ring-0"
                >
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="pink">Pink</SelectItem>
                  <SelectItem value="brown">Brown</SelectItem>
                  <SelectItem value="gray">Gray</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="cyan">Cyan</SelectItem>
                  <SelectItem value="magenta">Magenta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Header</Label>
              <Input
                id="header.title"
                placeholder="Header Title"
                value={template.components.header.title}
                onChange={handleInputChange}
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
              <Input
                id="header.logo"
                placeholder="Header Logo URL"
                value={template.components.header.logo}
                onChange={handleInputChange}
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
              <div className="flex items-center space-x-2">
                <Label htmlFor="header.loginButton">Login Button</Label>
                <input
                  type="checkbox"
                  id="header.loginButton"
                  checked={template.components.header.loginButton}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Main</Label>
              <Input
                id="main.text"
                placeholder="Main Text"
                value={template.components.main.text}
                onChange={handleInputChange}
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
              <Input
                id="main.description"
                placeholder="Main Description"
                value={template.components.main.description}
                onChange={handleInputChange}
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
              <Input
                id="main.imageUrl"
                placeholder="Main Image URL"
                value={template.components.main.imageUrl}
                onChange={handleInputChange}
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="footer.text">Footer</Label>
              <Input
                id="footer.text"
                placeholder="Footer Text"
                value={template.components.footer.text}
                onChange={handleInputChange}
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit} className="">
          {isUpdate ? "Update Template" : "Add Template"}
        </Button>
      </CardFooter>
    </Card>
  );
}
