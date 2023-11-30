export default function Navbar() {
  return (
    <nav className="section-container sticky top-0  py-5 w-full h-20 md:w-full bg-white">
      <div className="flex justify-between items-center h-full">
        <div className="logo ">
          <div>
            <img
              src="https://assets.setmore.com/website/next/images/common/setmore-logo.svg"
              alt="SetmoreLogo"
            />
          </div>
        </div>
        <ul className="flex list-none text-gray-600">
          <li className="hidden lg:block ml-5">
            <a href="#">Learn</a>
          </li>
          <li className="hidden lg:block ml-5">
            <a href="#">Integrations</a>
          </li>
          <li className="hidden lg:block ml-5">
            <a href="#">Features</a>
          </li>
          <li className="hidden lg:block ml-5">
            <a href="#">Industries</a>
          </li>
          <li className="hidden lg:block ml-5">
            <a href="#">Pricing</a>
          </li>
        </ul>
        <ul className="flex list-none text-gray-600">
          <li className="hidden md:block  ml-5">
            <a href="#">+1 (800) 749-4920</a>
          </li>
          <li className="ml-5">
            <a href="#">Login</a>
          </li>
          <li className="hidden lg:block xl:block  2xl:block ml-5">
            <a href="#" className="bg-blue-500 text-white px-5 py-2 rounded-md">
              Start FREE
            </a>
          </li>
          <li className="hidden max-lg:block ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}
