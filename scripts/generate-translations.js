// scripts/generate-translations.js
const fs = require('fs')
const path = require('path')

console.log('🔧 Generuji základní překlady...')

// Cesty k souborům
const csFile = path.join(__dirname, '..', 'public', 'locales', 'cs', 'common.json')
const enFile = path.join(__dirname, '..', 'public', 'locales', 'en', 'common.json')

console.log('📂 Vytvářím český překlad...')

// České překlady
const csTranslations = {
    "navigation": {
        "services": "Služby",
        "minecraft": "Minecraft",
        "vps": "VPS",
        "vds": "VDS",
        "freeCredits": "Kredit zdarma",
        "features": "Funkce",
        "faq": "FAQ",
        "login": "Přihlásit se",
        "register": "Registrace"
    },
    "footer": {
        "services": "Služby",
        "information": "Informace",
        "legal": "Právní dokumenty",
        "rights": "Všechny práva vyhrazena",
        "company": "Patrik Vlček",
        "ico": "IČO: 23266023",
        "address": "Na Škvárovně 522",
        "city": "549 32 Velké Poříčí",
        "vat": "Neplátce DPH"
    },
    "buttons": {
        "copy": "Zkopírovat odkaz",
        "learnMore": "Zjistit více",
        "getStarted": "Začít hned",
        "explore": "Prozkoumat",
        "contact": "Kontaktovat",
        "joinDiscord": "Připojit se na Discord"
    },
    "hero": {
        "badge": "Všechny služby v provozu • 99.99% uptime",
        "title": "Výkon, na který",
        "titleGradient": "se můžete spolehnout",
        "description": "Enterprise-grade herní servery s pokročilou DDoS ochranou, nulovou latencí v ČR a podporou, která řeší problémy dřív, než nastanou.",
        "cta": {
            "primary": "Začít hned",
            "secondary": "Prozkoumat"
        },
        "badges": {
            "performance": "Špičkový výkon",
            "availability": "Vysoká dostupnost",
            "support": "24/7 Podpora"
        }
    }
}

console.log('📂 Vytvářím anglický překlad...')

// Anglické překlady
const enTranslations = {
    "navigation": {
        "services": "Services",
        "minecraft": "Minecraft",
        "vps": "VPS",
        "vds": "VDS",
        "freeCredits": "Free Credits",
        "features": "Features",
        "faq": "FAQ",
        "login": "Login",
        "register": "Register"
    },
    "footer": {
        "services": "Services",
        "information": "Information",
        "legal": "Legal Documents",
        "rights": "All rights reserved",
        "company": "Patrik Vlček",
        "ico": "VAT: CZ23266023",
        "address": "Na Škvárovně 522",
        "city": "549 32 Velké Poříčí",
        "vat": "Non-VAT payer"
    },
    "buttons": {
        "copy": "Copy link",
        "learnMore": "Learn more",
        "getStarted": "Get started",
        "explore": "Explore",
        "contact": "Contact",
        "joinDiscord": "Join Discord"
    },
    "hero": {
        "badge": "All services operational • 99.99% uptime",
        "title": "Performance you",
        "titleGradient": "can rely on",
        "description": "Enterprise-grade game servers with advanced DDoS protection, zero latency in Czechia, and support that solves problems before they occur.",
        "cta": {
            "primary": "Get started",
            "secondary": "Explore"
        },
        "badges": {
            "performance": "Top performance",
            "availability": "High availability",
            "support": "24/7 Support"
        }
    }
}

// Uložení souborů
console.log('💾 Ukládám soubory...')

fs.writeFileSync(csFile, JSON.stringify(csTranslations, null, 2))
console.log('   ✅ Český soubor uložen')

fs.writeFileSync(enFile, JSON.stringify(enTranslations, null, 2))
console.log('   ✅ Anglický soubor uložen')

// Kontrola
console.log('\n🔍 Kontrola:')
console.log(`   📄 CS: ${csFile} - existuje: ${fs.existsSync(csFile)}`)
console.log(`   📄 EN: ${enFile} - existuje: ${fs.existsSync(enFile)}`)

console.log('\n✅ Hotovo! Nyní spusťte: npm run dev')