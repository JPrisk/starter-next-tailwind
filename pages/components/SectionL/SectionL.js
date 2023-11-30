import Card from "./Card";

export default function SectionL()
{
    return (
        <section>
            <article>
                <h2>
                    Bookings, simplified
                    <span>.</span>
                </h2>
                <p>Stay in the loop with your whole team’s calendars. A free appointment scheduling app gives your business the freedom to grow.</p>
            </article>
            <div>
                Monthly billing
                <div>
                    <button>Toggle</button>
                </div>
                Annual billing
            </div>
            <ul>
                {/* <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li> */}
            </ul>
        </section>
    )
}