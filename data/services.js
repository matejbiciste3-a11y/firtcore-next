export const services = [
    {
        id: 'minecraft',
        name: 'Minecraft Hosting',
        description: 'Optimální výkon pro Minecraft servery všech velikostí s okamžitou aktivací a DDoS ochranou.',
        price: 199,
        features: ['Okamžitá aktivace', 'DDoS ochrana', '24/7 podpora'],
        icon: 'Minecraft',
        link: '/minecraft'
    },
    {
        id: 'vps',
        name: 'VPS Cloud',
        description: 'Výkonné virtuální privátní servery na NVMe úložištích pro vaše náročné aplikace.',
        price: 299,
        features: ['NVMe úložiště', 'Root přístup', 'Backup v ceně'],
        icon: 'Cpu',
        link: '/vps'
    },
    {
        id: 'vds',
        name: 'VDS Dedicated',
        description: 'Virtuální dedikované servery s vyhrazenými zdroji pro maximální stabilitu a výkon.',
        price: 899,
        features: ['Dedikované CPU', 'Žádný overselling', '20 Gbps síť'],
        icon: 'Zap',
        link: '/vds'
    },
    {
        id: 'dedicated',
        name: 'Dedikované Servery',
        description: 'Exkluzivní hardware plně k dispozici pouze pro vás v našem pražském datacentru.',
        price: 2490,
        features: ['Vlastní hardware', 'IPMI přístup', 'NBD servis'],
        icon: 'Server',
        link: '/dedicated'
    },
    {
        id: 'webhosting',
        name: 'Webhosting',
        description: 'Rychlý a bezpečný prostor pro vaše webové stránky s PHP 8.x a MySQL.',
        price: 49,
        features: ['HTTPS zdarma', 'Daily backup', 'Anycast DNS'],
        icon: 'Layout',
        link: '/webhosting'
    },
    {
        id: 'cs2',
        name: 'CS2 Hosting',
        description: 'Profesionální servery pro Counter-Strike 2 s nízkou latencí a 128 tickrate.',
        price: 149,
        features: ['128 tick', 'Workshop podpora', 'Anti-cheat'],
        icon: 'CS2',
        link: '/cs2'
    }
]

export const getServices = () => {
    return services
}

export const getService = (id) => {
    return services.find(s => s.id === id)
}