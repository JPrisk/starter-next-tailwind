import { Lato } from "next/font/google";
import TrustPilot from "./TrustPilot";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function Hero() {
  return (
    <section className="mt-14 md:mt-24 mb-10 tracking-wide pt-10 pb-9 grid md:grid-cols-2 grid-cols-1 gap-7 lg:justify-items-center md:container md:mx-auto mx-5">
      <article className="mb-10 lg:max-w-md">
        <h1
          className={`text-4xl md:text-[56px] md:leading-none ${lato.className} mb-5 md:mb-8`}
        >
          Free scheduling software
          <span className="text-brand text-5xl">.</span>
        </h1>
        <p className="text-light text-lg">
          Organize your business with 24/7 automated online booking, reminders,
          payments, and more.
        </p>
        <form className="mt-8">
          <div className="bg-white pr-11 shadow rounded-lg mb-4">
            <div className="pl-6 py-4">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Enter email to sign up."
                className="focus:outline-none w-full "
              />
            </div>
          </div>
          <div>
            <button type="button" className="w-full h-12 btn-primary">
              Start FREE
            </button>
          </div>
        </form>
        <div className="mt-4 text-light-faded flex justify-center items-center gap-1">
          <span className="">Or sign up with</span>
          <a
            className=" bg-[#f5f8fa] px-2 py-1 rounded-xl flex gap-1 h-7 items-center"
            href="/"
          >
            <span>
              <Image
                alt="google-signup"
                src={"/google-signup.svg"}
                width="15"
                height="14"
              />
            </span>
            <span className="text-sm">Google</span>
          </a>
          <span>or</span>
          <a
            className="bg-[#f5f8fa] px-2 py-1 rounded-xl flex gap-1 h-7 items-center"
            href="/"
          >
            <span className=" ">
              <Image
                alt="facebook-signup"
                src={"/facebook-signup.svg"}
                width="20"
                height="20"
              />
            </span>
            <span className="text-sm">Facebook</span>
          </a>
        </div>
        <span className="mt-12 mx-11 flex justify-center">
          <TrustPilot />
        </span>
      </article>
      <figure className="relative mx-auto md:mx-0">
        <Image
          src={
            "https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp"
          }
          alt="Hero Image"
          width={400}
          height={344}
          className="md:hidden lg:block"
        />
        <picture className="md:block">
          <source
            srcset="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop@2x.webp 2x"
            type="image/webp"
            media="(max-width:640px)"
          />
          <source
            srcset="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop@2x.png 2x"
            type="image/png"
            media="(max-width:640px)"
          />
          <source
            srcset="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet@2x.webp 2x"
            type="image/webp"
            media="(min-width:641px) and (max-width:992px)"
          />
          <source
            srcset="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet@2x.png 2x"
            type="image/png"
            media="(min-width:641px) and (max-width:992px)"
          />
          <source
            srcset="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software@2x.webp 2x"
            type="image/webp"
            media="(min-width:993px)"
          />
          <source
            srcset="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software@2x.png 2x"
            type="image/png"
            media="(min-width:993px)"
          />
          <img
            src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png"
            alt="Setmore scheduling software"
            className="md:w-100 fg-layer absolute left-0 -top-7"
          />
        </picture>
      </figure>
    </section>
  );
}
