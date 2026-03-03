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
            
            {/* JEDNOTNÉ POZADÍ PRO CELÝ WEB */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                {/* Hvězdné vrstvy - pro dark mode */}
                <div className="stars-small dark:block hidden"></div>
                <div className="stars-medium dark:block hidden"></div>
                <div className="stars-large dark:block hidden"></div>
                <div className="tech-grid dark:block hidden"></div>
                
                {/* Padající hvězdy - pro dark mode */}
                <div className="shooting-star dark:block hidden"></div>
                <div className="shooting-star dark:block hidden"></div>
                <div className="shooting-star dark:block hidden"></div>
                
                {/* Původní liquid bloby - pro light mode */}
                <div className="liquid-blob top-[-10%] left-[-10%] scale-150 dark:hidden"></div>
                <div className="liquid-blob-secondary bottom-[-10%] right-[-10%] scale-150 dark:hidden"></div>
            </div>
            
            <main className="relative z-10 min-h-screen">{children}</main>
            <Footer />
        </>
    )
}