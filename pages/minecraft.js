import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import PricingGrid from '@/components/pricing/PricingGrid'
import { getMinecraftPlans } from '@/data/pricing'

export default function MinecraftPage({ plans }) {
    return (
        <Layout title="Minecraft Hosting | FirtCore">
            <Hero
                title="Minecraft Hosting"
                subtitle="Optimální výkon pro Minecraft servery všech velikostí"
                image="/images/games/minecraft-hero.webp"
            />
            <PricingGrid plans={plans} category="minecraft" />
        </Layout>
    )
}

export async function getStaticProps() {
    const plans = getMinecraftPlans()
    return {
        props: { plans },
    }
}