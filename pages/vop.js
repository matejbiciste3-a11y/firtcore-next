import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function VOP() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 !-z-10">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-bold mb-6 tracking-wider uppercase">
                            Právní dokumenty
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Všeobecné obchodní podmínky</h1>
                        <p className="text-muted-foreground mb-2 text-lg">Platné od 27. 2. 2026 | FirtCore.cz</p>
                        <div className="text-sm text-muted-foreground mb-12 space-y-1">
                            <p><strong>Provozovatel:</strong> Patrik Vlček, IČO: 23266023</p>
                            <p><strong>Sídlo:</strong> Na Škvárovně 522, 549 32 Velké Poříčí, Česká republika</p>
                            <p><strong>Email:</strong> <a href="mailto:support@firtcore.cz" className="text-brand">support@firtcore.cz</a></p>
                        </div>

                        <div className="space-y-8 legal-content">
                            <section>
                                <h2>1. Základní ustanovení</h2>
                                <p>Tyto všeobecné obchodní podmínky (dále jen „obchodní podmínky") jsou vydané dle § 1751 a násl. zákona č. 89/2012 Sb., občanský zákoník.</p>
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