import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import BaseStructue from "../utils/common";
import SignupForm from "../components/Auth/SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage = () => {
  return (
    <BaseStructue>
        <Tabs defaultValue="login" className="w-[90vw] md:w-[35vw] p-10 rounded-lg  shadow-xl bg-gray-50">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login" >
            <LoginForm/>
          </TabsContent>
          <TabsContent value="signup">
          <SignupForm />
          </TabsContent>
        </Tabs>
    </BaseStructue>
  );
};

export default LoginPage;
