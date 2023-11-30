export default function Feature({ icon, heading, description }) {
    return ( 
        <div>
            <div>
                {icon}
                <h3>{heading}</h3>
            </div>
            <p>{description}</p>
        </div>
    )
}