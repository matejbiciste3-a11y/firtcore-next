import PricingCard from './PricingCard'

export default function PricingGrid({ plans, category }) {
    return (
        <section className="py-20 px-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            {...plan}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
