import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-28 h-20 bg-white text-gray-600 ">
      <a className="flex flex-row justify-between" href="/">
        <img
          src="https://assets.setmore.com/website/next/images/common/setmore-logo.svg"
          className="w-36"
        ></img>
      </a>
      <ul className="flex justify-between gap-6 text-sm list-none">
        <li>Learn</li>
        <li>Integrations</li>
        <li>Features</li>
        <li>Industries</li>
        <li>Pricing</li>
      </ul>
      <div className="flex justify-between gap-6 text-sm list-none items-center">
        <div>+1 (800) 749-4920</div>
        <div>Login</div>
        <div className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded text-white">
          Start FREE
        </div>
      </div>
    </nav>
  );
};
