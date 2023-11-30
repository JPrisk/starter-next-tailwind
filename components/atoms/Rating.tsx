import React from "react";

export const Rating = () => {
  return (
    <svg
      role="img"
      aria-labelledby="starRating-rrtyfeedh5g"
      viewBox="0 0 251 46"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        height: "100%",
        width: "10%",
        left: 0,
        top: 0,
      }}
      className="w-"
    >
      <title id="starRating-rrtyfeedh5g" lang="en">
        4.8 out of five star rating on Trustpilot
      </title>
      {new Array(5).fill(0).map((num) => {
        return (
          <>
            <g className="tp-star">
              <path
                className="tp-star__canvas"
                fill="#dcdce6"
                d="M0 46.330002h46.375586V0H0z"
              ></path>
              <path
                className="tp-star__shape"
                d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                fill="#FFF"
              ></path>
            </g>
          </>
        );
      })}
    </svg>
  );
};
