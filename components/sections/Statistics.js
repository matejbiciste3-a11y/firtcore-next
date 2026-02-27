import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '../ui/AnimatedCounter'
import { Icons } from '../ui/Icons'

const statistics = [
    {
        id: 1,
        icon: 'clock',
        component: Icons.Clock,
        value: 99.99,
        suffix: '%',
        label: 'Dostupnost',
        subtext: 'SLA garance',
        color: 'success',
        iconBg: 'success'
    },
    {
        id: 2,
        icon: 'zap',
        component: Icons.Zap,
        value: 5,
        suffix: 'ms',
        label: 'Latence Praha',
        subtext: 'Průměrná odezva',
        color: 'primary',
        iconBg: 'primary'
    },
    {
        id: 3,
        icon: 'shield',
        component: Icons.Shield,
        value: 12,
        suffix: 'Tbps',
        label: 'DDoS kapacita',
        subtext: 'Enterprise ochrana',
        color: 'purple',
        iconBg: 'purple'
    },
    {
        id: 4,
        icon: 'users',
        component: Icons.Users,
        value: 24,
        suffix: '/7',
        label: 'Podpora',
        subtext: 'Reakce do 15 minut',
        color: 'orange',
        iconBg: 'orange'
    }
]

export default function Statistics() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section id="statistics" className="stats-section relative overflow-hidden">
            <div className="data-stream">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="data-line"
                        style={{
                            left: `${(i + 1) * 15}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
            <div className="container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="stats-grid"
                >
                    {statistics.map((stat) => {
                        const Icon = stat.component || Icons.Zap
                        return (
                            <motion.div
                                key={stat.id}
                                variants={itemVariants}
                                className="stat-card glass-morphism-v2 p-8 rounded-2xl premium-glow flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <div className={`stat-icon w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${stat.iconBg === 'primary' ? 'bg-primary/20 text-primary' : stat.iconBg === 'success' ? 'bg-success/20 text-success' : stat.iconBg === 'purple' ? 'bg-purple-500/20 text-purple-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div className={`stat-value text-4xl lg:text-5xl font-black mb-2 text-${stat.color}`}>
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        inView={true}
                                    />
                                </div>
                                <div className="stat-label text-lg font-bold mb-1 opacity-90">{stat.label}</div>
                                <div className="stat-sub text-sm opacity-60 leading-relaxed max-w-[150px]">{stat.subtext}</div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
