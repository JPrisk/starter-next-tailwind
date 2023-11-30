
export default function Card({title, maxUsers, amount, showTree = false })
{
    return (
        <div>
            <div>
                <h2>{title}</h2>
                {showTree && <span>Tree</span>}
            </div>
            <p>Up to {maxUsers} users</p>
            <p>
                <h2>${amount}</h2>
                user / month
            </p>
            <div>
                Start FREE
            </div>
            <div>
                24 / 7 HUMAN SUPPORT 
                <span>ICON/Image</span>
            </div>
            <div>
                <ul>
                    <li>
                        <span>ICON</span>
                        Unlimited appointments
                    </li>
                    <li>
                        <span>ICON</span>
                        Accept payments
                    </li>
                    <li>
                        <span>ICON</span>
                        Your custom Booking Page
                    </li>
                </ul>
                <a> `---` Learn more</a>
            </div>
        </div>
    )
}