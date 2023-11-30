import Image from "next/image";

export default function Navigation() {
  return (
    <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between' >
     <div>
         <span className='text-2xl font-[Poppins] cursor-pointer'>
             <img className='h-10 inline' src='https://assets.setmore.com/website/next/images/common/setmore-logo.svg' />
         </span>
     </div>
     <ul className='md:flex md:items-center gap:4'>
         <li><a href='#' className='text-xl hover:text-cyan-500 duration-500'>Learn</a></li>
         <li><a href='#' className='text-xl hover:text-cyan-500 duration-500'>Integrations</a></li>
         <li><a href='#' className='text-xl hover:text-cyan-500 duration-500'>Features</a></li>
         <li><a href='#' className='text-xl hover:text-cyan-500 duration-500'>Industries</a></li>
         <li><a href='#' className='text-xl hover:text-cyan-500 duration-500'>Pricing</a></li>
     </ul>
 </nav>
  );
}
