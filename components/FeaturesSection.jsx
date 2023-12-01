export default function FeaturesSection() { 
    return <section className="bg-[#edf0f2]">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-36 mx-5">
            <div className="w-full md:max-w-lg -mt-12 shadow-inputShadow">
                <img className="w-full" loading="lazy" src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page.png" alt="setmore app on desktop and mobile" ></img>
            </div>
            <article className="flex flex-col items-start w-full lg:max-w-md gap-6 mt-12">
                <h2 className="text-xl">Spotlight your brand
                    <span className="text-blueDot">.</span>
                </h2>
                <p>Brand experience hits a whole new level with a custom Booking Page. Show why your business stands apart and enable people to self-book at their convenience.</p>
                <button className="bg-[#edf0f2] outline outline-1 outline-[#1d90f5] rounded-md w-full md:w-fit px-10 py-3"><span className="text-[#1d90f5]">Create your Booking Page</span></button>
            </article>
        </div>
    </section>
}