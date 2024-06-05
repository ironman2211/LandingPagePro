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
import { signOut } from "next-auth/react";

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

  const res = localStorage.getItem("user");
  if (res) {
    var user = JSON.parse(res);
  }

  console.log(user);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    signOut({ callbackUrl: "/login" });
  };
  return (
    <PrivateRoute>
      <div className="w-full h-[8vh] flex items-center justify-between px-20 bg-transparent shadow-md">
        <b>Landing Page Pro</b>
        <div className="flex gap-3">
          <div className="mx-2 flex gap-3 items-center justify-center">
            {/* <img
              src='https://lh3.googleusercontent.com/a/ACg8ocK3ONczZKxqkU6wImTrHxaRB8n63NmMuxwHB_F8bEYj0byMnBKR=s96-c'
              className="h-6 w-6 rounded-full"
              alt=""
            /> */}
            <p className="text-gray-600">
              {user.name ? user.name : user.username}
            </p>
          </div>
          <Button variant="outline" onClick={logout}>
            Logout <LogOut className="mx-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="w-full h-[80vh] py-8 px-20 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-bold ">Dashboard</h1>
        </div>

        <TemplateLibrary templates={templates} />
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
