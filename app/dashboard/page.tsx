"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "../components/Auth/PrivateRoute";
import TemplateLibrary from "../components/Dashboard/TemplateLibrary";
import { getLandingPages } from "../services/LandingPageService";
import { getTemplates } from "../services/TemplateService";
import { Button } from "@/components/ui/button";
import { LogOut, Plus } from "lucide-react";
import Template1 from "../templates/Template1";
import { Template } from "@/interfaces";
import axios from "axios";

interface LandingPage {
  id: number;
  title: string;
  description: string;
}

const Dashboard = () => {
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]); // Specify the type for landingPages state
  const [templates, setTemplates] = useState<Template[]>([]); // Specify the type for templates state
  const router = useRouter();

  useEffect(() => {
    fetchLandingPages();
    fetchTemplates();
  }, []);

  const fetchLandingPages = async () => {
    try {
      const landingPagesData = await getLandingPages();
      setLandingPages(landingPagesData);
    } catch (error) {
      console.error("Error fetching landing pages:", error);
    }
  };

  const fetchTemplates = async () => {
    try {
      const res = await axios.get("/api/template");
      console.log(res);
      
      setTemplates(res.data.templates);
    } catch (error) {
      console.error("Error fetching templates:", error);
    }
  };

  const handleCreatePage = (templateId: any) => {
    router.push(`/editor/new?templateId=${templateId}`);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push(`/`);
  };
  return (
    <PrivateRoute>
      <div className="w-full h-[8vh] flex items-center justify-between px-20 bg-transparent shadow-md">
        <b>Landing Page Pro</b>
        <Button variant="outline" onClick={logout}>
          Logout <LogOut className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="w-full h-[80vh] py-8 px-20 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-bold ">Dashboard</h1>
        </div>

        <TemplateLibrary
          templates={templates}
          onCreatePage={handleCreatePage}
        />
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
