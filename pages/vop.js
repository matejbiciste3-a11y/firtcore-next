import Layout from '@/components/layout/Layout'
import { motion } from 'framer-motion'

export default function VOP() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 !-z-10">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wider uppercase">
                            Právní dokumenty
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Všeobecné obchodní podmínky</h1>
                        <p className="text-muted-foreground mb-2 text-lg">Platné od 27. 2. 2026 | FirtCore.cz</p>
                        <div className="text-sm text-muted-foreground mb-12 space-y-1">
                            <p><strong>Provozovatel:</strong> Patrik Vlček, IČO: 23266023</p>
                            <p><strong>Sídlo:</strong> Na Škvárovně 522, 549 32 Velké Poříčí, Česká republika</p>
                            <p><strong>Email:</strong> <a href="mailto:support@firtcore.cz" className="text-primary">support@firtcore.cz</a> &nbsp;|&nbsp; <strong>Telefon:</strong> 731 235 377</p>
                            <p><strong>Discord:</strong> <a href="https://discord.gg/firtcore-cz" target="_blank" rel="noopener noreferrer" className="text-primary">discord.gg/firtcore-cz</a> &nbsp;|&nbsp; <strong>Status:</strong> <a href="https://status.firtcore.cz" target="_blank" rel="noopener noreferrer" className="text-primary">status.firtcore.cz</a></p>
                        </div>

                        <div className="space-y-8 legal-content">

                            <section>
                                <h2>1. Základní ustanovení</h2>
                                <p>Tyto všeobecné obchodní podmínky (dále jen „obchodní podmínky") jsou vydané dle § 1751 a násl. zákona č. 89/2012 Sb., občanský zákoník.</p>
                                <p>Provozovatelem FirtCore.cz je fyzická osoba <strong>Patrik Vlček</strong>, IČ: 23266023, se sídlem Na Škvárovně 522, 549 32 Velké Poříčí, kontaktní email: support@firtcore.cz.</p>
                                <p>Práva a povinnosti smluvních stran ohledně práv z vadného plnění se řídí příslušnými obecně závaznými právními předpisy (zejména § 1914 až 1925, § 2099 až 2117 a § 2161 až 2174 občanského zákoníku a zákonem č. 634/1992 Sb.).</p>
                                <p>Znění obchodních podmínek může provozovatel měnit či doplňovat. Zákazník s uzavřením smlouvy prohlašuje, že se seznámil s funkcemi daných služeb a není oprávněn požadovat vrácení peněz s odůvodněním, že mu provedení či funkce dané služby nevyhovuje.</p>
                                <p>Zrušením služby se rozumí její pozastavení, ukončení a smazání dat. Pozastavením se rozumí dočasné zrušení dané služby a zamezení přístupu zákazníkovi (včetně souborů, databázového serveru a dalších služeb jako MySQL, data, logy apod.).</p>
                                <p>Pokud zákazník získá kupon s kredity navíc, nemá nárok na vrácení těchto peněz.</p>
                            </section>

                            <section>
                                <h2>2. Odpovědnost provozovatele</h2>
                                <p>Provozovatel neodpovídá za porušení práv k ochranným známkám, práv k obchodní firmě a jiných práv, kterého se dopustí zákazník užíváním služeb. Provozovatel nenese odpovědnost za jakoukoli škodu či ztrátu způsobenou zákazníkovi v důsledku používání jeho služby.</p>
                                <p>Provozovatel není oprávněn zasahovat do dat uložených zákazníkem, pokud mezi nimi není dohodnuto jinak. Tento zákaz neplatí při podezření z porušení smluvních podmínek, zneužití služby nebo porušení zákonů České republiky.</p>
                                <p>Poskytovatel si vyhrazuje právo na možné kontroly systému a jejich restartování či vypnutí v nejvyšší nouzi.</p>
                            </section>

                            <section>
                                <h2>3. Práva a povinnosti zákazníka</h2>
                                <p>Zákazník je povinen provést veškerá opatření k zamezení zneužití služeb. Zákazníkovi je zakázáno:</p>
                                <ul>
                                    <li>Nadměrně přetěžovat nebo pokoušet se poškodit služby</li>
                                    <li>Stahovat nelegální data (filmy, hry apod.)</li>
                                    <li>Spouštět skripty nebo programy pro těžbu kryptoměn</li>
                                    <li>Provozovat útoky typu DoS, DDoS a podobné</li>
                                    <li>Využívat služby k účelům v rozporu se zákony ČR nebo dobrými mravy</li>
                                    <li>Rozesílat nevyžádanou poštu nebo špinit jméno firmy</li>
                                    <li>Zveřejňovat přístupové údaje do uživatelské administrace</li>
                                </ul>
                                <p>Zákazník nese odpovědnost za vše, co se na jeho serveru děje. Zákazník je povinen uvádět v registraci správné a úplné údaje a informovat při jejich změně.</p>
                                <p>Pokud zákazník žádá o vrácení peněz z důvodu nevyhovující služby, dostane v rámci reklamace kredity zpět na svůj zákaznický účet.</p>
                            </section>

                            <section>
                                <h2>4. Reklamace</h2>
                                <p>V případě, že zákazník se domnívá, že jeho služba neodpovídá uvedenému popisu, je oprávněn uplatnit reklamaci na:</p>
                                <ul>
                                    <li>Email: <a href="mailto:support@firtcore.cz">support@firtcore.cz</a></li>
                                    <li>Ticketem na Discordu: <a href="https://discord.gg/firtcore-cz" target="_blank" rel="noopener noreferrer">discord.gg/firtcore-cz</a></li>
                                    <li>Písemně na adrese: Patrik Vlček, Na Škvárovně 522, 549 32 Velké Poříčí</li>
                                </ul>
                                <p>Reklamaci poskytovatel vyřídí v zákonem stanovené lhůtě (<strong>30 dní</strong>). Prodávající rozhodne o reklamaci ihned, ve složitých případech do tří pracovních dnů.</p>
                            </section>

                            <section>
                                <h2>5. Zákaznická podpora a komunikace</h2>
                                <p>Možnosti komunikace:</p>
                                <ul>
                                    <li>Email: <a href="mailto:support@firtcore.cz">support@firtcore.cz</a></li>
                                    <li>Telefon: 776 092 263</li>
                                    <li>Discord: <a href="https://discord.gg/firtcore-cz" target="_blank" rel="noopener noreferrer">discord.gg/firtcore-cz</a> (ticket systém)</li>
                                </ul>
                            </section>

                            <section>
                                <h2>6. Zánik trvání smlouvy</h2>
                                <p>Při ukončení služby nezaniká povinnost zákazníka uhradit nezaplacené faktury. Minimální doba, po kterou je služba vedena, je <strong>30 dní</strong>. Reklamaci provozovatel vyřídí do 30 dní. U dedikovaných serverů je zákazník povinen zaplatit 25 % z ceny při zrušení, není-li stanoveno jinak.</p>
                            </section>

                            <section>
                                <h2>7. Datová centra</h2>
                                <p>Hosting má pronajaté servery u externí firmy. Je zakázáno propojovat naše služby s jinými hostingy, pokud není uvedeno jinak. Zákazník musí požádat o jinou lokaci – v základu je nastavena lokace CZ.</p>
                            </section>

                            <section>
                                <h2>8. Dostupnost služby, poruchy a odstávky</h2>
                                <p>Provozovatel si vyhrazuje právo na přerušení dodávky služeb. V případě plánované odstávky bude provozovatel včas informovat prostřednictvím uživatelského rozhraní, webových stránek nebo Discordu.</p>
                                <p>Provozovatel nenese zodpovědnost za ztrátu uložených dat ani za škody způsobené využíváním služeb (např. poškození disku). V případě útoků DDoS provozovatel nenese zodpovědnost za poškození zákazníkovy služby.</p>
                            </section>

                            <section>
                                <h2>9. Konektivita</h2>
                                <p>90 % služeb je připojeno k 10Gbit konektivitě, přičemž pro bezpečnost zákazníků poskytujeme v základu max. 1Gbit. V případě potřeby navyšujeme.</p>
                            </section>

                            <section>
                                <h2>10. Možnosti plateb</h2>
                                <p>Platební brány: <strong>Stripe, PayPal</strong>.</p>
                            </section>

                            <section>
                                <h2>11. Ochrana informací a osobních údajů</h2>
                                <p>Zpracovávané osobní údaje: jméno a příjmení, IP adresa, e-mail, adresa, tel. číslo. Tyto údaje jsou nutné pro zpracování objednávek a plnění ze smlouvy (čl. 6 odst. 1 písm. b) GDPR). Osobní údaje jsou uchovávány po dobu <strong>10 let</strong> od realizace poslední části plnění.</p>
                                <p>Podrobnější informace naleznete v <a href="/gdpr">Zásadách ochrany osobních údajů (GDPR)</a>.</p>
                            </section>

                            <section>
                                <h2>12. Závěrečná ustanovení</h2>
                                <p>Veškerá ujednání mezi provozovatelem a zákazníkem se řídí platným a účinným českým právním řádem. Provozovatel může kteroukoli část smlouvy nebo smluvních podmínek změnit kdykoli, s platností od prvního dne následujícího kalendářního měsíce po zveřejnění změn.</p>
                                <p>Tyto VOP nabývají účinnosti dnem <strong>27. 2. 2026</strong>.</p>
                                <p>V případě vzniku spotřebitelského sporu, který se nepodaří vyřešit vzájemnou dohodou, může spotřebitel podat návrh na mimosoudní řešení sporu u České obchodní inspekce (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">www.coi.cz</a>).</p>
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
                    color: hsl(var(--color-primary));
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
                    color: hsl(var(--color-primary));
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
            `}</style>
        </Layout>
    )
}
