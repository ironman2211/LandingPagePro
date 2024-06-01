import React, { ReactNode } from "react";

interface CommonProps {
  children: ReactNode;
}

const BaseStructue: React.FC<CommonProps> = ({ children }) => {
  return (
    <div className="h-[100vh] w-full flex items-center m-0 p-0 flex-col gap-5 pt-[20vh]">
      {children}
    </div>
  );
};

export default BaseStructue;
