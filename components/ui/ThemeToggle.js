import { useTheme } from '@/hooks/useTheme'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from './Icons'

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme()

    if (!mounted) return (
        <div className="w-12 h-12 rounded-xl bg-neutral/10 border border-white/5 shadow-lg"></div>
    )

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-neutral/10 border border-white/5 hover:border-primary/50 transition-colors shadow-lg overflow-hidden group"
            aria-label="Přepnout režim"
        >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: 'backOut' }}
                    className="relative z-10"
                >
                    {theme === 'light' ? (
                        <Icons.Sun className="w-6 h-6 text-warning drop-shadow-[0_0_8px_rgba(var(--color-warning),0.4)]" />
                    ) : (
                        <Icons.Moon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--color-primary),0.4)]" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    )
}