import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionA from './components/SectionA/SectionA'
import SectionB from './components/SectionB/SectionB'
import SectionC from './components/SectionC/SectionC'
import SectionD from './components/SectionD/SectionD'
import SectionE from './components/SectionE/SectionE'
import SectionF from './components/SectionF/SectionF'
import SectionG from './components/SectionG/SectionG'
import SectionH from './components/SectionH/SectionH'
import SectionI from './components/SectionI/SectionI'
import SectionJ from './components/SectionJ/SectionJ'
import SectionK from './components/SectionK/SectionK'
import SectionL from './components/SectionL/SectionL'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <SectionA />
      <SectionB />
      {/* <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <SectionG />
      <SectionH />
      <SectionI />
      <SectionJ />
      <SectionK />
      <SectionL />
      <Footer /> */}
    </div>
  )
}
