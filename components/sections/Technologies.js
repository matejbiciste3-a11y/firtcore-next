import Card from '../ui/Card'

const defaultTechnologies = [
    {
        id: 1,
        icon: 'shield',
        title: 'Enterprise DDOS Protection',
        description: 'Vícevrstvá ochrana až 12 Tbps s okamžitou filtrací.'
    },
    {
        id: 2,
        icon: 'cpu',
        title: 'AMD Ryzen 7 5700x',
        description: 'Špičkový výkon pro náročné herní servery.'
    },
    {
        id: 3,
        icon: 'ssd',
        title: 'NVMe Gen4 SSD',
        description: 'Čtení až 7,000 MB/s pro bleskové načítání.'
    },
    {
        id: 4,
        icon: 'network',
        title: '10 Gbps Network',
        description: 'Redundantní konektivita s <1ms latencí v Praze.'
    },
    {
        id: 5,
        icon: 'backup',
        title: 'Automatické zálohování',
        description: 'Denní snapshoty s 14denní retencí.'
    },
    {
        id: 6,
        icon: 'docker',
        title: 'Docker Ready',
        description: 'Plná podpora containerizace a orchestrace.'
    }
]

export default function Technologies({ technologies = defaultTechnologies }) {
    return (
        <section id="features" className="technologies-section">
            <div className="container">
                <div className="section-header">
                    <h2>Technologie</h2>
                    <p>Postaveno na špičkovém hardwaru</p>
                </div>

                <div className="technologies-grid">
                    {technologies.map((tech, index) => (
                        <Card
                            key={tech.id}
                            icon={tech.icon}
                            title={tech.title}
                            description={tech.description}
                            variant="enterprise"
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}