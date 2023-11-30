import React from "react";
import { StartFree } from "../box/StartFree";
import { Video } from "../atoms/Video";

export const Section2 = () => {
  return (
    <section className="flex justify-center text-black mt-10">
      <StartFree />
      <Video />
    </section>
  );
};
