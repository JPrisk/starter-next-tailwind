import React from "react";

export const Video = () => {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      poster="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp"
      preload="auto"
      className="w-100"
      playsInline={false}
    >
      <source
        src="https://assets.setmore.com/website/v2/images/homepage-v2/video/homepage-hero.mp4"
        type="video/mp4"
      />
    </video>
  );
};
