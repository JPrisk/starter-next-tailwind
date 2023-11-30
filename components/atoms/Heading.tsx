import React from "react";

interface Iheading {
  heading: string;
}

export const Heading = ({ heading }: Iheading) => {
  return <h1 className="flex font-bold text-6xl justify-center">{heading}</h1>;
};
