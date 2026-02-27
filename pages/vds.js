import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import CustomSolution from '@/components/sections/CustomSolution'

export default function VDSPage() {
    return (
        <Layout title="VDS Hosting | FirtCore">
            <Hero
                title="VDS Hosting"
                subtitle="Výkonné dedikované zdroje pro náročné projekty"
                image="/images/vds-hero.webp"
            />
            <CustomSolution />
        </Layout>
    )
}