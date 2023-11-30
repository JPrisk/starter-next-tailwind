import React from "react";

interface IBoxType {
  head: string;
  body: string;
  boxType: string;
}
export const Box = ({ head, body, boxType }: IBoxType) => {
  return (
    <div className="w-72 ">
      <div className="flex mb-6 items-center">
        <figure aria-hidden="true">
          {boxType === "icon" ? (
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5V8"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M16.5 5V8"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <rect
                x="3"
                y="6.5"
                width="18"
                height="16.5"
                rx="3"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>{" "}
              <rect
                x="17"
                y="19"
                width="3"
                height="3"
                rx="1"
                transform="rotate(180 17 19)"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>{" "}
              <path
                d="M11 19H7"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M11 16H7"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M7 12H17"
                stroke="#303A47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </svg>
          ) : (
            <div className="rounded-full p-4 bg-white">{boxType}</div>
          )}
        </figure>
        <h3 className="font-semibold text-2xl pl-5 text-gray-600">{head}</h3>
      </div>
      <p className="text-xl text-black">{body}</p>
    </div>
  );
};
