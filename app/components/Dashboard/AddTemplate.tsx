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

interface Props {
  cancel: React.ReactNode;
}
export function AddTemplateForm({ cancel }: Props) {
  const [template, setTemplate] = useState({
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const [component, field] = id.split(".");
    if (component && field) {
      setTemplate((prevState) => ({
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
      setTemplate((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const [component, field] = id.split(".");
    setTemplate((prevState) => ({
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
    setTemplate((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(template);
    // Handle form submission logic here
    // Optionally reset form after submission
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
  };

  return (
    <Card className="p-0 border-0 shadow-none">
      <CardHeader>
        <CardTitle>Create Template</CardTitle>
        <CardDescription>
          Fill in the details to create a new template.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4 focus-visible:ring-transparent">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Template Type</Label>
              <Select onValueChange={(value) => handleSelectChange("type", value)}>
                <SelectTrigger id="type">
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
              <Select onValueChange={(value) => handleSelectChange("baseColor", value)}>
                <SelectTrigger id="baseColor">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
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
              />
              <Input
                id="header.logo"
                placeholder="Header Logo URL"
                value={template.components.header.logo}
                onChange={handleInputChange}
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
              />
              <Input
                id="main.description"
                placeholder="Main Description"
                value={template.components.main.description}
                onChange={handleInputChange}
              />
              <Input
                id="main.imageUrl"
                placeholder="Main Image URL"
                value={template.components.main.imageUrl}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="footer.text">Footer</Label>
              <Input
                id="footer.text"
                placeholder="Footer Text"
                value={template.components.footer.text}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit} className="mx-5">Add Template</Button>
        {cancel}
      </CardFooter>
    </Card>
  );
}
