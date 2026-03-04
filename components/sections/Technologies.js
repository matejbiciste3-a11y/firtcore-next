import Card from '../ui/Card'
import { useTranslation } from 'next-i18next'

const technologies = [
    {
        id: 1,
        icon: 'shield',
        titleKey: 'technologies.items.0.title',
        descKey: 'technologies.items.0.description'
    },
    {
        id: 2,
        icon: 'cpu',
        titleKey: 'technologies.items.1.title',
        descKey: 'technologies.items.1.description'
    },
    {
        id: 3,
        icon: 'ssd',
        titleKey: 'technologies.items.2.title',
        descKey: 'technologies.items.2.description'
    },
    {
        id: 4,
        icon: 'network',
        titleKey: 'technologies.items.3.title',
        descKey: 'technologies.items.3.description'
    },
    {
        id: 5,
        icon: 'backup',
        titleKey: 'technologies.items.4.title',
        descKey: 'technologies.items.4.description'
    },
    {
        id: 6,
        icon: 'docker',
        titleKey: 'technologies.items.5.title',
        descKey: 'technologies.items.5.description'
    }
]

export default function Technologies() {
    const { t } = useTranslation('common')
    
    return (
        <section id="features" className="technologies-section">
            <div className="container">
                <div className="section-header">
                    <h2>{t('technologies.title')}</h2>
                    <p>{t('technologies.subtitle')}</p>
                </div>

                <div className="technologies-grid">
                    {technologies.map((tech) => (
                        <Card
                            key={tech.id}
                            icon={tech.icon}
                            title={t(tech.titleKey)}
                            description={t(tech.descKey)}
                            variant="enterprise"
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}