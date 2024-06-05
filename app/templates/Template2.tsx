import React from "react";
import { shade, tint, getLuminance } from "polished";
import { Components } from "@/interfaces";

interface VerticalLayoutProps {
  baseColor: string;
  components: Components;
}

const VerticalLayout: React.FC<VerticalLayoutProps> = ({ baseColor, components }) => {
  const darkerShade = shade(0.3, baseColor); // Darken by 30%
  const lighterShade = tint(0.5, baseColor); // Lighten by 50%
  const textColor = getLuminance(baseColor) > 0.5 ? "#000" : "#fff"; // Determine text color based on luminance
  console.log("components");
  return (
    <div
      className="h-full w-full flex flex-col"
      style={{ backgroundColor: lighterShade }}
    >
      <header className="w-full shadow-md h-10 flex items-center p-5 px-10 justify-between" style={{ backgroundColor: darkerShade }}>
        {components?.header?.logo && (
          <div className="h-5 w-5 flex gap-2 items-center justify-center">
            <img src={components?.header?.logo} alt="" className="" />
            <h1 className="font-normal font-[Oswald]" style={{ color: textColor }}>
              {components?.header?.title}
            </h1>
          </div>
        )}
        {components?.header?.loginButton && (
          <button className="text-xs " style={{ color: textColor }}>
            Login
          </button>
        )}
      </header>
      <main className="w-full p-8">
        <h1 className="text-2xl mb-4" style={{ color: textColor }}>{components?.main?.text}</h1>
        <p className="text-lg">{components?.main?.description}</p>
      </main>
      <footer className="bg-gray-700 p-4 text-white items-center justify-center flex text-xs">
        <p>{components?.footer?.text} @created by dahPro</p>
      </footer>
    </div>
  );
};

export default VerticalLayout;
