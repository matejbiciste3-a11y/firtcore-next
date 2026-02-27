import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function SpecialOffer() {
    return (
        <section className="special-offer-section">
            <div className="container">
                <div className="offer-box">
                    <div className="offer-content">
                        <h2>
                            <span className="gradient-text">Vyzkoušejte nás</span> na vlastní kůži
                        </h2>
                        <p className="offer-description">
                            Zaregistrujte se ještě dnes a získejte 10 kreditu zdarma.
                            Plný přístup ke všem funkcím bez jakýchkoliv omezení.
                        </p>

                        <div className="promo-code">
                            <Badge variant="primary" size="large">
                                Promo kód: FIRTCORE-START
                            </Badge>
                            <p className="promo-note">* Platí pro nové zákazníky.</p>
                        </div>

                        <Button href="/register" variant="primary" size="large" icon="gift">
                            Založit účet a uplatnit kredit
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}