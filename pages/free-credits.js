import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Icons } from '@/components/ui/Icons'
import Card from '@/components/ui/Card'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function FreeCreditsPage() {
    const benefits = [
        {
            icon: Icons.Gift,
            title: "15 kreditů",
            description: "Za každého pozvaného uživatele získáte 15 kreditů zdarma."
        },
        {
            icon: Icons.TrendingUp,
            title: "10% provize",
            description: "Až 10% provize z každé platby od pozvaného uživatele."
        },
        {
            icon: Icons.BarChart2,
            title: "Podrobné statistiky",
            description: "Přehled prokliků, registrací a získaných provizí v reálném čase."
        }
    ]

    const howItWorks = [
        {
            number: "1",
            title: "Registrace",
            description: "Vytvořte si účet na FirtCore.cz a získejte svůj unikátní affiliate kód."
        },
        {
            number: "2",
            title: "Sdílení",
            description: "Sdílejte svůj odkaz s přáteli nebo komunitou na sociálních sítích."
        },
        {
            number: "3",
            title: "Odměna",
            description: "Získejte 15 kreditů za každého pozvaného a 10% provizi z jeho plateb."
        }
    ]

    const stats = [
        { value: '15', label: 'Kreditů', subtext: 'zadarmo za pozvaného uživatele' },
        { value: '10', suffix: '%', label: 'Provize', subtext: 'Z každé platby' },
        { value: '10+', label: 'Partnerů', subtext: 'Aktivních' },
        { value: '24/7', label: 'Podpora', subtext: 'Pro partnery' },
    ]

    const contests = [
        {
            icon: Icons.Gift,
            title: "Kredit zadarmo",
            description: "Pravidelné soutěže o kredity do vašeho účtu"
        },
        {
            icon: Icons.Server,
            title: "Hosting zadarmo",
            description: "Šance vyhrát hosting na několik měsíců zadarmo"
        },
        {
            icon: Icons.Shield,
            title: "Exkluzivní slevy",
            description: "Speciální slevy a promo akce výhradně pro členy"
        }
    ]

    const tiers = [
        {
            name: "Affiliate Partner",
            description: "Doporučeno pro začátečníky",
            features: [
                "10% z každého dobití od pozvaného",
                "Statistiky prokliků, registrací a kreditů",
                "Extra kredit bez nutnosti platby",
                "15 kreditů zadarmo za pozvaného uživatele!"
            ],
            popular: true
        },
        {
            name: "Business Partner",
            description: "Pro větší projekty",
            features: [
                "1000+ možností spolupráce",
                "Vlastní role na discordu",
                "Speciální nabídky a podmínky",
                "Seriózní přístup a smlouvy"
            ],
            popular: false
        }
    ]

    const affiliateFeatures = [
        {
            icon: Icons.TrendingUp,
            title: "10% provize z každé platby",
            description: "Získejte 10% z každé platby, kterou osoba pozvaná přes váš odkaz provedla."
        },
        {
            icon: Icons.BarChart2,
            title: "Podrobné statistiky",
            description: "Přehled prokliků, registrací a získaných provizí v reálném čase."
        },
        {
            icon: Icons.Gift,
            title: "15 kreditů bonus",
            description: "Okamžitý bonus 15 kreditů za každého pozvaného uživatele."
        }
    ]

    const influencerFeatures = [
        { icon: Icons.TrendingUp, text: "Provize" },
        { icon: Icons.Users, text: "Propagace" },
        { icon: Icons.Gift, text: "Bonusy" },
        { icon: Icons.Shield, text: "Podpora" }
    ]

    return (
        <Layout title="15 kreditů zdarma a affiliate program | FirtCore.cz">
            {/* Hero sekce */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge variant="primary" className="mb-6">
                                Časově omezená nabídka • 15 Kč kreditů zadarmo
                            </Badge>
                            
                            <h1 className="text-5xl lg:text-6xl font-black mb-6">
                                Ušetřete peníze, <span className="gradient-text">získejte kredit navíc</span>
                            </h1>
                            
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Za každého, kterého pozvete, získáte 15 kreditů a navíc až 10 % provizi z každé jeho platby. Jednoduchý způsob, jak vydělat na herním hostingu.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button href="https://client.firtcore.cz/register" variant="primary" size="large">
                                    Založit účet
                                </Button>
                                <Button href="https://discord.gg/J9WuqZZtJ4" variant="discord" size="large">
                                    Discord komunita
                                </Button>
                            </div>

                            {/* Statistiky */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-2xl font-bold text-brand">{stat.value}{stat.suffix || ''}</div>
                                        <div className="text-sm font-semibold">{stat.label}</div>
                                        <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass-morphism-v2 p-8 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-[60px]"></div>
                                
                                <Icons.Gift className="w-16 h-16 text-brand mb-6" />
                                
                                <h3 className="text-2xl font-bold mb-2">Váš affiliate kód</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Za pozvaného uživatele dostanete 15 kreditů!
                                </p>
                                
                                <div className="bg-background-secondary/50 rounded-xl p-4 mb-4 border border-white/5">
                                    <code className="text-2xl font-mono text-brand">IXfH9ykG</code>
                                </div>

                                <Button href="#" variant="outline" fullWidth>
                                    Zkopírovat kód
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Soutěže sekce */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Soutěže & <span className="gradient-text">Giveaway</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Připoj se na náš Discord a získej
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {contests.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-morphism-v2 p-6 rounded-2xl text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-brand" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <p className="text-muted-foreground mb-6">
                            Získejte hosting zadarmo účastí v našich pravidelných soutěžích a exkluzivních akcích pro členy komunity.
                        </p>
                        <Button href="https://discord.gg/J9WuqZZtJ4" variant="discord" size="large">
                            Připojit se na Discord
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Affiliate program sekce */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Vydělávejte s <span className="gradient-text">FirtCorem</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Vyberte si úroveň spolupráce, která vám vyhovuje
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 rounded-2xl ${
                                    tier.popular 
                                        ? 'glass-morphism-v2 border-brand/30 scale-105' 
                                        : 'glass-morphism-v2 border-white/5'
                                }`}
                            >
                                {tier.popular && (
                                    <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        NEJPOPULÁRNĚJŠÍ
                                    </Badge>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Icons.Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button 
                                    href="https://client.firtcore.cz/register" 
                                    variant={tier.popular ? 'primary' : 'outline'} 
                                    fullWidth
                                >
                                    Vybrat
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Affiliate features */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {affiliateFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-8 h-8 text-brand" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Influencer sekce */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black mb-6">
                                Jste <span className="gradient-text">influencer, streamer nebo máte větší herní projekt?</span>
                            </h2>
                            
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Spolupracujte s námi a rozvíjejte svou komunitu
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {influencerFeatures.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5 text-brand" />
                                        <span className="text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-muted-foreground mb-6">
                                Máte jiný nápad na spolupráci? Neváhejte nás kontaktovat! Vždy hledáme nové způsoby, jak rozvíjet herní komunitu.
                            </p>

                            <Button href="mailto:partner@firtcore.cz" variant="primary">
                                Kontaktovat nás
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-morphism-v2 p-8 rounded-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center">
                                        <Icons.Discord className="w-8 h-8 text-brand" />
                                    </div>
                                    <div>
                                        <div className="font-bold">Discord komunita</div>
                                        <div className="text-sm text-muted-foreground">50+ členů</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div>
                                        <div className="text-xl font-bold text-brand">50+</div>
                                        <div className="text-xs text-muted-foreground">Členů</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-brand">24/7</div>
                                        <div className="text-xs text-muted-foreground">Podpora</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-brand">10+</div>
                                        <div className="text-xs text-muted-foreground">Soutěží</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-brand">30+</div>
                                        <div className="text-xs text-muted-foreground">Právě online</div>
                                    </div>
                                </div>

                                <p className="text-xs text-muted-foreground">
                                    Partneři mají přístup k privátním kanálům a priority support
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ sekce */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Často kladené <span className="gradient-text">otázky</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Vše, co potřebujete vědět o affiliate programu
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* Zde můžeš importovat FAQ komponentu s affiliate otázkami */}
                    </div>
                </div>
            </section>
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