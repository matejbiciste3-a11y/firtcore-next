import Navbar from './Navbar'
import Footer from './Footer'
import Loader from '../ui/Loader'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Layout({ children, title = 'FirtCore.cz | Profesionální herní hosting' }) {
    
    useEffect(() => {
        // Přidáme třídy pro dark mode pozadí
        const handleThemeChange = () => {
            const isDark = document.documentElement.classList.contains('dark')
            // Tato logika se spustí automaticky díky CSS třídám
        }

        // Sledování změny theme
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    handleThemeChange()
                }
            })
        })

        observer.observe(document.documentElement, { attributes: true })
        
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Enterprise-grade herní servery s pokročilou DDoS ochranou, nulovou latencí v ČR a podporou, která řeší problémy dřív, než nastanou." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Loader />
            <Navbar />
            
            {/* Nové dark mode pozadí - vesmírné prvky */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                {/* Hvězdné vrstvy - viditelné pouze v dark mode */}
                <div className="stars-small dark:block hidden"></div>
                <div className="stars-medium dark:block hidden"></div>
                <div className="stars-large dark:block hidden"></div>
                <div className="tech-grid dark:block hidden"></div>
                
                {/* Padající hvězdy - pouze v dark mode */}
                <div className="shooting-star dark:block hidden"></div>
                <div className="shooting-star dark:block hidden"></div>
                <div className="shooting-star dark:block hidden"></div>
                
                {/* Původní liquid bloby - pouze pro light mode */}
                <div className="liquid-blob top-[-10%] left-[-10%] scale-150 dark:hidden"></div>
                <div className="liquid-blob-secondary bottom-[-10%] right-[-10%] scale-150 dark:hidden"></div>
            </div>
            
            <main className="relative z-10 min-h-screen">{children}</main>
            <Footer />
        </>
    )
}