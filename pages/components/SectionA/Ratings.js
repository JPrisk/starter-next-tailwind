import Stars from "./Stars";
import TrustPilot from "./TrustPilot";


export default function Ratings() {
    return (
      <div className="flex flex-row sm:items-center sm:justify-center lg:items-start lg:justify-normal text-md py-14 space-x-4 font-light">
        <span>Excellent</span>
        <Stars />
        <TrustPilot />
      </div>
    )
  }