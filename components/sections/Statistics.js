import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '../ui/AnimatedCounter'
import { Icons } from '../ui/Icons'
import { useTranslation } from 'next-i18next'

const statistics = [
    {
        id: 1,
        icon: 'clock',
        component: Icons.Clock,
        value: 99.99,
        suffix: '%',
        labelKey: 'statistics.uptime',
        subtextKey: 'statistics.uptimeSub',
        color: 'primary',
        iconBg: 'primary'
    },
    {
        id: 2,
        icon: 'zap',
        component: Icons.Zap,
        value: 5,
        suffix: 'ms',
        labelKey: 'statistics.latency',
        subtextKey: 'statistics.latencySub',
        color: 'primary',
        iconBg: 'primary'
    },
    {
        id: 3,
        icon: 'shield',
        component: Icons.Shield,
        value: 12,
        suffix: 'Tbps',
        labelKey: 'statistics.ddos',
        subtextKey: 'statistics.ddosSub',
        color: 'primary',
        iconBg: 'primary'
    },
    {
        id: 4,
        icon: 'users',
        component: Icons.Users,
        value: 24,
        suffix: '/7',
        labelKey: 'statistics.support',
        subtextKey: 'statistics.supportSub',
        color: 'primary',
        iconBg: 'primary'
    }
]

export default function Statistics() {
    const { t } = useTranslation('home')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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
                {mounted && [...Array(6)].map((_, i) => (
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
                                <div className={`stat-icon w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 bg-primary/20 text-primary`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div className="stat-value text-4xl lg:text-5xl font-black mb-2 text-primary">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        inView={true}
                                    />
                                </div>
                                <div className="stat-label text-lg font-bold mb-1 opacity-90">{t(stat.labelKey)}</div>
                                <div className="stat-sub text-sm opacity-60 leading-relaxed max-w-[150px]">{t(stat.subtextKey)}</div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
