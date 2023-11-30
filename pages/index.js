import { Lato } from "next/font/google";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={`${lato.className}`}>
      <Header />
      <Hero />
    </main>
  );
}
