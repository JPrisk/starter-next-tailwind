import Stars from "../SectionA/Stars";
import TrustPilot from "../SectionA/TrustPilot";
import Card from "./Card";


export default function SectionK()
{
    return (
        <section>
            <h2>
                People
                <span>❤️</span>
                Setmore
            </h2>
            <div>
                <div className="">
                    Excellent
                    <Stars />
                    <div>
                        Based on 
                        <a>2,085 reviews</a>
                    </div>
                    <TrustPilot />
                </div>
            </div>

            {/* curousel of videos */}
            <div>
                <ul>
                    <li>
                        <Card name={'A'} from={'India'} comment={'working fine'}/>
                    </li>
                </ul>
            </div>

            
        </section>
    )
}