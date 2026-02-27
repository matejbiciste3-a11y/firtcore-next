import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { Icons } from '../ui/Icons'
import clsx from 'clsx'

export default function Navbar() {
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
        { href: '/minecraft', label: 'Minecraft', icon: Icons.Server },
        { href: '/vps', label: 'VPS', icon: Icons.Cpu },
        { href: '/vds', label: 'VDS', icon: Icons.Zap },
        { href: '#features', label: 'Funkce', icon: Icons.Shield },
        { href: '#faq', label: 'FAQ', icon: Icons.Activity },
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-inner">
                <div className="navbar-left">
                    <Link href="/" className="logo-link">
                        <Logo />
                    </Link>

                    <div className="nav-links ml-8 hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = router.pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx(
                                        "relative px-4 py-2 text-sm font-bold transition-all hover:text-primary group",
                                        isActive ? "text-primary" : "text-base/60"
                                    )}
                                >
                                    {link.label}
                                    <motion.div
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isActive ? 1 : 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="nav-actions">
                    <ThemeToggle />

                    <Button href="https://client.firtcore.cz/login" variant="primary" size="small" className="hidden lg:inline-flex">
                        Přihlásit se
                    </Button>

                    <Button href="https://client.firtcore.cz/register" variant="secondary" size="small" className="hidden lg:inline-flex">
                        Registrace
                    </Button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <svg className="icon-menu" viewBox="0 0 24 24">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                        <svg className="icon-close" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-menu"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link, idx) => {
                                const Icon = link.icon;
                                const isActive = router.pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={clsx(
                                                "mobile-menu-item",
                                                isActive && "active"
                                            )}
                                        >
                                            <div className="mobile-menu-icon">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-lg font-bold">{link.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mobile-menu-actions">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Button href="https://client.firtcore.cz/login" variant="primary" fullWidth size="large">
                                    Přihlášení do Klientky
                                </Button>
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Button href="https://client.firtcore.cz/register" variant="secondary" fullWidth size="large">
                                    Vytvořit účet zdarma
                                </Button>
                            </motion.div>
                        </div>

                        <div className="mobile-menu-socials">
                            {[
                                { icon: Icons.Discord, href: 'https://discord.gg/firtcore' },
                                { icon: Icons.Users, href: '#' },
                                { icon: Icons.Shield, href: '#' }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    className="mobile-social-link"
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}