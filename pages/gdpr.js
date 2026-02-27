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
                        <p className="text-muted-foreground mb-12 text-lg">Platné od 1. 1. 2025 | V souladu s nařízením GDPR (EU) 2016/679</p>

                        <div className="space-y-10 legal-content">

                            <section>
                                <h2>1. Správce osobních údajů</h2>
                                <p>Správcem osobních údajů je:</p>
                                <ul>
                                    <li><strong>Jan Mikulčík</strong></li>
                                    <li>IČO: 72409002</li>
                                    <li>Sídlo: Družstevní 93, 763 26 Luhačovice</li>
                                    <li>E-mail: <a href="mailto:info@firtcore.cz">info@firtcore.cz</a></li>
                                    <li>Web: <a href="https://firtcore.cz" target="_blank" rel="noopener">firtcore.cz</a></li>
                                </ul>
                            </section>

                            <section>
                                <h2>2. Jaké osobní údaje zpracováváme</h2>
                                <p>V rámci poskytování služeb zpracováváme následující kategorie osobních údajů:</p>
                                <ul>
                                    <li><strong>Identifikační údaje:</strong> jméno a příjmení</li>
                                    <li><strong>Kontaktní údaje:</strong> e-mailová adresa</li>
                                    <li><strong>Adresní údaje:</strong> fakturační adresa</li>
                                    <li><strong>Platební údaje:</strong> údaje o provedených platbách (nikoliv čísla karet)</li>
                                    <li><strong>Technické údaje:</strong> IP adresa, údaje o objednaných službách</li>
                                    <li><strong>Komunikační záznamy:</strong> záznamy z podpory a e-mailové komunikace</li>
                                </ul>
                                <p>Nezpracováváme žádné zvláštní kategorie osobních údajů ve smyslu čl. 9 GDPR.</p>
                            </section>

                            <section>
                                <h2>3. Účely a právní základ zpracování</h2>
                                <p>Osobní údaje zpracováváme pro tyto účely:</p>
                                <ul>
                                    <li><strong>Plnění smlouvy</strong> (čl. 6 odst. 1 písm. b) GDPR) – poskytování objednaných služeb, fakturace</li>
                                    <li><strong>Plnění právní povinnosti</strong> (čl. 6 odst. 1 písm. c) GDPR) – vedení účetnictví, archivace dokladů</li>
                                    <li><strong>Oprávněný zájem</strong> (čl. 6 odst. 1 písm. f) GDPR) – ochrana před zneužitím, technická bezpečnost</li>
                                    <li><strong>Souhlas</strong> (čl. 6 odst. 1 písm. a) GDPR) – zasílání obchodních sdělení (pouze pokud jste souhlas udělili)</li>
                                </ul>
                            </section>

                            <section>
                                <h2>4. Doba uchovávání údajů</h2>
                                <p>Osobní údaje uchováváme po dobu nezbytně nutnou pro splnění účelu zpracování:</p>
                                <ul>
                                    <li>Smluvní dokumentace a fakturace: <strong>10 let</strong> dle zákona o účetnictví</li>
                                    <li>Záznamy o komunikaci s podporou: <strong>3 roky</strong></li>
                                    <li>Technické logy (IP adresy apod.): <strong>90 dní</strong></li>
                                    <li>Marketingové souhlasy: do odvolání souhlasu</li>
                                </ul>
                            </section>

                            <section>
                                <h2>5. Příjemci osobních údajů</h2>
                                <p>Vaše osobní údaje mohou být sdíleny s následujícími kategoriemi příjemců:</p>
                                <ul>
                                    <li>Poskytovatelé platebních služeb (pro zpracování plateb)</li>
                                    <li>Účetní a daňoví poradci (pro splnění zákonných povinností)</li>
                                    <li>Poskytovatelé IT infrastruktury (hosting, e-mail)</li>
                                </ul>
                                <p>Osobní údaje nepředáváme do třetích zemí mimo EU/EEA bez adekvátního zabezpečení.</p>
                            </section>

                            <section>
                                <h2>6. Vaše práva jako subjektu údajů</h2>
                                <p>Dle nařízení GDPR máte tato práva:</p>
                                <ul>
                                    <li><strong>Právo na přístup</strong> – právo získat potvrzení o tom, zda zpracováváme vaše osobní údaje, a přístup k nim</li>
                                    <li><strong>Právo na opravu</strong> – právo na opravu nepřesných nebo doplnění neúplných údajů</li>
                                    <li><strong>Právo na výmaz („být zapomenut")</strong> – právo na smazání osobních údajů za splnění zákonných podmínek</li>
                                    <li><strong>Právo na omezení zpracování</strong> – právo požadovat omezení zpracování</li>
                                    <li><strong>Právo na přenositelnost</strong> – právo obdržet své údaje ve strukturovaném, strojově čitelném formátu</li>
                                    <li><strong>Právo vznést námitku</strong> – právo vznést námitku proti zpracování na základě oprávněného zájmu</li>
                                    <li><strong>Právo odvolat souhlas</strong> – pokud je zpracování založeno na souhlasu, můžete jej kdykoliv odvolat</li>
                                </ul>
                                <p>Svá práva uplatňujte e-mailem na <a href="mailto:info@firtcore.cz">info@firtcore.cz</a>. Na vaši žádost odpovíme bez zbytečného odkladu, nejpozději do <strong>30 dnů</strong>.</p>
                            </section>

                            <section>
                                <h2>7. Cookies</h2>
                                <p>Naše webové stránky používají cookies (malé textové soubory ukládané do vašeho prohlížeče). Používáme:</p>
                                <ul>
                                    <li><strong>Nezbytné cookies</strong> – pro správné fungování webu a uživatelského účtu (nepotřebují souhlas)</li>
                                    <li><strong>Analytické cookies</strong> – pro anonymní analýzu návštěvnosti (pouze se souhlasem)</li>
                                </ul>
                                <p>Cookies můžete spravovat v nastavení svého prohlížeče.</p>
                            </section>

                            <section>
                                <h2>8. Zabezpečení osobních údajů</h2>
                                <p>K ochraně vašich osobních údajů používáme technická a organizační opatření, jako jsou šifrování dat (TLS/SSL), omezení přístupu k datům, pravidelné bezpečnostní audity a zálohování.</p>
                            </section>

                            <section>
                                <h2>9. Právo podat stížnost</h2>
                                <p>Máte právo podat stížnost u dozorového úřadu – <strong>Úřad pro ochranu osobních údajů (ÚOOÚ)</strong>, sídlem Pplk. Sochora 27, 170 00 Praha 7, web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>.</p>
                            </section>

                            <section>
                                <h2>10. Změny zásad</h2>
                                <p>Tyto zásady ochrany osobních údajů mohou být průběžně aktualizovány. O podstatných změnách vás budeme informovat e-mailem nebo oznámením na webu. Tyto zásady jsou platné od <strong>1. 1. 2025</strong>.</p>
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
