export const faqItems = [
    {
        id: 1,
        question: 'Přecházím od konkurence, pomůžete mi?',
        answer: 'Velice rádi vám pomůžeme s přesunem všech dat. Navíc dostanete u nás hosting zdarma na dobu, kterou máte zaplacenou u konkurenčního hostingu.'
    },
    {
        id: 2,
        question: 'Jaké platební metody přijímáte?',
        answer: 'Naše klientská zóna umí platbu kartou a bankovní převod, pokud však chcete platit jinak není problém! Kontaktujte nás a domluvíme se.'
    },
    {
        id: 3,
        question: 'Můžu si kdykoliv vylepšit svůj plán?',
        answer: 'Samozřejmě! Nabízíme největší možnou flexibilitu a vždy se dá s námi domluvit.'
    },
    {
        id: 4,
        question: 'Co když mi žádný z balíčků nevyhovuje?',
        answer: 'Nabízíme hosting na míru, neváhejte nás kontaktovat a společně najdeme pro vás to nejlepší řešení!'
    },
    {
        id: 5,
        question: 'Jak je na tom vaše podpora?',
        answer: 'Podporu nabízíme i v nadstandardních situacích, rádi vám pomůžeme opravit nefunkční plugin nebo rozchodit vaši vysněnou doménu. Odpověď od naší podpory dostanete v rámci desítek minut.'
    },
    {
        id: 6,
        question: 'Jak funguje vaše AntiDDoS ochrana?',
        answer: 'Aktuálně pro filtraci DDoS útoků využíváme prefiltering od GCore, po něm následuje symetrická ochrana od Dataforestu a poté specifické filtry pro hry. Tato kombinace zaručí, že s námi nehnou ani ty nejsilnější DDoS útoky.'
    }
]

export const getFAQ = () => {
    return faqItems
}