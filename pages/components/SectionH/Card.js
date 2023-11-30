

export default function Card ({icon, title})
{
    return (<div>
        <div>
            <img src={icon} />
        </div>
        <h3>{title}</h3>
    </div>)
}