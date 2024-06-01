"use client";
import React from "react";

const Button = () => {
  return (
    <button
      className="px-7 py-2 m-3 text-red-500 bg-red-100 rounded-full"
      onClick={() => console.log("click me")}
    >
      Click Me
    </button>
  );
};

export default Button;
