export const services = [
    {
        id: 'minecraft',
        name: 'Minecraft Hosting',
        description: 'Optimální výkon pro Minecraft servery všech velikostí',
        price: 199,
        features: ['Okamžitá aktivace', 'DDoS ochrana', '24/7 podpora'],
        icon: 'minecraft'
    },
    {
        id: 'cs2',
        name: 'CS2 Hosting',
        description: 'Profesionální servery pro Counter-Strike 2',
        price: 149,
        features: ['128 tick', 'Workshop podpora', 'Anti-cheat'],
        icon: 'cs2'
    },
    {
        id: 'gmod',
        name: "Garry's Mod",
        description: 'Stabilní servery pro GMod s podporou addonů',
        price: 129,
        features: ['FastDL', 'ULX', 'Wiremod'],
        icon: 'gmod'
    }
]

export const getServices = () => {
    return services
}

export const getService = (id) => {
    return services.find(s => s.id === id)
}