import Navbar from './Navbar'
import Footer from './Footer'
import Loader from '../ui/Loader'
import Head from 'next/head'

export default function Layout({ children, title = 'FirtCore.cz | Profesionální herní hosting' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Enterprise-grade herní servery s pokročilou DDoS ochranou, nulovou latencí v ČR a podporou, která řeší problémy dřív, než nastanou." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Loader />
            <Navbar />
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="liquid-blob top-[-10%] left-[-10%] scale-150"></div>
                <div className="liquid-blob-secondary bottom-[-10%] right-[-10%] scale-150"></div>
            </div>
            <main className="relative z-10 min-h-screen">{children}</main>
            <Footer />
        </>
    )
}