// components/pricing/ServiceCard.js
import { motion } from 'framer-motion'

export default function ServiceCard({
    game,
    title,
    description,
    price,
    features,
    icon: Icon,
    delay = 0
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay / 1000 }}
            className="service-card"
        >
            <div
                className="service-img"
                style={{
                    background: `linear-gradient(135deg, 
                        hsl(${game === 'minecraft' ? '222 100% 50%' :
                            game === 'cs2' ? '270 60% 60%' :
                                '142 71% 45%'}/0.2), 
                        hsl(222 100% 50%/0.15))`
                }}
            >
                {Icon && <Icon />}
            </div>

            <div className="service-body">
                <h3>{title}</h3>
                <p className="desc">{description}</p>

                <div className="service-price">
                    <span className="price">{price}</span>
                </div>

                <ul className="service-features">
                    {features.map((feature, index) => (
                        <li key={index}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}