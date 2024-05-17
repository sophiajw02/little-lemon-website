import './SpecialCard.css';

function SpecialCard(props)  {
    return (
        <div class="special-card">
            <img src={props.src}
                alt={props.dish}
            />
            <div class="special-card-content">
                <div class="special-card-title">
                    <h3>{props.dish}</h3>
                    <p>${props.price}</p>
                </div>
                <p>{props.desc}</p>
                <a href="/order-online">
                    Order a delivery
                </a>
            </div>
        </div>
    )
}

export default SpecialCard;