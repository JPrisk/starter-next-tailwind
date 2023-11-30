import { Inter } from 'next/font/google'
import MainSection from '../pages/MainSection'
import SetmoreImageSection from './SetmoreImageSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='w-full bg-white justify-between md:max-xl:flex md:max-lg:flex'> 
    <MainSection />
    <SetmoreImageSection />
   </main>
  )
}
