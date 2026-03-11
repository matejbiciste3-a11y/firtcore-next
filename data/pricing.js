export const minecraftPlans = [
    {
        id: 'minecraft-basic',
        name: 'Basic',
        price: 199,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe SSD',
            'Neomezený počet hráčů',
            'DDoS ochrana',
            '24/7 podpora'
        ],
        popular: false
    },
    {
        id: 'minecraft-standard',
        name: 'Standard',
        price: 349,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe SSD',
            'Neomezený počet hráčů',
            'DDoS ochrana',
            '24/7 podpora',
            'Automatické zálohy'
        ],
        popular: true
    },
    {
        id: 'minecraft-premium',
        name: 'Premium',
        price: 599,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe SSD',
            'Neomezený počet hráčů',
            'DDoS ochrana',
            '24/7 podpora',
            'Automatické zálohy',
            'Vlastní doména'
        ],
        popular: false
    },
    {
        id: 'minecraft-extreme',
        name: 'Extreme',
        price: 999,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe SSD',
            'Neomezený počet hráčů',
            'DDoS ochrana',
            '24/7 podpora',
            'Automatické zálohy',
            'Vlastní doména',
            'Prioritní podpora'
        ],
        popular: false
    }
]

export const vpsPlans = [
    {
        id: 'vps-basic',
        name: 'Basic VPS',
        price: 299,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe',
            'X TB přenos',
            '1x IPv4',
            'DDoS ochrana'
        ],
        popular: false
    },
    {
        id: 'vps-standard',
        name: 'Standard VPS',
        price: 549,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe',
            'X TB přenos',
            '1x IPv4',
            'DDoS ochrana',
            'Automatické zálohy'
        ],
        popular: true
    },
    {
        id: 'vps-premium',
        name: 'Premium VPS',
        price: 999,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe',
            'X TB přenos',
            '1x IPv4',
            'DDoS ochrana',
            'Automatické zálohy',
            'Prioritní podpora'
        ],
        popular: false
    },
    {
        id: 'vps-extreme',
        name: 'Extreme VPS',
        price: 1899,
        features: [
            'X GB RAM',
            'X vCPU',
            'X GB NVMe',
            'X TB přenos',
            '2x IPv4',
            'DDoS ochrana',
            'Automatické zálohy',
            'Prioritní podpora'
        ],
        popular: false
    }
]

export const getMinecraftPlans = () => {
    return minecraftPlans
}

export const getVPSPlans = () => {
    return vpsPlans
}

export const getPlanById = (id) => {
    const allPlans = [...minecraftPlans, ...vpsPlans]
    return allPlans.find(plan => plan.id === id)
}