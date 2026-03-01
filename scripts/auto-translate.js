// scripts/auto-translate.js
const fs = require('fs')
const path = require('path')
const { GoogleGenerativeAI } = require('@google/generative-ai')
require('dotenv').config({ path: '.env.local' })

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
  console.error('❌ CHYBA: Nenalezen GEMINI_API_KEY v .env.local')
  process.exit(1)
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" })

console.log('✅ Používám model: gemini-3-flash-preview\n')

// Funkce pro extrakci textů
function extractAllTexts() {
  console.log('🔍 Hledám texty v komponentách...')
  
  const textMap = new Map()
  const componentFiles = []
  
  const findFiles = (dir) => {
    if (!fs.existsSync(dir)) return
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      const fullPath = path.join(dir, file)
      if (fs.statSync(fullPath).isDirectory()) {
        findFiles(fullPath)
      } else if (file.match(/\.(js|jsx)$/) && !file.includes('.test.')) {
        componentFiles.push(fullPath)
      }
    })
  }
  
  findFiles('./components')
  findFiles('./pages')
  
  console.log(`📁 Nalezeno ${componentFiles.length} souborů`)
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8')
    
    // Hledáme texty v JSX
    const jsxTexts = content.match(/>([^<]+)</g) || []
    jsxTexts.forEach(match => {
      let text = match.replace(/>/, '').replace(/</, '').trim()
      
      if (text && 
          text.length > 1 && 
          !text.startsWith('{') && 
          !text.includes('t(') &&
          !text.includes('className') &&
          !text.includes('return') &&
          !text.includes('export') &&
          !text.includes('function') &&
          !text.includes('const') &&
          !text.includes('import') &&
          !text.match(/^[0-9%.\s]+$/) &&
          text.length < 100) {
        textMap.set(text, { cz: text, en: '' })
      }
    })
    
    // Hledáme placeholder
    const placeholders = content.match(/placeholder=["']([^"']+)["']/g) || []
    placeholders.forEach(match => {
      const text = match.replace(/placeholder=["']/, '').replace(/["']$/, '')
      if (text && text.length > 1) {
        textMap.set(text, { cz: text, en: '' })
      }
    })
    
    // Hledáme alt texty
    const alts = content.match(/alt=["']([^"']+)["']/g) || []
    alts.forEach(match => {
      const text = match.replace(/alt=["']/, '').replace(/["']$/, '')
      if (text && text.length > 1 && text !== 'FirtCore.cz logo') {
        textMap.set(text, { cz: text, en: '' })
      }
    })
    
    // Hledáme title
    const titles = content.match(/title=["']([^"']+)["']/g) || []
    titles.forEach(match => {
      const text = match.replace(/title=["']/, '').replace(/["']$/, '')
      if (text && text.length > 1) {
        textMap.set(text, { cz: text, en: '' })
      }
    })
    
    // Hledáme array texty
    const arrayTexts = content.match(/["']([^"']+)["'](?=\s*,)/g) || []
    arrayTexts.forEach(match => {
      const text = match.replace(/["']/g, '')
      if (text && text.length > 1 && !text.includes('http') && !text.includes('@')) {
        textMap.set(text, { cz: text, en: '' })
      }
    })
  })
  
  return { textMap, componentFiles }
}

// Funkce pro čištění textů
function cleanTexts(textMap) {
  const cleanMap = new Map()
  const skipPatterns = [
    /^[)\]}]+$/,
    /^[)}]+\s*[){]+$/,
    /^[)}]\s*[a-z]/i,
    /^[a-z]\s*[)}]/i,
    /^[<>{}[\]()]+$/,
    /^[0-9\s]+$/,
    /\{t\(/,
    /\.map/,
    /\.filter/,
    /=>/,
    /function/,
    /const/,
    /let/,
    /import/,
    /export/,
    /return/,
    /className/,
    /onClick/,
    /useState/,
    /useEffect/,
    /useRouter/,
    /useTranslation/,
    /serverSideTranslations/
  ]
  
  for (const [text, value] of textMap.entries()) {
    let shouldSkip = false
    for (const pattern of skipPatterns) {
      if (pattern.test(text)) {
        shouldSkip = true
        break
      }
    }
    
    if (text.length < 2 || text.length > 50) {
      shouldSkip = true
    }
    
    if (!shouldSkip) {
      cleanMap.set(text, value)
    }
  }
  
  return cleanMap
}

// Funkce pro překlad pomocí AI
async function translateTexts(textMap) {
  const textArray = Array.from(textMap.keys())
  console.log(`📝 Nalezeno ${textArray.length} unikátních textů k překladu`)
  
  const batchSize = 10
  const batches = []
  for (let i = 0; i < textArray.length; i += batchSize) {
    batches.push(textArray.slice(i, i + batchSize))
  }
  
  console.log(`📦 Rozděleno do ${batches.length} dávek`)
  
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i]
    console.log(`  🤖 Překládám dávku ${i + 1}/${batches.length} (${batch.length} textů)...`)
    
    const prompt = `Přelož tyto české texty do angličtiny. Vrať POUZE JSON objekt.
    
    PŘÍKLAD:
    {
      "Technologie": "Technologies",
      "Postaveno na špičkovém hardwaru": "Built on top-tier hardware",
      "Enterprise DDOS Protection": "Enterprise DDOS Protection",
      "Vícevrstvá ochrana až 12 Tbps s okamžitou filtrací.": "Multi-layer protection up to 12 Tbps with instant filtering.",
      "AMD Ryzen 7 5700x": "AMD Ryzen 7 5700x",
      "Špičkový výkon pro náročné herní servery.": "Top performance for demanding game servers.",
      "NVMe Gen4 SSD": "NVMe Gen4 SSD",
      "Čtení až 7,000 MB/s pro bleskové načítání.": "Read up to 7,000 MB/s for lightning-fast loading."
    }
    
    PRAVIDLA:
    - Zachovej HTML entity (&copy;, &nbsp; atd.)
    - "FirtCore", "DDoS", "NVMe", "SSD", "AMD", "Ryzen" nech beze změny
    - "Kč" přelož jako "CZK"
    - "24/7", "99.99%" zachovej
    - "Minecraft", "CS2", "VPS", "VDS" nech beze změny
    
    Texty k překladu:
    ${JSON.stringify(batch, null, 2)}`
    
    try {
      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const translations = JSON.parse(jsonMatch[0])
        
        Object.entries(translations).forEach(([cz, en]) => {
          if (textMap.has(cz)) {
            textMap.get(cz).en = en
          }
        })
        console.log(`    ✅ ${Object.keys(translations).length} textů přeloženo`)
      }
      
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
    } catch (error) {
      console.error(`    ❌ Chyba:`, error.message)
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
  }
  
  return textMap
}

// Funkce pro vytvoření kompletních JSON souborů
function createCompleteJson(textMap) {
  // Základní struktura
  const csJson = {
    navigation: {
      services: "Služby",
      minecraft: "Minecraft",
      vps: "VPS",
      vds: "VDS",
      freeCredits: "Kredit zdarma",
      features: "Funkce",
      faq: "FAQ",
      login: "Přihlásit se",
      register: "Registrace"
    },
    hero: {
      badge: "Všechny služby v provozu • 99.99% uptime",
      title: "Výkon, na který",
      titleGradient: "se můžete spolehnout",
      description: "Enterprise-grade herní servery s pokročilou DDoS ochranou, nulovou latencí v ČR a podporou, která řeší problémy dřív, než nastanou.",
      cta: {
        primary: "Začít hned",
        secondary: "Prozkoumat"
      },
      badges: {
        performance: "Špičkový výkon",
        availability: "Vysoká dostupnost",
        support: "24/7 Podpora"
      }
    },
    technologies: {
      title: "Technologie",
      subtitle: "Postaveno na špičkovém hardwaru"
    },
    footer: {
      services: "Služby",
      information: "Informace",
      legal: "Právní dokumenty",
      rights: "Všechny práva vyhrazena",
      company: "Patrik Vlček",
      ico: "IČO: 23266023",
      address: "Na Škvárovně 522",
      city: "549 32 Velké Poříčí",
      vat: "Neplátce DPH",
      downloadVop: "VOP a GDPR (ke stažení)"
    },
    buttons: {
      copy: "Zkopírovat odkaz",
      learnMore: "Zjistit více",
      getStarted: "Začít hned",
      explore: "Prozkoumat",
      contact: "Kontaktovat",
      joinDiscord: "Připojit se na Discord"
    }
  }
  
  const enJson = JSON.parse(JSON.stringify(csJson)) // Kopie struktury
  
  // Nahradíme české texty anglickými překlady
  textMap.forEach((value, czText) => {
    if (value.en) {
      // Projdeme celý csJson a najdeme kde se text nachází
      const findAndReplace = (obj, searchText, replaceText) => {
        for (const key in obj) {
          if (typeof obj[key] === 'object') {
            findAndReplace(obj[key], searchText, replaceText)
          } else if (obj[key] === searchText) {
            obj[key] = replaceText
          }
        }
      }
      findAndReplace(enJson, czText, value.en)
    }
  })
  
  // Přidáme technologie (ty už máme v textMap)
  const technologies = [
    { title: "Enterprise DDOS Protection", desc: "Vícevrstvá ochrana až 12 Tbps s okamžitou filtrací." },
    { title: "AMD Ryzen 7 5700x", desc: "Špičkový výkon pro náročné herní servery." },
    { title: "NVMe Gen4 SSD", desc: "Čtení až 7,000 MB/s pro bleskové načítání." },
    { title: "10 Gbps Network", desc: "Redundantní konektivita s <1ms latencí v Praze." },
    { title: "Automatické zálohování", desc: "Denní snapshoty s 14denní retencí." },
    { title: "Docker Ready", desc: "Plná podpora containerizace a orchestrace." }
  ]
  
  csJson.technologies.items = []
  enJson.technologies.items = []
  
  technologies.forEach((tech, index) => {
    csJson.technologies.items.push({
      title: tech.title,
      description: tech.desc
    })
    
    // Najdeme anglické překlady
    const enTitle = textMap.get(tech.title)?.en || tech.title
    const enDesc = textMap.get(tech.desc)?.en || tech.desc
    
    enJson.technologies.items.push({
      title: enTitle,
      description: enDesc
    })
  })
  
  return { csJson, enJson }
}

// Hlavní funkce
async function main() {
  console.log('🚀 Spouštím automatický překladač...\n')
  
  // 1. Extrahujeme texty
  const { textMap, componentFiles } = extractAllTexts()
  
  // 2. Vyčistíme
  const cleanMap = cleanTexts(textMap)
  
  console.log(`\n📊 Nalezeno ${cleanMap.size} textů k překladu\n`)
  
  // 3. Ukázka
  const sample = Array.from(cleanMap.keys()).slice(0, 5)
  console.log('📋 Ukázka textů:')
  sample.forEach((text, i) => console.log(`   ${i+1}. "${text}"`))
  
  // 4. Překlad
  console.log('\n⏳ Překládám...')
  const translatedMap = await translateTexts(cleanMap)
  
  // 5. Vytvoříme JSON
  const { csJson, enJson } = createCompleteJson(translatedMap)
  
  // 6. Uložíme
  const csPath = path.join(__dirname, '..', 'public', 'locales', 'cs', 'common.json')
  const enPath = path.join(__dirname, '..', 'public', 'locales', 'en', 'common.json')
  
  fs.writeFileSync(csPath, JSON.stringify(csJson, null, 2))
  fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2))
  
  console.log('\n✅ Hotovo! Soubory uloženy:')
  console.log(`   📄 ${csPath}`)
  console.log(`   📄 ${enPath}`)
  
  // 7. Report
  const translatedCount = Array.from(translatedMap.values()).filter(v => v.en).length
  console.log(`\n📊 Přeloženo: ${translatedCount} z ${cleanMap.size} textů`)
}

main().catch(console.error)