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
                        <p className="text-muted-foreground mb-12 text-lg">Platné od 1. 1. 2025 | FirtCore datová centra</p>

                        <div className="space-y-10 legal-content">

                            <section>
                                <h2>1. Základní ustanovení</h2>
                                <p>Tyto všeobecné obchodní podmínky (dále jen „VOP") upravují vzájemná práva a povinnosti mezi poskytovatelem (<strong>Jan Mikulčík, IČO: 72409002</strong>, se sídlem Družstevní 93, 763 26 Luhačovice, dále jen „Poskytovatel") a zákazníkem (dále jen „Zákazník") při poskytování hostingových a dalších IT služeb prostřednictvím webových stránek <strong>firtcore.cz</strong>.</p>
                                <p>Zákazník odesláním objednávky potvrzuje, že se s těmito VOP seznámil a souhlasí s nimi.</p>
                            </section>

                            <section>
                                <h2>2. Předmět smlouvy</h2>
                                <p>Poskytovatel se zavazuje poskytovat Zákazníkovi služby hostingu, mezi které patří zejména:</p>
                                <ul>
                                    <li>Herní servery (Minecraft, CS2, Garry's Mod a další)</li>
                                    <li>Virtuální privátní servery (VPS)</li>
                                    <li>Virtuální dedikované servery (VDS)</li>
                                    <li>Dedikované fyzické servery</li>
                                    <li>Webhostingové služby</li>
                                </ul>
                                <p>Konkrétní specifikace a podmínky jsou uvedeny v příslušné objednávce a popisu dané služby.</p>
                            </section>

                            <section>
                                <h2>3. Objednávka a uzavření smlouvy</h2>
                                <p>Smlouva o poskytování služeb je uzavřena okamžikem, kdy Poskytovatel potvrdí přijetí objednávky Zákazníka, nejpozději však zahájením poskytování objednané služby. Objednávku lze provést prostřednictvím klientské zóny na <a href="https://client.firtcore.cz" target="_blank" rel="noopener noreferrer">client.firtcore.cz</a>.</p>
                            </section>

                            <section>
                                <h2>4. Platební podmínky</h2>
                                <p>Ceny služeb jsou uvedeny na webových stránkách Poskytovatele a v klientské zóně. Platba se provádí předem na základě vystaveného daňového dokladu. Podporované způsoby platby:</p>
                                <ul>
                                    <li>Bankovní převod (Air Bank, č. ú. uvedeno na faktuře)</li>
                                    <li>Online platba kartou</li>
                                </ul>
                                <p>Faktura je splatná do <strong>7 dnů</strong> od jejího vystavení. V případě neuhrazení faktury v termínu splatnosti si Poskytovatel vyhrazuje právo pozastavit nebo ukončit poskytování služeb.</p>
                            </section>

                            <section>
                                <h2>5. Dostupnost a SLA</h2>
                                <p>Poskytovatel se zavazuje zajistit dostupnost nabízených služeb na úrovni minimálně <strong>99,9 % za měsíc</strong> (SLA). Do výpočtu dostupnosti se nezapočítávají plánované odstávky, o nichž byl Zákazník informován alespoň 24 hodin předem, ani výpadky způsobené třetími stranami nebo vyšší mocí.</p>
                            </section>

                            <section>
                                <h2>6. Práva a povinnosti zákazníka</h2>
                                <p>Zákazník je povinen:</p>
                                <ul>
                                    <li>Používat služby v souladu s platnými právními předpisy ČR a EU</li>
                                    <li>Nepoužívat služby k šíření nelegálního obsahu, spamu nebo malwaru</li>
                                    <li>Neprovozovat DDoS útoky ani jiné útoky na třetí strany</li>
                                    <li>Chránit přístupové údaje ke svému účtu</li>
                                    <li>Hradit faktury řádně a včas</li>
                                </ul>
                                <p>Porušení těchto povinností je důvodem k okamžitému ukončení poskytování služeb bez nároku na vrácení zaplacených prostředků.</p>
                            </section>

                            <section>
                                <h2>7. Práva a povinnosti poskytovatele</h2>
                                <p>Poskytovatel je oprávněn:</p>
                                <ul>
                                    <li>Provádět plánované i neplánované odstávky za účelem údržby infrastruktury</li>
                                    <li>Pozastavit nebo ukončit poskytování služeb v případě porušení VOP</li>
                                    <li>Jednostranně měnit VOP s informováním zákazníků minimálně 30 dní předem</li>
                                </ul>
                            </section>

                            <section>
                                <h2>8. Ochrana dat a soukromí</h2>
                                <p>Osobní údaje zpracovávané v rámci poskytování služeb jsou chráněny v souladu s nařízením GDPR. Podrobnosti jsou uvedeny v samostatném dokumentu <a href="/gdpr">Zásady ochrany osobních údajů (GDPR)</a>.</p>
                            </section>

                            <section>
                                <h2>9. Odstoupení od smlouvy a ukončení</h2>
                                <p>Zákazník má právo kdykoliv ukončit odběr služeb výpovědí doručenou Poskytovateli. Výpovědní lhůta je <strong>30 dní</strong> a začíná plynout prvním dnem kalendářního měsíce následujícího po doručení výpovědi. Za nevyužité předplacené období nevzniká nárok na vrácení peněz.</p>
                                <p>Spotřebitel má právo odstoupit od smlouvy uzavřené na dálku bez udání důvodu ve lhůtě 14 dní od jejího uzavření, pokud dosud nedošlo k zahájení poskytování služby.</p>
                            </section>

                            <section>
                                <h2>10. Odpovědnost za vady a reklamace</h2>
                                <p>Reklamace se podávají prostřednictvím klientské zóny nebo e-mailem na <a href="mailto:info@firtcore.cz">info@firtcore.cz</a>. Poskytovatel se zavazuje vyřešit reklamaci bez zbytečného odkladu, nejpozději do <strong>30 dnů</strong>.</p>
                            </section>

                            <section>
                                <h2>11. Závěrečná ustanovení</h2>
                                <p>Tyto VOP se řídí právem České republiky. Veškeré spory budou řešeny příslušným soudem v ČR. Pokud je Zákazník spotřebitel, může využít i mimosoudního řešení sporu prostřednictvím České obchodní inspekce (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">www.coi.cz</a>).</p>
                                <p>Tyto VOP jsou platné a účinné od <strong>1. 1. 2025</strong>.</p>
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
