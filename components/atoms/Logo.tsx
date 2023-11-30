import React, { Children } from "react";

interface ILogo {
  logo: string;
}

export const Logo = (props) => {
  return (
    <div className="flex items-center bg-gray-200 p-1 rounded-full w-24 justify-center">
      <>{props.children}</>
      <span>{props.name}</span>
    </div>
  );
};
