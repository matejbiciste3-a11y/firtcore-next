import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icons } from '../ui/Icons'
import { useTranslation } from 'next-i18next'

const reviews = [
    {
        id: 1,
        name: "maxinoo7",
        role: "Zákazník",
        rating: 9.5,
        text: "Koupil jsem si balicek discord bot - pro a za cenu 60kc/mesic si ja osobne myslím ze pomer cena/vykon absolutne OP. Zatim jsem nenarazil za zadnej problem za coz jsem rad ;) 9.5/10",
        date: "28. února 2026"
    },
    {
        id: 2,
        name: "Art Vik (art333vik)",
        role: "Zákazník",
        rating: 9,
        text: "Mal som tú možnosť si odskúšať váš minecraft hostong, a som veľmi spokojný! Helperi mi ho rýchlo pripravili a pomohli nastaviť, a samotný server bol uplne super: dosť možností, žiadne lagy alebo iné technické problémy. 9/10",
        date: "1. března 2026"
    }
]

export default function Reviews() {
    const { t } = useTranslation('common')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(2)
    const containerRef = useRef(null)
    const [maxIndex, setMaxIndex] = useState(0)

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1)
            } else {
                setVisibleCount(2)
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

    // Funkce pro vykreslení 10 hvězdiček podle skóre
    const renderStars = (score) => {
        return Array.from({ length: 10 }).map((_, i) => {
            const starValue = i + 1
            
            // Plná hvězda
            if (starValue <= score) {
                return (
                    <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                )
            }
            // Poloviční hvězda (když je skóre mezi)
            else if (starValue - 0.5 <= score && starValue > score) {
                return (
                    <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#d1d5db" />
                            </linearGradient>
                        </defs>
                        <path
                            fill={`url(#half-${i})`}
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                )
            }
            // Prázdná hvězda
            else {
                return (
                    <svg
                        key={i}
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                )
            }
        })
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
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 w-full sm:w-1/2 px-3"
                                    style={{ flexBasis: `${100 / visibleCount}%` }}
                                >
                                    <div className="review-card glass-morphism-v2 p-6 rounded-2xl h-full flex flex-col border border-white/5 hover:border-brand/30 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xl font-bold flex-shrink-0">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg">{review.name}</h3>
                                                <p className="text-sm text-muted-foreground">{review.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {renderStars(review.rating)}
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                                            "{review.text}"
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                            <span className="text-xs text-muted-foreground">{review.date}</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-sm font-bold text-brand">{review.rating}/10</span>
                                                <Icons.Check className="w-4 h-4 text-brand" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {maxIndex > 0 && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass-morphism-v2 flex items-center justify-center transition-all duration-300 ${
                                    currentIndex === 0 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-brand/10 hover:scale-110'
                                }`}
                                aria-label="Předchozí recenze"
                            >
                                <Icons.ChevronLeft className="w-6 h-6 text-brand" />
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={currentIndex === maxIndex}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass-morphism-v2 flex items-center justify-center transition-all duration-300 ${
                                    currentIndex === maxIndex 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:bg-brand/10 hover:scale-110'
                                }`}
                                aria-label="Další recenze"
                            >
                                <Icons.ChevronRight className="w-6 h-6 text-brand" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}