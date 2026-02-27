import Link from 'next/link'
import Image from 'next/image'
import Logo from '../ui/Logo'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-cols">
                    <div className="footer-brand">
                        <Logo className="mb-4" size={48} />
                        <p>Enterprise-grade herní hosting</p>
                        <div className="footer-brand-socials">
                            <a href="https://discord.gg/firtcore" target="_blank" rel="noopener" aria-label="Discord">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                            <a href="mailto:info@firtcore.cz" aria-label="Email">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Služby</h4>
                        <ul>
                            <li><Link href="/minecraft">Minecraft Hosting</Link></li>
                            <li><Link href="/vps">VPS Hosting</Link></li>
                            <li><Link href="/vds">VDS Hosting</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Informace</h4>
                        <ul>
                            <li>Patrik Vlček</li>
                            <li>IČO: 23266023</li>
                            <li>Na Škvárovně 522</li>
                            <li>549 32 Velké Poříčí</li>
                            <li>Neplátce DPH</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Právní dokumenty</h4>
                        <ul>
                            <li><a href="/docs/vop-gdpr-firtcore.docx" download>VOP a GDPR (ke stažení)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-copyright">
                    © {new Date().getFullYear()} FirtCore datová centra | Všechny práva vyhrazena
                </div>
            </div>
        </footer>
    )
}