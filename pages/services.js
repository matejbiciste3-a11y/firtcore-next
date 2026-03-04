import Layout from '@/components/layout/Layout'
import Services from '@/components/sections/Services'
import Reviews from '@/components/sections/Reviews'
import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { services } from '@/data/services'

export default function ServicesPage() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 !-z-10 overflow-hidden">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wider uppercase">
                            Naše Portfolio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Kompletní nabídka <span className="text-gradient">Služeb</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Od nejvýkonnějšího herního hostingu po enterprise dedikovaná řešení.
                            Vše s důrazem na maximální výkon, stabilitu a špičkovou podporu.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Services
                title="Vše co potřebujete na jednom místě"
                subtitle="Prozkoumejte naše hostingová řešení navržená pro hráče, vývojáře i firmy."
                items={services}
            />

            <Reviews />

            <section className="py-20 relative overflow-hidden">
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="glass-morphism-v2 p-12 rounded-[2rem] text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Nenašli jste co jste hledali?</h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Potřebujete individuální konfiguraci nebo speciální řešení na míru?
                            Náš tým je připraven vám pomoci s jakýmkoliv požadavkem.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="btn-primary">Kontaktujte podporu</button>
                            <button className="btn-secondary">Individuální poptávka</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}