import React from "react";

interface IBillingType {
  bold: string;
  small?: string;
}
export const Billing = ({ bold, small }: IBillingType) => {
  return (
    <li>
      <div>
        <h2 className={bold}>Free</h2>
      </div>
      <p className={small}>Up to 4 users</p>
      <p>
        <strong className={bold}>$0</strong>
        <span className={small}>user / month</span>
      </p>
      <div>
        <a href="/start-now" id="free-pre-footer">
          Start FREE
        </a>
        <div className="flex ">
          <span> 24/7 human support </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M10.5 2a8 8 0 0 0-6.676 12.407l-1.298 3.13c-.113.273.16.55.436.437l3.131-1.298A8 8 0 1 0 10.5 2z"
              stroke="#156B48"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.765 11c.415 0 .739.374.659.778a4 4 0 0 1-7.847 0c-.08-.404.243-.778.658-.778h6.53zM14.496 7.945a1.87 1.87 0 0 0-1.33-.552 1.87 1.87 0 0 0-1.331.552h-.004a1.879 1.879 0 0 1 2.669-.007h-.004v.007zM6.504 7.945H6.5a1.88 1.88 0 0 1 2.669-.007h-.003a1.894 1.894 0 0 0-1.331-.545 1.87 1.87 0 0 0-1.33.552z"
              stroke="#156B48"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </li>
  );
};
