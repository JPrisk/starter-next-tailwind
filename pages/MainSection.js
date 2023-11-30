import Image from "next/image";
import SocialButton from "./SocialButton";
import { getStartSet, getSingleStar } from "./Star";
export default function HeroSection() {
  return (
    <div className="p-3 w-full">
      <div className="text-4xl font-bold mb-5 text-heading-bold-black">
        Free scheduling software
        <span className="font-extrabold text-dot-blue">.</span>
      </div>
      <div className="font-light text-lg text-header-fading-black">
        Organize your business with 24/7 automated online booking, reminders,
        payments, and more.
      </div>

      <div className="mt-6">
        <div className='md:max-xl:flex md:max-xl:gap-3'>
        <div className="rounded-lg shadow h-14 hover:shadow-2xl mb-5 border-1 w-full">
          <input
            id="indexForm"
            type="text"
            name="email"
            placeholder="Your email"
            aria-label="Enter email to sign up."
            className="h-14 px-4 border-hidden border-white w-full font-light text-slate-600 focus:outline-none cursor-text"
          />
        </div>
        <div className="h-14 w-full">
          <button className="rounded-lg h-14 text-center w-full bg-dot-blue text-white font-lg font-light transition duration-300 ease-in hover:bg-darker-blue cursor-pointer">
            Start FREE
          </button>
        </div>
        </div>

        <div className="flex text-slate-600 font-light text-xs items-center mt-3 justify-center">
          Or sign up with{" "}
          <SocialButton source="/icons8-google.svg" socialLabel="Google" />
          or{" "}
          <SocialButton source="/icons8-facebook.svg" socialLabel="Facebook" />
        </div>

        <div className="flex text-lg font-medium items-center mt-10 justify-center mb-3">
          Excellent <div className="mx-3">{getStartSet(5)}</div>{" "}
          {getSingleStar()}{" "}
          <span className="text-sm font-medium items-baseline h-full">
            TrustPilot
          </span>
        </div>
      </div>
    </div>
  );
}
