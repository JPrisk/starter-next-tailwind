import React from "react";
import { Heading } from "../atoms/Heading";

interface IContentBox {
  heading: string;
  paragraph: string;
}

export const ContentBox = ({ heading, paragraph }: IContentBox) => {
  return (
    <div className="flex flex-col gap-14 ">
      <Heading heading={heading} />
      <p className="text-gray-600">{paragraph}</p>
    </div>
  );
};
