export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const { name, email, message } = req.body

        // Validace
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address' })
        }

        // Zde by bylo odeslání emailu
        console.log('Contact form submission:', { name, email, message })

        // Simulace odeslání
        await new Promise(resolve => setTimeout(resolve, 1000))

        res.status(200).json({
            success: true,
            message: 'Zpráva byla úspěšně odeslána'
        })
    } catch (error) {
        console.error('Contact form error:', error)
        res.status(500).json({
            message: 'Došlo k chybě při odesílání zprávy'
        })
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}