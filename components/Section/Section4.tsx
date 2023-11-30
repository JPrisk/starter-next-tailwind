import React from "react";
import { Image } from "../atoms/Image";
import { ContentBox } from "../box/ContentBox";
import { Heading } from "../atoms/Heading";
import boxcontent from "../../json/boxContent.json";
import img from "../../json/img.json";
import { Box } from "@/components/box/Box";

export const Section4 = () => {
  return (
    <div>
      <div className="flex gap-6 list-none justify-betwee h-96 p-32">
        {boxcontent.data.map((box, i) => {
          return <Box boxType="icon" {...box} key={i} />;
        })}
      </div>
      <Heading heading="3 steps to success 🏆" />
      <div className="flex gap-6 list-none justify-between h-96 p-32">
        {boxcontent.data.map((box, i) => {
          return <Box boxType={i} {...box} key={i} />;
        })}
      </div>
      <div className="flex items-center gap-10 justify-center">
        {img.data.map((src, i) => {
          return <Image src={src} key={i} styles="w-80" />;
        })}
      </div>
      <Image
        src="https://assets.setmore.com/website/v2/images/homepage-v2-2/female-gym-coach-instructing-man@2x.webp"
        styles="flex justify-center w-80"
      />
    </div>
  );
};
