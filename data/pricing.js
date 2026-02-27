export const minecraftPlans = [
    {
        id: 'minecraft-basic',
        name: 'Basic',
        price: 199,
        features: ['1 GB RAM', '10 GB SSD', 'Neomezený počet hráčů', 'DDoS ochrana', '24/7 podpora'],
        popular: false
    },
    {
        id: 'minecraft-standard',
        name: 'Standard',
        price: 349,
        features: ['2 GB RAM', '20 GB SSD', 'Neomezený počet hráčů', 'DDoS ochrana', '24/7 podpora', 'Automatické zálohy'],
        popular: true
    },
    {
        id: 'minecraft-premium',
        name: 'Premium',
        price: 599,
        features: ['4 GB RAM', '40 GB SSD', 'Neomezený počet hráčů', 'DDoS ochrana', '24/7 podpora', 'Automatické zálohy', 'Vlastní doména'],
        popular: false
    },
    {
        id: 'minecraft-extreme',
        name: 'Extreme',
        price: 999,
        features: ['8 GB RAM', '80 GB SSD', 'Neomezený počet hráčů', 'DDoS ochrana', '24/7 podpora', 'Automatické zálohy', 'Vlastní doména', 'Prioritní podpora'],
        popular: false
    }
]

export const vpsPlans = [
    {
        id: 'vps-basic',
        name: 'Basic VPS',
        price: 299,
        features: ['1 vCPU', '2 GB RAM', '30 GB NVMe', '1 TB přenos', '1x IPv4', 'DDoS ochrana'],
        popular: false
    },
    {
        id: 'vps-standard',
        name: 'Standard VPS',
        price: 549,
        features: ['2 vCPU', '4 GB RAM', '60 GB NVMe', '2 TB přenos', '1x IPv4', 'DDoS ochrana', 'Automatické zálohy'],
        popular: true
    },
    {
        id: 'vps-premium',
        name: 'Premium VPS',
        price: 999,
        features: ['4 vCPU', '8 GB RAM', '120 GB NVMe', '4 TB přenos', '1x IPv4', 'DDoS ochrana', 'Automatické zálohy', 'Prioritní podpora'],
        popular: false
    },
    {
        id: 'vps-extreme',
        name: 'Extreme VPS',
        price: 1899,
        features: ['8 vCPU', '16 GB RAM', '240 GB NVMe', '8 TB přenos', '2x IPv4', 'DDoS ochrana', 'Automatické zálohy', 'Prioritní podpora'],
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