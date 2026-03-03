import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import PricingGrid from '@/components/pricing/PricingGrid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getVPSPlans } from '@/data/pricing'

export default function VPSPage({ plans }) {
    return (
        <Layout title="VPS Hosting | FirtCore">
            <Hero
                title="VPS Hosting"
                subtitle="Flexibilní virtuální servery s vysokým výkonem"
            />
            <PricingGrid plans={plans} category="vps" />
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const plans = getVPSPlans()
    return {
        props: {
            plans,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}