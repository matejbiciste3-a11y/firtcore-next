import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '../ui/Icons'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const reviews = [
    {
        id: 1,
        name: "Tomáš Novák",
        role: "Provozovatel Minecraft serveru",
        avatar: "/images/avatars/avatar1.jpg",
        rating: 5,
        text: "FirtCore má naprosto špičkový výkon. Server běží bez lagů i při 50 hráčích a DDoS ochrana funguje perfektně. Podpora vyřešila můj problém do 10 minut.",
        date: "Před 2 dny"
    },
    {
        id: 2,
        name: "Eliška Horáková",
        role: "Streamerka",
        avatar: "/images/avatars/avatar2.jpg",
        rating: 5,
        text: "Přesunula jsem sem svůj Minecraft server od konkurence a nelituji. Administrace je přehledná, aktivace okamžitá a cena je skvělá. Doporučuji všem!",
        date: "Před 1 týdnem"
    },
    {
        id: 3,
        name: "Jakub Svoboda",
        role: "Majitel herní sítě",
        avatar: "/images/avatars/avatar3.jpg",
        rating: 5,
        text: "Spolupracujeme s FirtCore už přes rok na několika projektech. Profesionální přístup, stabilní servery a vstřícné jednání. 10/10",
        date: "Před 2 týdny"
    },
    {
        id: 4,
        name: "Veronika Procházková",
        role: "YouTuberka",
        avatar: "/images/avatars/avatar4.jpg",
        rating: 4,
        text: "Skvělý hosting pro moje CS2 videa. Nízká latence, 128 tick funguje bez problémů. Jediné mínus je občasná údržba, ale vždy o ní dopředu informují.",
        date: "Před 3 týdny"
    },
    {
        id: 5,
        name: "Martin Dvořák",
        role: "Herní vývojář",
        avatar: "/images/avatars/avatar5.jpg",
        rating: 5,
        text: "Používáme VPS pro testování našich her. Výkon je skvělý, NVMe disky jsou opravdu rychlé a cena je nejlepší na trhu.",
        date: "Před 1 měsícem"
    },
    {
        id: 6,
        name: "Kateřina Veselá",
        role: "Komunitní manažerka",
        avatar: "/images/avatars/avatar6.jpg",
        rating: 5,
        text: "Discord podpora je neuvěřitelně rychlá. Každý problém řeší okamžitě a vždy s úsměvem. Komunita je přátelská a aktivní.",
        date: "Před 1 měsícem"
    }
]

export default function Reviews() {
    const { t } = useTranslation('common')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    const containerRef = useRef(null)
    const [maxIndex, setMaxIndex] = useState(0)

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1)
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2)
            } else {
                setVisibleCount(3)
            }
        }

        updateVisibleCount()
        window.addEventListener('resize', updateVisibleCount)
        return () => window.removeEventListener('resize', updateVisibleCount)
    }, [])

    useEffect(() => {
        setMaxIndex(Math.max(0, reviews.length - visibleCount))
        setCurrentIndex(prev => Math.min(prev, Math.max(0, reviews.length - visibleCount)))
    }, [visibleCount])

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(Math.max(index, 0), maxIndex))
    }

    // Hvězdičky pro hodnocení
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }

    return (
        <section className="reviews-section py-20 overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Co o nás říkají <span className="gradient-text">klienti</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Přes 500 spokojených zákazníků nám důvěřuje. Přečtěte si jejich zkušenosti.
                    </p>
                </motion.div>

                <div className="relative" ref={containerRef}>
                    {/* Carousel container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                                    style={{ flexBasis: `${100 / visibleCount}%` }}
                                >
                                    <div className="review-card glass-morphism-v2 p-6 rounded-2xl h-full flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-300">
                                        {/* Záhlaví s avatarem a jménem */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                                                {review.avatar ? (
                                                    <Image
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-primary/20 text-primary text-xl font-bold">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg">{review.name}</h3>
                                                <p className="text-sm text-muted-foreground">{review.role}</p>
                                            </div>
                                        </div>

                                        {/* Hodnocení hvězdičkami */}
                                        <div className="flex gap-1 mb-3">
                                            {renderStars(review.rating)}
                                        </div>

                                        {/* Text recenze */}
                                        <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                                            "{review.text}"
                                        </p>

                                        {/* Datum */}
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                            <span className="text-xs text-muted-foreground">{review.date}</span>
                                            <Icons.Check className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Šipky pro posouvání - zobrazí se jen když je potřeba */}
                    {maxIndex > 0 && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass-morphism-v2 flex items-center justify-center transition-all duration-300 ${
                                    currentIndex === 0 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-primary/10 hover:scale-110'
                                }`}
                                aria-label="Předchozí recenze"
                            >
                                <Icons.ChevronLeft className="w-6 h-6 text-primary" />
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={currentIndex === maxIndex}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass-morphism-v2 flex items-center justify-center transition-all duration-300 ${
                                    currentIndex === maxIndex 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-primary/10 hover:scale-110'
                                }`}
                                aria-label="Další recenze"
                            >
                                <Icons.ChevronRight className="w-6 h-6 text-primary" />
                            </button>
                        </>
                    )}
                </div>

                {/* Tečky pro navigaci - zobrazí se jen když je potřeba */}
                {maxIndex > 0 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? 'w-8 bg-primary'
                                        : 'bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Přejít na recenzi ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}