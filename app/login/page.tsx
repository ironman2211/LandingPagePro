"use client";
import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import BaseStructue from "../utils/common";
import SignupForm from "../components/Auth/SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SessionProvider } from "next-auth/react";

const LoginPage = () => {
  return (
    <SessionProvider>
      <BaseStructue>
        <Tabs
          defaultValue="login"
          className="w-[90vw] md:w-[35vw] p-10 rounded-lg  shadow-xl bg-gray-50"
        >
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </BaseStructue>
    </SessionProvider>
  );
};

export default LoginPage;
