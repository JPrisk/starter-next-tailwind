import Feature from "./Feature";


const features = [
    {
        icon: '1.',
        heading: 'Stay one step ahead',
        description: 'Share your online Booking Page and every new appointment lands in your calendar.'
    },
    {
        icon: '2.',
        heading: 'Reach global customers',
        description: 'Add 1-click Zoom or Teleport video meeting links to your appointments.'
    },
    {
        icon: '3.',
        heading: 'Get paid in advance',
        description: 'Forget about chasing invoices by accepting payments easily and securely online.'
    },
    {
        icon: '4.',
        heading: 'No more no-shows',
        description: 'Let Setmore fire out personalized email or text reminders to every customer.'
    },
]
export default function SectionA() {
    return ( 
        <section>
            <ul>
                {
                features.map((feature, index) => (
                    <li key={index}>
                        <Feature icon={feature.icon} heading={feature.heading} description={feature.description} />
                    </li>
                ))}
            </ul>
        </section>
    )
}