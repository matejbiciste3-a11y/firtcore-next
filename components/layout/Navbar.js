import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { Icons } from '../ui/Icons'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

export default function Navbar() {
    const { t } = useTranslation('common')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isMenuOpen])

    const navLinks = [
        { href: '/services', label: t('navigation.services'), icon: Icons.Layout },
        { href: '/minecraft', label: t('navigation.minecraft'), icon: Icons.Server },
        { href: '/vps', label: t('navigation.vps'), icon: Icons.Cpu },
        { href: '/vds', label: t('navigation.vds'), icon: Icons.Zap },
        { href: '/free-credits', label: t('navigation.freeCredits'), icon: Icons.Gift },
        { href: '#features', label: t('navigation.features'), icon: Icons.Shield },
        { href: '#faq', label: t('navigation.faq'), icon: Icons.Activity },
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
            <div className="navbar-inner">
                <div className="flex items-center justify-between w-full">
                    {/* Levá část - Logo */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="logo-link">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop menu - CENTROVANÉ */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <div className="flex items-center gap-1 bg-background-secondary/40 backdrop-blur-sm px-2 py-1 rounded-2xl border border-white/5">
                            {navLinks.map((link) => {
                                const isActive = router.pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={clsx(
                                            "relative px-4 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap",
                                            isActive 
                                                ? "text-brand bg-brand/10" 
                                                : "text-base/60 hover:text-brand hover:bg-brand/5"
                                        )}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand rounded-full"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Pravá část - Akční tlačítka */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        
                        <Button href="https://client.firtcore.cz/login" variant="primary" size="small" className="hidden lg:inline-flex">
                            {t('navigation.login')}
                        </Button>

                        <Button href="https://client.firtcore.cz/register" variant="secondary" size="small" className="hidden lg:inline-flex">
                            {t('navigation.register')}
                        </Button>

                        {/* Hamburger tlačítko - POUZE NA MOBILU */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative w-12 h-12 rounded-xl bg-neutral/10 border border-white/5 hover:border-brand/50 transition-all duration-300 focus:outline-none group"
                            aria-label="Menu"
                        >
                            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 rounded-xl transition-colors"></div>
                            <div className="relative flex flex-col items-center justify-center w-full h-full">
                                <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
                                <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobilní menu - JEN PŘI OTEVŘENÍ */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-50 overflow-y-auto"
                        style={{
                            background: 'linear-gradient(135deg, hsl(var(--color-background-secondary)) 0%, hsl(var(--color-background)) 100%)',
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        <div className="container mx-auto px-4 py-8">
                            {/* Navigační odkazy */}
                            <div className="space-y-2 mb-8">
                                {navLinks.map((link, idx) => {
                                    const Icon = link.icon;
                                    const isActive = router.pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={clsx(
                                                    "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group",
                                                    isActive 
                                                        ? "bg-brand/20 text-brand" 
                                                        : "hover:bg-brand/10 hover:text-brand hover:translate-x-2"
                                                )}
                                            >
                                                <div className={clsx(
                                                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                                                    isActive 
                                                        ? "bg-brand text-white" 
                                                        : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white"
                                                )}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <span className="text-lg font-bold">{link.label}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Akční tlačítka - POUZE NA MOBILU */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-3 pt-8 border-t border-white/5"
                            >
                                <Button 
                                    href="https://client.firtcore.cz/login" 
                                    variant="primary" 
                                    fullWidth 
                                    size="large"
                                    className="shadow-lg shadow-brand/30"
                                >
                                    {t('navigation.login')}
                                </Button>
                                <Button 
                                    href="https://client.firtcore.cz/register" 
                                    variant="secondary" 
                                    fullWidth 
                                    size="large"
                                >
                                    {t('navigation.register')}
                                </Button>
                            </motion.div>

                            {/* Sociální sítě */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex justify-center gap-4 pt-8 mt-8 border-t border-white/5"
                            >
                                {[
                                    { icon: Icons.Discord, href: 'https://discord.gg/J9WuqZZtJ4', label: 'Discord' },
                                    { icon: Icons.Users, href: '#', label: 'Komunita' },
                                    { icon: Icons.Shield, href: '#', label: 'Podpora' }
                                ].map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all duration-300 group relative"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}