import React from "react";
import { Image } from "../atoms/Image";
import { ContentBox } from "../box/ContentBox";

export const Section3 = () => {
  return (
    <div className="flex justify-center text-black m-10 gap-20 p-14">
      <Image
        src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page@2x.webp"
        styles="w-1/2"
      />
      <ContentBox
        heading="Spotlight your brand."
        paragraph="Brand experience hits a whole new level with a custom Booking Page. Show why your business stands apart and enable people to self-book at their convenience."
      />
    </div>
  );
};
