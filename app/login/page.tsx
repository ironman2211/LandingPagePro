import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import BaseStructue from "../components/common/common";

const LoginPage = () => {
  return (
    <BaseStructue>
      <span className="text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 to-blue-500">
        Login
      </span>{" "}
      <LoginForm />
    </BaseStructue>
  );
};

export default LoginPage;
