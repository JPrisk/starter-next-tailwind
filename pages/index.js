import { Section1 } from "@/components/Section/Section1";
import { Section2 } from "@/components/Section/Section2";
import { Section3 } from "@/components/Section/Section3";
import { Section4 } from "@/components/Section/Section4";

export default function Home() {
  return (
    <main className="bg-white">
      <Section1 />
      <Section2 />
      <div className=" bg-gray-100">
        <Section3 />
        <Section4 />
      </div>
      {/* <section className="text-black">
       {new Array(3).fill(0).map(planTile => {
        return ( <Billing
          bold="font-bold text-4xl"
          small="text-gray-500"
          benefits={points}
        />)
       })}
      </section> */}
    </main>
  );
}
