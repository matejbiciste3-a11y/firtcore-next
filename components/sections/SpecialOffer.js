import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { useTranslation } from 'next-i18next'

export default function SpecialOffer() {
    const { t } = useTranslation('common')
    
    return (
        <section className="special-offer-section">
            <div className="container">
                <div className="offer-box">
                    <div className="offer-content">
                        <h2>
                            <span className="gradient-text">{t('specialOffer.titleGradient')}</span> {t('specialOffer.title')}
                        </h2>
                        <p className="offer-description">
                            {t('specialOffer.description')}
                        </p>

                        <div className="promo-code">
                            <Badge variant="primary" size="large" className="badge">
                                {t('specialOffer.promoCode')}
                            </Badge>
                            <p className="promo-note">{t('specialOffer.promoNote')}</p>
                        </div>

                        <Button href="/register" variant="primary" size="large" icon="gift" className="relative z-20">
                            {t('specialOffer.cta')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}