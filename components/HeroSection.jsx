import FacebookIcon from "@/Icons/FacebookIcon";
import StarRatingIcon from "@/Icons/StarRatingIcon";
import GoogleIcon from "@/Icons/google";

export default function HeroSection() { 
    return (
        <section className="flex justify-center flex-col lg:flex-row lg:justify-evenly items-center mx-5 my-14 md:my-24 pt-12">
            <div className="text-left sm:max-w-md md:mb-5 md:pr-2 flex flex-col justify-end">
                <h1 className="text-xl md:text-[56px] mb-6">
                Free scheduling software
                <span className="text-blueDot">.</span>
                </h1>
                <p className="text-left text-lg">Organize your business with 24/7 automated online booking, reminders, payments, and more.</p>
                <form className="w-full mt-10 flex flex-col md:flex-row  items-stretch">
                    <div className="h-14 mb-4 md:mr-4 pr-11 shadow-inputShadow rounded-lg grow">
                        <input type="email" placeholder="Your email" className="pt-4 pb-2 pl-6 w-full outline-none"></input>
                    </div>
                    <button className="w-full md:w-[140px] md:px-2  h-14 bg-[#1d90f5] text-white rounded-md">Start FREE</button>
                </form>
                <div className="mt-4 flex justify-center md:justify-start items-center gap-0.5 text-sm font-Inter">
                    <span className="text-[#8996a3]">Or sign up with</span>
                    <a className="py-1 px-2 bg-[#f5f8fa] rounded-2xl flex items-center gap-0.5">
                        <GoogleIcon />
                        <span className="text-[#1d90f5]">Google</span>
                    </a>
                    <span className="text-[#8996a3]">or</span>
                    <a className="py-1 px-2 bg-[#f5f8fa] rounded-2xl flex items-center gap-0.5">
                        <FacebookIcon />
                        <span className="text-[#1d90f5]">Facebook</span>
                    </a>
                </div>
                <div className="h-14 w-full mx-13 mt-12 flex justify-center md:justify-start">
                    <StarRatingIcon />
                </div>
            </div>
            <div className="w-full min-w-[350px] mt-12 sm:mt-20 md:mt-10 lg:mt-0 sm:max-w-lg lg:max-w-[560px] relative">
                <div className="absolute bottom-0 lg:-bottom-4 w-full">
                    <img className="w-full" src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png" alt="Setmore scheduling software"></img>
                </div>
                <video className="lg:h-[480px]" autoPlay muted loop poster="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp" preload="auto" playsInline>
                    <source src="https://assets.setmore.com/website/v2/images/homepage-v2/video/homepage-hero.mp4" type="video/mp4" />
                </video>
            </div>
       </section>
    )
}