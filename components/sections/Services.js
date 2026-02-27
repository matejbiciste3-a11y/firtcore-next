import React from 'react'
import ServiceCard from '../pricing/ServiceCard'
import GameIcons from '../pricing/GameIcons'

const mainServices = [
    {
        id: 1,
        game: 'minecraft',
        title: 'Minecraft Hosting',
        description: 'Optimální výkon pro Minecraft servery všech velikostí',
        price: 'od 199 Kč/měs',
        features: ['Okamžitá aktivace', 'DDoS ochrana', '24/7 podpora'],
        icon: GameIcons.Minecraft
    },
    {
        id: 2,
        game: 'cs2',
        title: 'CS2 Hosting',
        description: 'Profesionální servery pro Counter-Strike 2',
        price: 'od 149 Kč/měs',
        features: ['128 tick', 'Workshop podpora', 'Anti-cheat'],
        icon: GameIcons.CS2
    },
    {
        id: 3,
        game: 'gmod',
        title: 'Garry\'s Mod',
        description: 'Stabilní servery pro GMod s podporou addonů',
        price: 'od 129 Kč/měs',
        features: ['FastDL', 'ULX', 'Wiremod'],
        icon: 'GMod', // Changed to string
        link: '#'
    }
]

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from '../ui/Icons'

const defaultServices = [
    {
        id: 1,
        game: 'minecraft',
        title: 'Minecraft Hosting',
        description: 'Optimální výkon pro Minecraft servery všech velikostí',
        price: 'od 199 Kč/měs',
        features: ['Okamžitá aktivace', 'DDoS ochrana', '24/7 podpora'],
        icon: 'Minecraft',
        link: '/minecraft'
    },
    {
        id: 2,
        game: 'cs2',
        title: 'CS2 Hosting',
        description: 'Profesionální servery pro Counter-Strike 2',
        price: 'od 149 Kč/měs',
        features: ['128 tick', 'Workshop podpora', 'Anti-cheat'],
        icon: 'CS2',
        link: '/vps'
    },
    {
        id: 3,
        game: 'gmod',
        title: 'VDS Cloud',
        description: 'Virtuální dedikované servery s vyhrazenými zdroji',
        price: 'od 899 Kč/měs',
        features: ['Dedikované CPU', 'Žádný overselling', '20 Gbps síť'],
        icon: 'Zap',
        link: '/vds'
    }
]

// Prémiové SVG ilustrace pro každý typ služby
const ServiceVisuals = {
    Minecraft: () => (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="mc-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#00ff88" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#0066ff" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            <rect width="200" height="160" fill="url(#mc-bg)" />
            <g transform="translate(60,20)" opacity="0.9">
                <rect x="0" y="0" width="80" height="80" rx="4" fill="#4CAF50" opacity="0.25" />
                <rect x="12" y="20" width="20" height="20" rx="2" fill="#00ff88" />
                <rect x="48" y="20" width="20" height="20" rx="2" fill="#00ff88" />
                <rect x="20" y="48" width="12" height="12" rx="2" fill="#00ff88" />
                <rect x="48" y="48" width="12" height="12" rx="2" fill="#00ff88" />
                <rect x="20" y="60" width="40" height="12" rx="2" fill="#00ff88" />
            </g>
            <rect x="20" y="60" width="20" height="20" rx="3" fill="#4CAF50" opacity="0.2" transform="rotate(-15 30 70)" />
            <rect x="155" y="30" width="16" height="16" rx="2" fill="#00ff88" opacity="0.3" transform="rotate(20 163 38)" />
            <rect x="140" y="110" width="24" height="24" rx="3" fill="#4CAF50" opacity="0.15" transform="rotate(10 152 122)" />
            <line x1="0" y1="80" x2="200" y2="80" stroke="#00ff88" strokeOpacity="0.06" strokeWidth="1" />
            <line x1="100" y1="0" x2="100" y2="160" stroke="#00ff88" strokeOpacity="0.06" strokeWidth="1" />
        </svg>
    ),
    Cpu: () => (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="vps-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            <rect width="200" height="160" fill="url(#vps-bg)" />
            <g transform="translate(55,25)">
                <rect x="10" y="10" width="70" height="70" rx="8" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5" />
                <rect x="25" y="25" width="40" height="40" rx="4" fill="#3b82f6" opacity="0.3" />
                <text x="32" y="51" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="monospace">CPU</text>
                <line x1="22" y1="10" x2="22" y2="0" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="44" y1="10" x2="44" y2="0" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="66" y1="10" x2="66" y2="0" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="22" y1="80" x2="22" y2="90" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="44" y1="80" x2="44" y2="90" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="66" y1="80" x2="66" y2="90" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="10" y1="22" x2="0" y2="22" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="10" y1="44" x2="0" y2="44" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="10" y1="66" x2="0" y2="66" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="80" y1="22" x2="90" y2="22" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="80" y1="44" x2="90" y2="44" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="80" y1="66" x2="90" y2="66" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.6" />
            </g>
            <line x1="160" y1="50" x2="190" y2="50" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="2" />
            <line x1="165" y1="60" x2="190" y2="60" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1.5" />
            <line x1="160" y1="70" x2="185" y2="70" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="1" />
        </svg>
    ),
    Zap: () => (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="vds-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#ef4444" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            <rect width="200" height="160" fill="url(#vds-bg)" />
            <polygon points="115,10 85,90 105,90 85,150 135,65 110,65 135,10" fill="#f59e0b" opacity="0.4" />
            <polygon points="115,10 85,90 105,90 85,150 135,65 110,65 135,10" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.8" />
            <polygon points="30,40 20,70 28,70 18,100 40,65 32,65 42,40" fill="#f59e0b" opacity="0.2" />
            <polygon points="170,60 162,82 168,82 160,104 178,78 171,78 178,60" fill="#f59e0b" opacity="0.15" />
        </svg>
    ),
    Server: () => (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="ded-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            <rect width="200" height="160" fill="url(#ded-bg)" />
            <g transform="translate(40,15)">
                {[0, 1, 2, 3].map(i => (
                    <g key={i} transform={`translate(0,${i * 32})`}>
                        <rect x="0" y="0" width="120" height="26" rx="4" fill="#8b5cf6" opacity={0.12 + i * 0.04} stroke="#8b5cf6" strokeOpacity="0.3" strokeWidth="1" />
                        <circle cx="10" cy="13" r="4" fill={i === 0 ? "#22c55e" : "#8b5cf6"} opacity="0.8" />
                        <rect x="22" y="8" width="60" height="4" rx="2" fill="#8b5cf6" opacity="0.4" />
                        <rect x="22" y="14" width="40" height="4" rx="2" fill="#8b5cf6" opacity="0.25" />
                        <rect x="100" y="8" width="14" height="10" rx="2" fill="#8b5cf6" opacity="0.4" />
                    </g>
                ))}
            </g>
            <line x1="172" y1="20" x2="172" y2="140" stroke="#8b5cf6" strokeOpacity="0.15" strokeWidth="1" />
            <circle cx="172" cy="50" r="6" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeOpacity="0.5" strokeWidth="1" />
            <circle cx="172" cy="80" r="6" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeOpacity="0.5" strokeWidth="1" />
            <circle cx="172" cy="110" r="6" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
    ),
    Layout: () => (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="web-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06b6d4" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            <rect width="200" height="160" fill="url(#web-bg)" />
            <g transform="translate(30,18)">
                <rect x="0" y="0" width="140" height="115" rx="8" fill="#06b6d4" opacity="0.1" stroke="#06b6d4" strokeOpacity="0.4" strokeWidth="1.5" />
                <rect x="0" y="0" width="140" height="22" rx="8" fill="#06b6d4" opacity="0.2" />
                <circle cx="12" cy="11" r="4" fill="#ef4444" opacity="0.7" />
                <circle cx="26" cy="11" r="4" fill="#f59e0b" opacity="0.7" />
                <circle cx="40" cy="11" r="4" fill="#22c55e" opacity="0.7" />
                <rect x="55" y="6" width="70" height="10" rx="5" fill="#06b6d4" opacity="0.2" />
                <rect x="8" y="32" width="124" height="16" rx="3" fill="#06b6d4" opacity="0.3" />
                <rect x="8" y="56" width="58" height="50" rx="3" fill="#06b6d4" opacity="0.2" />
                <rect x="74" y="56" width="58" height="22" rx="3" fill="#06b6d4" opacity="0.15" />
                <rect x="74" y="84" width="58" height="22" rx="3" fill="#06b6d4" opacity="0.1" />
            </g>
        </svg>
    ),
    CS2: () => (
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="cs2-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#ef4444" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#f59e0b" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            <rect width="200" height="160" fill="url(#cs2-bg)" />
            <g transform="translate(100,80)">
                <circle cx="0" cy="0" r="45" stroke="#ef4444" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
                <circle cx="0" cy="0" r="28" stroke="#ef4444" strokeOpacity="0.3" strokeWidth="1" fill="none" />
                <line x1="-55" y1="0" x2="-33" y2="0" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.8" />
                <line x1="33" y1="0" x2="55" y2="0" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.8" />
                <line x1="0" y1="-55" x2="0" y2="-33" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.8" />
                <line x1="0" y1="33" x2="0" y2="55" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.8" />
                <circle cx="0" cy="0" r="5" fill="#ef4444" opacity="0.9" />
            </g>
            <path d="M10,10 L30,10 M10,10 L10,30" stroke="#ef4444" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M190,10 L170,10 M190,10 L190,30" stroke="#ef4444" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M10,150 L30,150 M10,150 L10,130" stroke="#ef4444" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M190,150 L170,150 M190,150 L190,130" stroke="#ef4444" strokeOpacity="0.3" strokeWidth="2" />
        </svg>
    ),
}

const DefaultVisual = () => (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="200" height="160" fill="#3b82f6" fillOpacity="0.1" />
        <circle cx="100" cy="80" r="40" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="100" cy="80" r="20" fill="#3b82f6" fillOpacity="0.3" />
    </svg>
)

export default function Services({ title, subtitle, items = [] }) {
    const services = items.length > 0 ? items : defaultServices

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section id="services" className="services-section relative overflow-hidden">
            <div className="mesh-gradient opacity-10 !-z-10"></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{title || "Naše Služby"}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {subtitle || "Špičková infrastruktura pro vaše projekty. Vyberte si z naší nabídky herních i dedikovaných řešení."}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="services-grid"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="service-card group glass-morphism-v2 border-trace border-none overflow-hidden"
                        >
                            <div className="noise-overlay opacity-[0.03]"></div>
                            <div className="service-img relative h-52 flex items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-transparent">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
                                <div className="relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                                    {React.createElement(ServiceVisuals[service.icon] || DefaultVisual)}
                                </div>

                                <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-primary/30 group-hover:w-4 group-hover:h-4 transition-all duration-500"></div>
                                <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-primary/30 group-hover:w-4 group-hover:h-4 transition-all duration-500"></div>
                            </div>

                            <div className="service-body relative z-10 p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                                    <span className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/10">v1.2</span>
                                </div>
                                <p className="desc text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Cena od</span>
                                        <span className="text-xl font-bold text-primary">{service.price}</span>
                                    </div>
                                    <Link href={service.link} className="view-link group/link flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
                                        Zjistit více
                                        <Icons.ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
