import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '../ui/Icons'
import clsx from 'clsx'

const faqs = [
    {
        question: "Jak dlouho trvá aktivace serveru?",
        answer: "Aktivace probíhá okamžitě po přijetí platby. U většiny platebních metod je to otázka několika sekund."
    },
    {
        question: "Jakou DDoS ochranu používáte?",
        answer: "Používáme enterprise řešení s kapacitou přes 12 Tbps, které dokáže filtrovat i ty nejkomplexnější útoky na aplikační vrstvě."
    },
    {
        question: "Je možné kdykoliv změnit tarif?",
        answer: "Ano, tarif můžete upgradovat nebo downgradovat kdykoliv přímo v klientské administraci. Rozdíl v ceně se vypočítá automaticky."
    },
    {
        question: "Zálohujete moje data?",
        answer: "Ano, provádíme automatické denní zálohy všech serverů. Zálohy jsou uchovávány po dobu 7 dnů v oddělené lokalitě."
    },
    {
        question: "Přecházím od konkurence, pomůžete mi?",
        answer: "Velice rádi vám pomůžeme s přesunem všech dat. Navíc dostanete u nás hosting zdarma na dobu, kterou máte zaplacenou u konkurenčního hostingu."
    },
    {
        question: "Jaké platební metody přijímáte?",
        answer: "Naše klientská zóna umí platbu kartou a bankovní převod, pokud však chcete platit jinak, není problém! Kontaktujte nás a domluvíme se."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    }

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Často kladené otázky</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Vše co potřebujete vědět o našem hostingu na jednom místě.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-background-secondary/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-lg pr-8">{faq.question}</span>
                                <div className={clsx(
                                    "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-500",
                                    openIndex === index && "rotate-180 bg-primary/20"
                                )}>
                                    <Icons.ChevronDown className="w-5 h-5 text-primary" />
                                </div>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}