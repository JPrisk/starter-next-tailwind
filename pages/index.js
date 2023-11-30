import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//lg:shrink max-lg:grow 
export default function Home() {
  return (
    <main className='overflow-y-auto'>
      <header className='fixed bg-white z-10  px-20 py-1 w-full block align-middle justify-center max-md:px-4 leading-6 font-lato'>
        <nav className='flex flex-row items-center justify-between basis-0 min-w-fit mr-auto ml-auto py-7'>
          <div className='shrink-0 max-md:shrin'>
            <a href="/">
              <img src='https://assets.setmore.com/website/next/images/common/setmore-logo.svg' />
            </a>
          </div>

          <ul className='flex flex-row gap-5 text-nav-items text-justify-end max-xl:hidden'>
            <li>Learn</li>
            <li>Integrations</li>
            <li>Features</li>
            <li>Industries</li>
            <li>Pricing</li>
          </ul>
          <div className='flex flex-row gap-5 shrink-0  text-nav-items items-center'>
            <a href="" className='max-sm:hidden'>+1 (800) 749-4920</a>
            <a href="/login" className=''>Login</a>
            <a href="/signup" className='max-xl:hidden'>
              <button className=' bg-sm-brand justify-center text-white rounded-md px-4 py-1 whitespace-nowrap shrink-0 min-w-[100px] text-[14px]'>Start FREE</button>
            </a>
            <button className='w-10 xl:hidden'>
              <img src='hamburger-menu.svg'></img>
            </button>
          </div>
        </nav>
      </header>

      <section className='pt-44 px-20 w-full block align-middle justify-center max-md:px-4'>
        <div className='flex flex-row flex-wrap'>
          <div className='basis-1/2 grow flex flex-col max-lg:shrink-0'>
            <div className='pt-5'>
              <span className='font-euclid text-5xl font-semibold text-black leading-[64px]'>
                Free scheduling software
                <span className='text-sm-brand'>.</span>
              </span>
              <p className='font-lato text-nav-items text-lg mt-5'>
                Organize your business with 24/7 automated online booking, reminders, payments, and more.
              </p>
              <form className='flex flex-row flex-wrap basis-full mt-7 justify-between items-center gap-2'>
                <input className='grow shadow-lg shadow-gray-300 rounded-lg h-14 placeholder:text-nav-items placeholder:text-center' placeholder="your email"></input>
                <button className='grow font-lato text-lg text-white bg-sm-brand w-fit text-center rounded-lg h-14 shrink-0 min-w-[200px] text-[14px] my-2'>Start FREE</button>
              </form>
              <div className='m-4'>
                <span className='leading-4 font-lato text-nav-items'>{"Or signup with "}
                  <a className="bg-sky-100 text-sm-brand rounded-sm" href='/singup/google'>google</a>
                  {" or "}
                  <a className="bg-sky-100 text-sm-brand rounded-sm" href='/singup/facebook'>facebook</a></span>
              </div>
              <div className='mt-4 leading-4'>
                <span>Excellent 🌠🌠🌠🌠🌠 ⭐ TrustPilot</span>
              </div>
            </div>
          </div>
          <div className='basis-1/2 pl-3 relative grow max-lg:shrink-0 [@media(max-width:530px)]:py-20'>
            <video className='max-lg:hidden [@media(max-width:530px)]:flex' autoPlay muted loop poster="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp" preload={"auto"} playsInline >
              <source src="https://assets.setmore.com/website/v2/images/homepage-v2/video/homepage-hero.mp4" type="video/mp4" />
            </video>
            <img className='z-1 absolute top-[-40px] sm:max-lg:top-20 [@media(max-width:530px)]:py-20' src='https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png' />
          </div>
        </div>
      </section>

      <section className='bg-light-blue-grey mt-20'>
        <div className='px-20 flex flex-row flex-wrap mt-11 items-center justify-between max-md:px-4'>
          <div className='basis-1/2 relative self-start justify-stretch'>
            <img className='absolute top-[-60px] rounded-lg shadow-md shadow-gray-500' src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page.png"></img>
          </div>
          <div className='basis-1/2 shrink'>
            <div className='my-auto ml-auto'>
              <span className='font-euclid text-3xl font-semibold text-black leading-[32px]'>
                Spotlight your brand<span className='text-sm-brand'>.</span>
              </span>
              <p className='font-lato text-nav-items text-lg mt-5'>
                Brand experience hits a whole new level with a custom Booking Page. Show why your business stands apart and enable people to self-book at their convenienc
              </p>
              <button className='my-5 border-2 border-sm-brand rounded-xl text-center p-5 leading-4 text-sm-brand'>Create your Booking Page</button>

            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
