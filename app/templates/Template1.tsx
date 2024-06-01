"use client";
import React from "react";
import { shade, tint, getLuminance } from "polished";

interface LandingPageProps {
  title: string;
  description: string;
  imageUrl: string;
  baseColor: string; // Add a new prop for the base color
}

const LandingPage: React.FC<LandingPageProps> = ({
  title,
  description,
  imageUrl,
  baseColor,
}) => {
  const darkerShade = shade(0.3, baseColor); // Darken by 30%
  const lighterShade = tint(0.5, baseColor); // Lighten by 50%
  const textColor = getLuminance(baseColor) > 0.5 ? "#000" : "#fff"; // Determine text color based on luminance

  return (
    <div
      className="h-full w-full flex flex-col justify-between"
      style={{ backgroundColor: lighterShade }}
    >
      <header className="w-full shadow-md h-10 flex items-center p-5 px-10 justify-between">
        <h1 className="font-normal font-[Oswald]" style={{ color: textColor }}>
          {title}
        </h1>
        <button className="text-xs " style={{ color: darkerShade }}>
          Login
        </button>
      </header>
      <main
        className="w-full h-4/5  bg-center bg-cover relative p-10"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity:'.8'
        }}
      >
       <p className="text-xl text-white">{description}</p>
      </main>
      <footer className="bg-gray-700 p-4 text-white items-center justify-center flex text-xs">
        <p>Footer Content @created by dahPro</p>
      </footer>
    </div>
  );
};

export default LandingPage;
