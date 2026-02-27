import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

export default function GDPR() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 !-z-10">
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6 tracking-wider uppercase">
                            Ochrana soukromí
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Zásady ochrany osobních údajů</h1>
                        <p className="text-muted-foreground mb-2 text-lg">Platné od 27. 2. 2026 | V souladu s nařízením GDPR (EU) 2016/679</p>
                        <div className="text-sm text-muted-foreground mb-12 space-y-1">
                            <p><strong>Správce:</strong> Patrik Vlček, IČO: 23266023</p>
                            <p><strong>Sídlo:</strong> Na Škvárovně 522, 549 32 Velké Poříčí, Česká republika</p>
                            <p><strong>Email:</strong> <a href="mailto:support@firtcore.cz" className="text-purple-400">support@firtcore.cz</a></p>
                        </div>

                        <div className="space-y-8 legal-content">

                            <section>
                                <h2>1. Správce osobních údajů</h2>
                                <p>Správcem osobních údajů je fyzická osoba <strong>Patrik Vlček</strong>, provozující portál FirtCore.cz, IČO: 23266023, se sídlem Na Škvárovně 522, 549 32 Velké Poříčí, Česká republika, podnikající jako osoba samostatně výdělečně činná (dále jen „Správce").</p>
                                <p>Správce vás tímto v souladu s čl. 12 GDPR informuje o zpracování vašich osobních údajů a o vašich právech.</p>
                            </section>

                            <section>
                                <h2>2. Zpracovávané osobní údaje</h2>
                                <p>Ve smyslu nařízení Evropského parlamentu a Rady (EU) č. 2016/679 (GDPR) správce zpracovává tyto osobní údaje:</p>
                                <ul>
                                    <li>Jméno a příjmení</li>
                                    <li>IP adresa</li>
                                    <li>E-mail</li>
                                    <li>Adresa</li>
                                    <li>Telefonní číslo (není-li stanoveno jinak)</li>
                                </ul>
                                <p>Výše uvedené osobní údaje jsou nutné pro zpracování objednávek a další plnění ze smlouvy (čl. 6 odst. 1 písm. b) GDPR). Správce zpracovává tyto údaje rovněž za účelem evidence smlouvy a případného uplatnění a obrany práv a povinností smluvních stran.</p>
                            </section>

                            <section>
                                <h2>3. Doba uchovávání osobních údajů</h2>
                                <p>Osobní údaje jsou uchovávány po dobu <strong>10 let</strong> od realizace poslední části plnění dle smlouvy, nepožaduje-li jiný právní předpis uchování delší (čl. 6 odst. 1 písm. c) a f) GDPR).</p>
                            </section>

                            <section>
                                <h2>4. Obchodní sdělení</h2>
                                <p>Na e-mailovou adresu, případně telefonní číslo mohou být zákazníkovi zasílány novinky a jiná obchodní sdělení dle § 7 odst. 3 zákona č. 480/2004 Sb., pokud je zákazník neodmítne. Tato sdělení lze kdykoliv odhlásit.</p>
                            </section>

                            <section>
                                <h2>5. Vaše práva jako subjektu údajů</h2>
                                <p>Dle nařízení GDPR máte tato práva:</p>
                                <ul>
                                    <li>Zrušit zasílání obchodních sdělení</li>
                                    <li>Vznést námitku proti zpracování na základě oprávněného zájmu správce</li>
                                    <li>Požadovat informaci o zpracovávaných osobních údajích</li>
                                    <li>Požadovat přístup k údajům, jejich opravu, aktualizaci nebo omezení zpracování</li>
                                    <li>Požadovat výmaz osobních údajů (není-li v rozporu s právními předpisy)</li>
                                    <li>Právo na přenositelnost údajů</li>
                                    <li>Požadovat kopii zpracovávaných osobních údajů</li>
                                    <li>Právo na účinnou soudní ochranu</li>
                                    <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
                                </ul>
                                <p>Svá práva uplatňujte na: <a href="mailto:support@firtcore.cz">support@firtcore.cz</a></p>
                            </section>

                            <section>
                                <h2>6. Cookies</h2>
                                <p>Provozovatel webu firtcore.cz užívá cookies za účelem:</p>
                                <ul>
                                    <li>Měření návštěvnosti a vytváření statistik</li>
                                    <li>Základní funkčnosti webových stránek</li>
                                </ul>
                                <p>Zpracování cookies je možné na základě oprávněného zájmu správce (čl. 6 odst. 1 písm. f) GDPR). Návštěvník může nastavit prohlížeč tak, aby sbírání údajů neumožňoval, nebo vznést námitku dle čl. 21 GDPR. Cookies nezbytné pro funkčnost webu jsou uchovávány po dobu nezbytně nutnou.</p>
                            </section>

                            <section>
                                <h2>7. Stížnosti</h2>
                                <p>Máte právo podat stížnost u dozorového úřadu – <strong>Úřad pro ochranu osobních údajů (ÚOOÚ)</strong>, sídlem Pplk. Sochora 27, 170 00 Praha 7, web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>.</p>
                            </section>

                        </div>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
                .legal-content section {
                    padding: 2rem;
                    border-radius: 1rem;
                    background: hsl(var(--color-background-secondary) / 0.5);
                    border: 1px solid hsl(var(--color-neutral) / 0.1);
                }
                .legal-content h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: hsl(220 70% 70%);
                    margin-bottom: 1rem;
                }
                .legal-content p {
                    color: hsl(var(--color-foreground) / 0.8);
                    line-height: 1.75;
                    margin-bottom: 0.75rem;
                }
                .legal-content ul {
                    list-style: disc;
                    padding-left: 1.5rem;
                    color: hsl(var(--color-foreground) / 0.7);
                    line-height: 1.75;
                    margin-bottom: 0.75rem;
                }
                .legal-content a {
                    color: hsl(220 70% 70%);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
            `}</style>
        </Layout>
    )
}
