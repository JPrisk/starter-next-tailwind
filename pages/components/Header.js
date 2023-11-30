import { useState } from 'react';

export default function Header() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <header className={`sticky top-0 shadow-md bg-white z-10`}>
        <nav className='flex items-center h-20 text-zinc-500 font-light'>
          <div className='flex-1 text-center '>
            <a href="#" className="flex items-center justify-center">
              <img src="https://assets.setmore.com/website/next/images/common/setmore-logo.svg" alt="Setmore Logo" />
            </a>
          </div>

          <div className='flex-1 text-center lg:hidden'>
            <button onClick={toggleMobileMenu} className='text-zinc-600 font-normal'>
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

        {isMobileMenuOpen && (
          <div className='lg:hidden absolute top-20 left-0 right-0 bg-white shadow-md'>
            <ul className='flex flex-col items-center space-y-4'>
              <li>Learn</li>
              <li>Integrations</li>
              <li>Features</li>
              <li>Industries</li>
              <li>Pricing</li>
            </ul>
          </div>
        )}


          <div className='flex-10 hidden lg:flex items-center justify-center'>
            <ul className='flex flex-row space-x-6 '>
              <li>Learn</li>
              <li>Integrations</li>
              <li>Features</li>
              <li>Industries</li>
              <li>Pricing</li>
            </ul>
          </div>


          <div className='flex-1 text-center lg:flex hidden pl-36'>
            <div className='flex items-center justify-center space-x-6'>
              <div>
                <a href="tel:+1-800-749-4920">+1 (800) 749-4920</a>
              </div>
              <div className='text-zinc-600 font-normal'>
                Login
              </div>
              <div className='bg-setmore text-white py-2 px-6 text-sm rounded-lg'>
                Start FREE
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }