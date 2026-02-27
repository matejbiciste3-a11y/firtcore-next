import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { Icons } from '../ui/Icons'

const enterpriseServices = [
    {
        id: 1,
        title: 'Object Storage',
        description: 'Škálovatelné úložiště S3 kompatibilní s neomezenou kapacitou.',
        icon: Icons.Layout
    },
    {
        id: 2,
        title: 'Managed Kubernetes',
        description: 'Orchestrace containerů na profesionální úrovni s automatickým škálováním.',
        icon: Icons.Cpu
    },
    {
        id: 3,
        title: 'Game Hosting API',
        description: 'Plně dokumentované API pro automatizaci a provisioning herních instancí.',
        icon: Icons.Zap
    }
]

export default function EnterpriseServices() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section className="enterprise-section relative overflow-hidden py-32">
            <div className="mesh-gradient opacity-10"></div>
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="enterprise-header text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Potřebujete něco většího?</h2>
                    <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10">
                        Nabízíme custom řešení pro velké projekty, herní sítě a komerční partnery.
                        Od dedikovaných serverů po managed služby.
                    </p>
                    <Button href="/contact" variant="primary" size="large" className="hover-glow">
                        Projednat individuální řešení
                    </Button>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="enterprise-grid grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {enterpriseServices.map((service) => (
                        <motion.div key={service.id} variants={itemVariants}>
                            <Card
                                icon={<service.icon className="w-6 h-6" />}
                                title={service.title}
                                description={service.description}
                                variant="enterprise"
                                className="h-full premium-glow"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}