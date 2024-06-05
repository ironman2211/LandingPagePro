import React from "react";
import { shade, tint, getLuminance } from "polished";
import { Components } from "@/interfaces";

interface LandingPageProps {
  baseColor: string;
  components: Components;
}

const LandingPage: React.FC<LandingPageProps> = ({ baseColor, components }) => {
  const darkerShade = shade(0.3, baseColor); // Darken by 30%
  const lighterShade = tint(0.5, baseColor); // Lighten by 50%
  const textColor = getLuminance(baseColor) > 0.5 ? "#000" : "#fff"; // Determine text color based on luminance
  console.log("components");
  return (
    <div
      className="h-full w-full flex flex-col justify-between"
      style={{ backgroundColor: lighterShade }}
    >
      {components.header && (
        <header className="w-full shadow-md h-10 flex items-center p-5 px-10 justify-between">
          {components.header.logo && (
            <div className="h-5 w-5 flex gap-2 items-center justify-center">
              <img src={components.header.logo} alt="" />
              <h1 className="font-normal font-[Oswald]" style={{ color: textColor }}>
                {components.header.title}
              </h1>
            </div>
          )}
          {components.header.loginButton && (
            <button className="text-xs " style={{ color: darkerShade }}>
              Login
            </button>
          )}
        </header>
      )}
      <main
        className="max-w-full max-h-4/5 bg-center bg-cover relative p-10"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${components?.main?.imageUrl})`,
        }}
      >
        <p className="text-xl text-white">{components?.main?.description}</p>
      </main>
      <footer className="p-4 text-white items-center justify-center flex text-xs">
        <p>{components?.footer?.text} @created by dahPro</p>
      </footer>
    </div>
  );
};

export default LandingPage;
