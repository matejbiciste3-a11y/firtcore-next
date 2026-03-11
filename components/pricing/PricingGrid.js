import PricingCard from './PricingCard'

export default function PricingGrid({ plans, category }) {
    // Ochrana proti undefined
    if (!plans || !Array.isArray(plans) || plans.length === 0) {
        return (
            <section className="py-20 px-8">
                <div className="container">
                    <p className="text-center text-muted-foreground">
                        Žádné plány k zobrazení.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 px-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={plan.id || index}
                            {...plan}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
