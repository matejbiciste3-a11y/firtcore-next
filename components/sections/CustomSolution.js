import Button from '../ui/Button'
import { Icons } from '../ui/Icons'

export default function CustomSolution() {
    return (
        <section className="py-24 px-8 bg-background-secondary/50">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
                        <Icons.Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Máte specifické požadavky?</h2>
                    <p className="text-xl text-muted mb-10 leading-relaxed">
                        Pokud vám nevyhovuje žádná z našich standardních nabídek, rádi pro vás
                        připravíme řešení na míru. Ať už jde o extrémní výkon, specifickou síťovou
                        konfiguraci nebo rozsáhlou herní síť.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button href="mailto:info@firtcore.cz" variant="primary" size="large">
                            Kontaktovat obchodní oddělení
                        </Button>
                        <Button href="https://discord.gg/firtcore" variant="secondary" size="large" icon="discord">
                            Poptat na Discordu
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
