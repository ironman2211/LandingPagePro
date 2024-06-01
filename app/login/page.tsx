import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import BaseStructue from "../components/common/common";

const LoginPage = () => {
  return (
    <BaseStructue>
      <div className=" p-10 rounded-lg w-[90vw] md:w-[35vw] shadow-xl bg-gray-50 ">
        <span className="text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 to-blue-500 ">
          Login
        </span>{" "}
        <LoginForm />
      </div>
    </BaseStructue>
  );
};

export default LoginPage;
