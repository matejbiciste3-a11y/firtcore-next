import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function PricingCard({
    name,
    price,
    period = 'měsíc',
    features,
    popular = false,
    category
}) {
    return (
        <div className={`pricing-card ${popular ? 'popular' : ''}`}>
            {popular && (
                <Badge variant="primary" className="popular-badge">
                    Nejoblíbenější
                </Badge>
            )}

            <h3>{name}</h3>

            <div className="price">
                <span className="amount">{price}</span>
                <span className="period"> Kč/{period}</span>
            </div>

            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <Button
                href={`https://client.firtcore.cz/order/${category}/${name.toLowerCase()}`}
                variant={popular ? 'primary' : 'outline'}
                fullWidth
            >
                Vybrat plán
            </Button>
        </div>
    )
}