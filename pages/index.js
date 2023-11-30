import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Main from "@/components/sections/main";
import Spotlight from "@/components/sections/spotlight";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Spotlight />
    </div>
  );
}
