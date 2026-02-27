import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Image from 'next/image'
import { Icons } from '../ui/Icons'

export default function DiscordCommunity() {
    return (
        <section className="discord-section relative py-24 overflow-hidden">
            <div className="mesh-gradient opacity-10"></div>
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="discord-box glass-morphism-v2 p-12 lg:p-20 rounded-[2.5rem] relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>

                    <div className="discord-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="discord-content text-center lg:text-left">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl lg:text-5xl font-black mb-6 leading-tight"
                            >
                                Připojte se k více než{' '}
                                <span className="gradient-text">100 členům</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-xl text-muted-foreground/80 mb-10 leading-relaxed"
                            >
                                Okamžitá podpora, novinky jako první a aktivní komunita
                                hráčů i provozovatelů. Buďte součástí něčeho většího.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <Button
                                    href="https://discord.gg/firtcore"
                                    variant="discord"
                                    size="large"
                                    icon="discord"
                                    target="_blank"
                                    className="hover-glow shadow-2xl"
                                >
                                    Vstoupit do komunity
                                </Button>
                            </motion.div>
                        </div>

                        <div className="discord-visual relative flex justify-center lg:justify-end">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 bg-[#5865F2] rounded-[2rem] flex items-center justify-center shadow-2xl shadow-[#5865F2]/40"
                            >
                                <Icons.Discord className="w-24 h-24 lg:w-32 lg:h-32 text-white drop-shadow-xl" />
                                <div className="absolute inset-0 bg-white/20 rounded-[2rem] animate-pulse"></div>
                            </motion.div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-secondary/20 rounded-full animate-reverse-spin"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}