import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Icons } from '@/components/ui/Icons'
import Card from '@/components/ui/Card'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function FreeCreditsPage() {
    const { t } = useTranslation('free-credits')
    
    const benefits = [
        {
            icon: Icons.Gift,
            title: t('whyJoin.benefits.bonus.title'),
            description: t('whyJoin.benefits.bonus.desc')
        },
        {
            icon: Icons.TrendingUp,
            title: t('whyJoin.benefits.income.title'),
            description: t('whyJoin.benefits.income.desc')
        },
        {
            icon: Icons.BarChart2,
            title: t('whyJoin.benefits.stats.title'),
            description: t('whyJoin.benefits.stats.desc')
        }
    ]

    const howItWorks = [
        {
            number: "1",
            title: t('howItWorks.steps.register.title'),
            description: t('howItWorks.steps.register.desc')
        },
        {
            number: "2",
            title: t('howItWorks.steps.share.title'),
            description: t('howItWorks.steps.share.desc')
        },
        {
            number: "3",
            title: t('howItWorks.steps.reward.title'),
            description: t('howItWorks.steps.reward.desc')
        }
    ]

    const tiers = [
        {
            name: "Start",
            price: "0 Kč",
            features: [
                "Affiliate odkaz zdarma",
                "10% provize",
                "Statistiky online",
                "Bonus 125 Kč pro pozvané"
            ],
            popular: false
        },
        {
            name: "Partner",
            price: "Individuální",
            features: [
                "Vše ze Start",
                "Vyšší provize (až 20%)",
                "Vlastní promo kódy",
                "Priority podpora",
                "Společné soutěže"
            ],
            popular: true
        },
        {
            name: "Business",
            price: "Na míru",
            features: [
                "Vše z Partner",
                "Individuální podmínky",
                "Dedikovaný account manager",
                "Barter spolupráce",
                "Exkluzivní akce"
            ],
            popular: false
        }
    ]

    return (
        <Layout title="Kredit zdarma a affiliate program | FirtCore.cz">
            {/* Hero sekce */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="stars-small"></div>
                    <div className="stars-medium"></div>
                    <div className="tech-grid"></div>
                </div>

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Image
                                    src="/images/logo.png"
                                    alt="FirtCore.cz"
                                    width={48}
                                    height={48}
                                    className="rounded-xl"
                                />
                                <Badge variant="primary">
                                    {t('badge')}
                                </Badge>
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-black mb-6">
                                {t('title').replace(t('titleGradient'), '')}
                                <span className="gradient-text"> {t('titleGradient')}</span>
                            </h1>
                            
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {t('description')}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button href="https://client.firtcore.cz/register" variant="primary" size="large">
                                    Založit účet
                                </Button>
                                <Button href="https://discord.gg/firtcore" variant="discord" size="large">
                                    Discord komunita
                                </Button>
                            </div>

                            {/* Rychlá statistika */}
                            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-bold text-primary">125 Kč</div>
                                    <div className="text-sm text-muted-foreground">{t('stats.bonus')}</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">10%</div>
                                    <div className="text-sm text-muted-foreground">{t('stats.commission')}</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">24/7</div>
                                    <div className="text-sm text-muted-foreground">{t('stats.support')}</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass-morphism-v2 p-8 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
                                
                                <Icons.Gift className="w-16 h-16 text-primary mb-6" />
                                
                                <h3 className="text-2xl font-bold mb-4">{t('affiliateBox.title')}</h3>
                                
                                <div className="bg-background-secondary/50 rounded-xl p-4 mb-4 border border-white/5">
                                    <code className="text-2xl font-mono text-primary">{t('affiliateBox.code')}</code>
                                </div>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    {t('affiliateBox.description')}
                                </p>

                                <Button href="#" variant="outline" fullWidth>
                                    {t('buttons.copy')}
                                </Button>

                                {/* Malé statistiky */}
                                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/5">
                                    <div>
                                        <div className="text-xs text-muted-foreground">{t('affiliateBox.clicks')}</div>
                                        <div className="font-bold">1,247</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">{t('affiliateBox.registrations')}</div>
                                        <div className="font-bold">89</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">{t('affiliateBox.earnings')}</div>
                                        <div className="font-bold text-primary">1,850 Kč</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">{t('affiliateBox.conversion')}</div>
                                        <div className="font-bold">7.1%</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Proč se zapojit */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4">
                            {t('whyJoin.title')} <span className="gradient-text">{t('whyJoin.subtitle')}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t('whyJoin.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card
                                    icon={<benefit.icon className="w-6 h-6" />}
                                    title={benefit.title}
                                    description={benefit.description}
                                    className="h-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jak to funguje */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4">
                            {t('howItWorks.title')} <span className="gradient-text">{t('howItWorks.subtitle')}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t('howItWorks.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {howItWorks.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>

                                {/* Spojovací čára (kromě posledního) */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Úrovně spolupráce */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4">
                            Úrovně <span className="gradient-text">spolupráce</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Vyberte si, co vám nejlépe vyhovuje
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 rounded-2xl ${
                                    tier.popular 
                                        ? 'glass-morphism-v2 border-primary/30 scale-105' 
                                        : 'glass-morphism-v2 border-white/5'
                                }`}
                            >
                                {tier.popular && (
                                    <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        Nejoblíbenější
                                    </Badge>
                                )}

                                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                <div className="text-3xl font-black text-primary mb-6">{tier.price}</div>
                                
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Icons.Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                </div>
            </section>

            {/* Pro influencery */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black mb-6">
                                Jste <span className="gradient-text">influencer nebo streamer?</span>
                            </h2>
                            
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Spolupracujte s námi a rozvíjejte svou komunitu. Nabízíme individuální podmínky, 
                                exkluzivní promo kódy pro vaše sledující a možnost společných soutěží.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Icons.Shield className="w-5 h-5 text-primary" />
                                    <span className="text-sm">Vyšší provize</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icons.Users className="w-5 h-5 text-primary" />
                                    <span className="text-sm">Vlastní promo kódy</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icons.Zap className="w-5 h-5 text-primary" />
                                    <span className="text-sm">Priority podpora</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icons.Gift className="w-5 h-5 text-primary" />
                                    <span className="text-sm">Exkluzivní akce</span>
                                </div>
                            </div>

                            <Button href="mailto:partner@firtcore.cz" variant="primary">
                                Kontaktovat partner tým
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
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        <Icons.Discord className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-bold">Discord komunita</div>
                                        <div className="text-sm text-muted-foreground">150+ aktivních partnerů</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        "Privátní kanál pro partnery",
                                        "Pravidelné meetingy",
                                        "Sdílení zkušeností",
                                        "Podpora od community managementu"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Icons.Check className="w-4 h-4 text-primary" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['free-credits', 'common'])),
        },
    }
}