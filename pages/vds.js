import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import CustomSolution from '@/components/sections/CustomSolution'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function VDSPage() {
    return (
        <Layout title="VDS Hosting | FirtCore">
            <Hero
                title="VDS Hosting"
                subtitle="Výkonné dedikované zdroje pro náročné projekty"
            />
            <CustomSolution />
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