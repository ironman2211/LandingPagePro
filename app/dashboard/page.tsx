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
    // Fetch landing pages and templates when component mounts
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
      const templatesData = await getTemplates();

      setTemplates(templatesData);
      console.log(templatesData);
    } catch (error) {
      console.error("Error fetching templates:", error);
    }
  };

  const handleCreatePage = (templateId: any) => {
    router.push(`/editor/new?templateId=${templateId}`);
  };

  const handleEditPage = (id: any) => {
    router.push(`/editor/${id}`);
  };

  const handleViewPage = (id: any) => {
    router.push(`/preview/${id}`);
  };

  const handleDeletePage = async (id: any) => {
    try {
      // Implement deletion logic here
      console.log(`Deleting page with ID: ${id}`);
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  const logout = () => {
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


      {/* <AddTemplateForm /> */}
      <div className="w-full h-[80vh] py-8 px-20 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-bold ">Dashboard</h1>
        </div>

        <TemplateLibrary
          templates={templates}
          onCreatePage={handleCreatePage}
        />
        {/* <PageList
          pages={landingPages}
          onEdit={handleEditPage}
          onView={handleViewPage}
          onDelete={handleDeletePage}
        /> */}
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
