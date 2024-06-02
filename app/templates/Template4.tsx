import React from "react";

interface LandingPageProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Template4: React.FC<LandingPageProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="h-full w-full flex flex-col justify-between bg-gray-900 text-white">
      <header className="w-full shadow-md h-10 flex items-center p-5 px-10 justify-between">
        <h1 className="font-normal font-[Oswald]">{title}</h1>
        <button className="text-xs bg-white text-gray-900 px-2 rounded-xl">Login</button>
      </header>
      <main className="w-full h-3/5 bg-center bg-cover relative ">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl text-white text-center">{description}</p>
        </div>
        <img src={imageUrl} className="w-full h-full opacity-80" alt="Background" />
      </main>
      <footer className="bg-gray-700 p-4 text-white items-center justify-center flex text-xs">
        <p>Footer Content @created by dahPro</p>
      </footer>
    </div>
  );
};

export default Template4;
