import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import PricingGrid from '@/components/pricing/PricingGrid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getMinecraftPlans } from '@/data/pricing'

export default function MinecraftPage({ plans }) {
    return (
        <Layout title="Minecraft Hosting | FirtCore">
            <Hero
                title="Minecraft Hosting"
                subtitle="Optimální výkon pro Minecraft servery všech velikostí"
            />
            <PricingGrid plans={plans} category="minecraft" />
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const plans = getMinecraftPlans()
    
    return {
        props: {
            plans,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}