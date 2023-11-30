import Card from "./Card";

export default function SectionH ()
{
    return (
        <section>
            <article>
                <h2>It’s all about connecting 🤝</h2>
                <div>
                    <p>
                        Integrate your free appointment scheduler with your website, social media, sales CRM, and a range of the world’s most popular apps.
                        <a href="#">See all integrations</a>
                    </p>
                </div>
                <ul>
                    <li>
                        <Card title={'Stripe'}/>
                    </li>
                    <li>
                        <Card title={'Instagram'}/>
                    </li>
                </ul>
            </article>
        </section>
    )
}