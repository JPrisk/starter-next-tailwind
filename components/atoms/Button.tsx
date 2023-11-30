import React from "react";

interface IButton {
  name: string;
}

export const Button = ({ name }: IButton) => {
  return (
    <button className="bg-sky-500 hover:bg-sky-700 px-10 py-6 text-base leading-5 rounded text-white">
      {name}
    </button>
  );
};
