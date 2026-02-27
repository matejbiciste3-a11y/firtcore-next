import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import GridBackground from '../ui/GridBackground'
import Image from 'next/image'
import { Icons } from '../ui/Icons'

export default function Hero({
    title = (
        <>
            Výkon, na který<br />
            <span className="gradient-text">se můžete spolehnout</span>
        </>
    ),
    subtitle = "Enterprise-grade herní servery s pokročilou DDoS ochranou, nulovou latencí v ČR a podporou, která řeší problémy dřív, než nastanou.",
    image
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section className="hero">
            <GridBackground />
            <div className="mesh-gradient opacity-20"></div>
            <div className="noise-overlay"></div>

            {/* Premium Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/15 blur-[100px] rounded-full"
                />
            </div>

            <div className="hero-grid">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col relative z-20"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <Badge variant="primary" withDot className="glass-morphism-v2 border-primary/20">
                            Všechny služby v provozu • 99.99% uptime
                        </Badge>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
                            {title}
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero-desc text-xl md:text-2xl text-muted-foreground/90 mb-10 max-w-xl leading-relaxed">
                        {subtitle}
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-cta flex items-center gap-6">
                        <Button href="#services" variant="primary" size="large" icon="arrow" className="hover-glow shadow-2xl shadow-primary/40">
                            Začít hned
                        </Button>
                        <Button href="#features" variant="outline" size="large" icon="chart" className="backdrop-blur-sm">
                            Prozkoumat
                        </Button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="trust-badges mt-12 flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <Badge variant="success" icon="check" className="bg-success/5 border-success/10">Špičkový výkon</Badge>
                        <Badge variant="success" icon="check" className="bg-success/5 border-success/10">Vysoká dostupnost</Badge>
                        <Badge variant="success" icon="check" className="bg-success/5 border-success/10">24/7 Podpora</Badge>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-illustration relative"
                >
                    <div className="glow glow-1 !opacity-30"></div>
                    <div className="glow glow-3 !opacity-20 !blur-[120px]"></div>

                    <div className="hero-image-wrap animate-float relative z-10">
                        <div className="relative w-full aspect-square flex items-center justify-center glass-morphism-v2 rounded-[2.5rem] overflow-hidden group">
                            {/* Tech-Core Original Illustration */}
                            <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                {/* Rotating Outer Rings */}
                                <div className="absolute inset-0 border-[3px] border-primary/10 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-4 border-[2px] border-secondary/20 rounded-full animate-reverse-spin"></div>
                                <div className="absolute inset-8 border border-primary/30 rounded-full animate-spin-slow opacity-50 border-dashed"></div>

                                {/* Inner Core Hexagon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="relative z-10 w-32 h-32 bg-primary/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center transition-transform duration-700 shadow-[0_0_50px_rgba(var(--color-primary),0.3)]"
                                >
                                    <div className="absolute inset-0 bg-primary/20 animate-pulse rounded-2xl"></div>
                                    <Icons.Zap className="w-16 h-16 text-primary shadow-2xl shadow-primary/20" />
                                </motion.div>

                                {/* Floating Modules */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 right-1/4 w-12 h-12 bg-background-secondary/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-xl"
                                >
                                    <Icons.Shield className="w-6 h-6 text-primary" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-8 left-4 w-14 h-14 bg-background-secondary/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-xl"
                                >
                                    <Icons.Cpu className="w-7 h-7 text-secondary" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-1/4 right-0 w-10 h-10 bg-background-secondary/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-xl"
                                >
                                    <Icons.Network className="w-5 h-5 text-primary" />
                                </motion.div>

                                {/* Data Streams (Pulse Lines) */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"></div>
                                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse"></div>
                            </div>

                            {/* Background Overlay for Depth */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent)]"></div>
                            <div className="noise-overlay !opacity-[0.05]"></div>
                        </div>

                        {/* Shadow underneath */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-primary/20 blur-3xl opacity-50 rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
