export default function Main() {
  return (
    <div className="m-6 w-f flex flex-wrap justify-evenly gap-10">
      <div className="sm:p-5 mt-6 flex flex-col max-w-lg flex-wrap content-center sm:flex-grow flex-shrink gap-5">
        <div className="flex md:mt-6 flex-col justify-between flex-shrink gap-5 mb-5">
          <h1 className="font-semibold flex-shrink sm:text-[56px] text-[36px] leading-snug">
            Free scheduling <br />
            software
            <span className="text-setmore-blue transition-colors hover:to-hover-blue ">
              .
            </span>
          </h1>
          <p className="flex-shrink text-gray-600">
            Organize your business with 24/7 automated online booking,
            reminders, payments, and more.
          </p>
        </div>
        <div className="flex flex-row md:h-14 flex-wrap w-full md:flex-col gap-5">
          <input
            className="shadow-md focus:shadow-lg w-f h-14 p-5"
            placeholder="Your email"
          />
          <button type="submit" className="primary-btn w-f h-12 font-lato">
            Start FREE
          </button>
        </div>
        <div className="flex justify-center md:justify-start lg:justify-start gap-2">
          <span className="align-text-bottom font-thin text-gray-400 font-inter">
            Or sign up with
          </span>
          <a className="inline-flex px-2 mb-6 gap-0.5 border-none rounded-2xl items-center no-underline  tracking-wide bg-gray-100">
            <span>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.67308 2.78616C8.92728 2.78616 9.77331 3.32791 10.2557 3.78061L12.1407 1.94013C10.983 0.864046 9.47645 0.203552 7.67308 0.203552C5.06079 0.203552 2.80472 1.70265 1.70638 3.88451L3.86597 5.56172C4.40772 3.9513 5.90682 2.78616 7.67308 2.78616Z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M14.0854 7.03116C14.0854 6.48199 14.0409 6.08124 13.9444 5.66565H7.67346V8.14436H11.3544C11.2802 8.76032 10.8795 9.68798 9.9889 10.3114L12.0965 11.9441C13.3582 10.7789 14.0854 9.06459 14.0854 7.03116Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M3.87323 8.20371C3.73223 7.78811 3.65059 7.34284 3.65059 6.88272C3.65059 6.4226 3.73223 5.97732 3.86581 5.56173L1.70622 3.88452C1.25352 4.78992 0.993774 5.80663 0.993774 6.88272C0.993774 7.9588 1.25352 8.97552 1.70622 9.88092L3.87323 8.20371Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M7.67328 13.5617C9.47665 13.5617 10.9906 12.968 12.0964 11.9439L9.98872 10.3112C9.4247 10.7045 8.66773 10.9791 7.67328 10.9791C5.90701 10.9791 4.40791 9.81397 3.87358 8.20355L1.71399 9.88076C2.81234 12.0626 5.06099 13.5617 7.67328 13.5617Z"
                  fill="#34A853"
                ></path>
              </svg>
            </span>
            <span className="text-blue-400">Google</span>
          </a>
          <span className="font-thin text-gray-400 font-inter">or</span>
          <a className="inline-flex px-2 mb-6 gap-0.5 border-none rounded-2xl items-center no-underline  tracking-wide bg-gray-100">
            <svg width="20" height="20">
              <circle
                cx="10"
                cy="10"
                r="8.75"
                fill="url(#paint0_linear_2696_12898)"
              ></circle>
              <path
                d="M13.2586 12.676L13.6472 10.2063H11.2158V8.60437C11.2158 7.92856 11.5548 7.26942 12.6438 7.26942H13.75V5.16687C13.75 5.16687 12.7466 5 11.7877 5C9.78427 5 8.47604 6.18309 8.47604 8.32403V10.2063H6.25V12.676H8.47604V18.6466C8.92294 18.715 9.38015 18.75 9.8459 18.75C10.3117 18.75 10.7689 18.715 11.2158 18.6466V12.676H13.2586Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2696_12898"
                  x1="10"
                  y1="1.25"
                  x2="10"
                  y2="18.6981"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18ACFE"></stop>
                  <stop offset="1" stop-color="#0163E0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-blue-400">Facebook</span>
          </a>
        </div>
      </div>
      <div className="flex flex-shrink max-w-md relative h-[560px]">
        <img
          src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png"
          alt="Setmore scheduling software"
          className=" absolute"
        />
        <video
          autoPlay
          muted
          loop
          poster="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp"
          className="w-100 h-[500px]"
        >
          <source
            src="https://assets.setmore.com/website/v2/images/homepage-v2/video/homepage-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
