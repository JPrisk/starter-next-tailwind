import Image from "next/image";

export default function Header() {
  return (
    <section
      className="bg-white fixed top-0 left-0 right-0 z-10"
      id="setmore-header"
    >
      <header>
        <nav className="flex gap-5 mx-5 py-5 md:py-7 items-center md:container md:mx-auto justify-center">
          <a href="/" className="mr-auto xl:mr-6">
            <Image
              width="156"
              height="24"
              src="/setmore.svg"
              alt="Setmore Logo"
            />
          </a>
          <ul className="hidden xl:flex xl:mx-24 gap-6">
            <li className="menu-list-item">Learn</li>
            <li className="menu-list-item">Integrations</li>
            <li className="menu-list-item">Features</li>
            <li className="menu-list-item">Industries</li>
            <li className="menu-list-item">Pricing</li>
          </ul>
          <div className="hidden md:block text-light-menu">
            <a href="tel:+1-800-749-4920">+1 (800) 749-4920</a>
          </div>
          <div>
            <a
              href="https://my.setmore.com"
              id="button-login-mobile"
              className={`md:ml-4 text-light-menu`}
            >
              Login
            </a>
          </div>
          <div className="md:ml-4 xl:ml-2">
            <button className="xl:hidden h-5">
              <div className="h-0.5 w-6 mb-1.5 rounded-full bg-black"></div>
              <div className="h-0.5 w-6 my-1.5 rounded-full bg-black"></div>
              <div className="h-0.5 w-6 mt-1.5 rounded-full bg-black"></div>
            </button>
            <a
              href="/"
              className="hidden xl:block btn-primary px-6 text-center align-middle"
            >
              <span className="text-sm leading-8 align-middle">Start FREE</span>
            </a>
          </div>
        </nav>
      </header>
    </section>
  );
}
