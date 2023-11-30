import Ratings from "./Ratings";

export default function SectionA() {
    return (
    <section className="flex flex-col sm:py-3 sm:px-12 md:py-10 md:px-24 sm:flex-row space-y-8 sm:space-y-0">

      <div className="p-8 flex-grow-1/3">
        <article className=""> 
          <h1 className="text-5xl font-semibold py-7">
              <span className="text-setmoreHeading font-setmoreHeading">Free scheduling software</span>
              <span className="text-setmore">.</span>
          </h1>
          <p className="text-zinc-600 text-xl font-light">
            Organize your business with 24/7 automated online booking, reminders, payments, and more.
          </p>
          <form className="pt-8 text-xl flex flex-col lg:flex-row lg:items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white w-full lg:w-64 h-15 p-4 border rounded-md shadow-md mb-4 lg:mb-0 lg:mr-4"
                />
                <div className="bg-setmore text-white py-4 px-6 rounded-lg flex items-center my-4 justify-center">
                  <span className="text-center">Start FREE</span>
                </div>
          </form>

          <div className="flex flex-row text-md sm:items-center sm:justify-center lg:items-start lg:justify-normal text-neutral-400 font-light">
              <span>Or sign up with</span>
              <div className="flex flex-row py-0 mx-1 text-setmore px-2 rounded-full items-center justify-center" style={{backgroundColor: '#f5f8fa'}}>
                {/* <i className=""> */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width="20px" height="20px"/>
                {/* </i> */}
                <a>Google</a>
              </div>
              <span>or</span>
              <div className="flex flex-row py-0 mx-1 text-setmore px-2 rounded-full items-center justify-center" style={{backgroundColor: '#f5f8fa'}}>
                <i className="">
                  <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg?size=626&ext=jpg" width="20px" height="20px" />
                </i>
                <a>Facebook</a>
              </div>
          </div>
          <Ratings />

          
        </article>
      </div>
      <div className="relative w-full flex-grow-2/3">
        <figure className="relative lg:scale-75 ">
        <img className="w-full h-auto md:w-full lg:w-full xl:w-full" src="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp" alt="Cover" />
      <img className="absolute top-[-25px] left-10 w-full h-auto md:w-full lg:w-full xl:w-full" src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software@2x.png" alt="Overlay" />
        </figure>
      </div>
    </section>
    )
  }

      