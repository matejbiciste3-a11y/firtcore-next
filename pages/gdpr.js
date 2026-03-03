import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function GDPR() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 !-z-10">
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6 tracking-wider uppercase">
                            Ochrana soukromí
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Zásady ochrany osobních údajů</h1>
                        <p className="text-muted-foreground mb-2 text-lg">Platné od 27. 2. 2026 | V souladu s nařízením GDPR (EU) 2016/679</p>
                        <div className="text-sm text-muted-foreground mb-12 space-y-1">
                            <p><strong>Správce:</strong> Patrik Vlček, IČO: 23266023</p>
                            <p><strong>Sídlo:</strong> Na Škvárovně 522, 549 32 Velké Poříčí, Česká republika</p>
                            <p><strong>Email:</strong> <a href="mailto:support@firtcore.cz" className="text-purple-400">support@firtcore.cz</a></p>
                        </div>

                        <div className="space-y-8 legal-content">
                            <section>
                                <h2>1. Správce osobních údajů</h2>
                                <p>Správcem osobních údajů je fyzická osoba <strong>Patrik Vlček</strong>, provozující portál FirtCore.cz, IČO: 23266023, se sídlem Na Škvárovně 522, 549 32 Velké Poříčí, Česká republika, podnikající jako osoba samostatně výdělečně činná (dále jen „Správce").</p>
                                <p>Správce vás tímto v souladu s čl. 12 GDPR informuje o zpracování vašich osobních údajů a o vašich právech.</p>
                            </section>
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