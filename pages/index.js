import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Statistics from '@/components/sections/Statistics'
import Technologies from '@/components/sections/Technologies'
import Services from '@/components/sections/Services'
import EnterpriseServices from '@/components/sections/EnterpriseServices'
import SpecialOffer from '@/components/sections/SpecialOffer'
import FAQ from '@/components/sections/FAQ'
import DiscordCommunity from '@/components/sections/DiscordCommunity'

// Import dat
import { services } from '@/data/services'
import { technologies } from '@/data/technologies'
import { faqItems } from '@/data/faq'

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Statistics />
            <Technologies technologies={technologies} />
            <Services services={services} />
            <EnterpriseServices />
            <SpecialOffer />
            <FAQ faq={faqItems} />
            <DiscordCommunity />
        </Layout>
    )
}