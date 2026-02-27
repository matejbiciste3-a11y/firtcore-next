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
        title: 'Garry\'s Mod',
        description: 'Stabilní servery pro GMod s podporou addonů',
        price: 'od 129 Kč/měs',
        features: ['FastDL', 'ULX', 'Wiremod'],
        icon: 'GMod',
        link: '/vds'
    }
]

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
                                    {React.createElement(GameIcons[service.icon] || GameIcons.Minecraft, {
                                        className: "w-24 h-24 text-primary drop-shadow-[0_0_20px_rgba(var(--color-primary),0.3)]"
                                    })}
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
