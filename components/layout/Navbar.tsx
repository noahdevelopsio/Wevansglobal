'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../shared/Button';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D0A0B]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
                <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 relative z-[60]" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src="/logo-white.png" alt="Wevans Global" className="h-11 w-11 object-contain" />
                        <span className="font-serif text-2xl text-cream tracking-wide">
                            Wevans <span className="text-cream">Global</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[13px] uppercase tracking-[2px] font-medium">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`relative transition-colors duration-300 hover:text-gold ${isActive ? 'text-gold' : 'text-cream/70'}`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button variant="outline" size="sm" href="/contact">Get Started</Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden relative z-[60] text-cream p-2 -mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#0D0A0B] flex flex-col items-center justify-center px-6 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-center w-full">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`font-serif text-3xl ${pathname === link.href ? 'text-gold' : 'text-cream'}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (NAV_LINKS.length * 0.05) }}
                                className="mt-4 w-full max-w-[200px]"
                            >
                                <Button variant="primary" className="w-full" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
