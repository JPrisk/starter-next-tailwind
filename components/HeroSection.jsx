import FacebookIcon from "@/Icons/FacebookIcon";
import StarRatingIcon from "@/Icons/StarRatingIcon";
import GoogleIcon from "@/Icons/google";

export default function HeroSection() { 
    return (
        <section className="flex flex-wrap justify-center flex-col md:flex-row items-center mx-5 my-14 md:mx-24 md:my-24 pt-12">
            <div className="text-left md:max-w-lg md:mb-5 lg:pr-2 h-full">
                <h1 className="text-xl md:text-5xl mb-[20px]">
                Free scheduling software
                <span className="text-blueDot">.</span>
                </h1>
                <p className="w-full text-left">Organize your business with 24/7 automated online booking, reminders, payments, and more.</p>
                <form className="mt-[20px] flex flex-col md:flex-row  items-stretch">
                    <div className="max-w-full md:max-w-[300px] h-14 mb-4 md:mr-4 pr-[45px] shadow-inputShadow rounded-lg">
                        <input type="email" placeholder="Your email" className="pt-4 pb-2 pl-6 w-full outline-none h-full"></input>
                    </div>
                    <button className="w-full md:w-[140px] h-14 bg-[#1d90f5] text-white rounded-md">Start FREE</button>
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
            <div className="w-full md:max-w-lg relative">
                <div className="absolute bottom-0 w-full">
                    <img className="w-full" src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png" alt="Setmore scheduling software"></img>
                </div>
                <video className="w-full" autoPlay muted loop poster="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp" preload="auto" playsInline>
                    <source src="https://assets.setmore.com/website/v2/images/homepage-v2/video/homepage-hero.mp4" type="video/mp4" />
                </video>
            </div>
       </section>
    )
}