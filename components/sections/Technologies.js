import Card from '../ui/Card'
import { useTranslation } from 'next-i18next'

const defaultTechnologies = [
    {
        id: 1,
        icon: 'shield',
        titleKey: 'technologies.ddos.title',
        descKey: 'technologies.ddos.description'
    },
    {
        id: 2,
        icon: 'cpu',
        titleKey: 'technologies.cpu.title',
        descKey: 'technologies.cpu.description'
    },
    {
        id: 3,
        icon: 'ssd',
        titleKey: 'technologies.ssd.title',
        descKey: 'technologies.ssd.description'
    },
    {
        id: 4,
        icon: 'network',
        titleKey: 'technologies.network.title',
        descKey: 'technologies.network.description'
    },
    {
        id: 5,
        icon: 'backup',
        titleKey: 'technologies.backup.title',
        descKey: 'technologies.backup.description'
    },
    {
        id: 6,
        icon: 'docker',
        titleKey: 'technologies.docker.title',
        descKey: 'technologies.docker.description'
    }
]

export default function Technologies({ technologies = defaultTechnologies }) {
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