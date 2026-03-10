import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
    const serviceLinks = SERVICES.map(s => ({ label: s.name, href: s.href }));
    const companyLinksOverride = [
        { label: 'About Us', href: '/#about' },
        { label: 'Why Us', href: '/#why-us' },
        { label: 'Testimonials', href: '/travel#testimonials' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-[#0D0A0B] border-t border-white/5 pt-24 pb-8">
            <div className="max-w-[1280px] mx-auto px-6 md:px-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Col */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <img src="/logo.jpg" alt="Wevans Global" className="h-14 w-14 object-contain" />
                            <span className="font-serif text-2xl text-cream tracking-wide">
                                Wevans <span className="text-gold">Global</span>
                            </span>
                        </Link>
                        <p className="text-secondary text-[15px] mb-8 max-w-xs">
                            Building Global Futures through Fintech, Recruitment, and seamless Travel.
                        </p>
                        <div className="flex gap-4 text-cream/70">
                            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors p-2 bg-white/5 rounded hover:bg-white/10">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-gold transition-colors p-2 bg-white/5 rounded hover:bg-white/10">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-gold transition-colors p-2 bg-white/5 rounded hover:bg-white/10">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-gold transition-colors p-2 bg-white/5 rounded hover:bg-white/10">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21Z" />
                                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                    <path d="M14 14a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Col */}
                    <div>
                        <h4 className="font-sans font-medium text-[11px] uppercase tracking-[4px] text-gold mb-8">Services</h4>
                        <ul className="flex flex-col gap-4">
                            {serviceLinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-secondary hover:text-cream transition-colors text-[15px]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Col */}
                    <div>
                        <h4 className="font-sans font-medium text-[11px] uppercase tracking-[4px] text-gold mb-8">Company</h4>
                        <ul className="flex flex-col gap-4">
                            {companyLinksOverride.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-secondary hover:text-cream transition-colors text-[15px]">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="font-sans font-medium text-[11px] uppercase tracking-[4px] text-gold mb-8">Contact Info</h4>
                        <ul className="flex flex-col gap-5 text-secondary text-[15px]">
                            <li className="flex items-start gap-3">
                                <div className="text-gold mt-1">
                                    <Mail size={18} strokeWidth={1.5} />
                                </div>
                                <span>{CONTACT.email}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="text-gold mt-1">
                                    <Phone size={18} strokeWidth={1.5} />
                                </div>
                                <span>{CONTACT.phone}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="text-gold mt-1">
                                    <MapPin size={18} strokeWidth={1.5} />
                                </div>
                                <span className="leading-snug">{CONTACT.location}<br />Offices in Lagos / Port Harcourt</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr className="border-white/[0.06] mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted font-sans uppercase tracking-wider">
                    <p>© {new Date().getFullYear()} Wevans Global. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <button className="hover:text-cream transition-colors" type="button">Privacy Policy</button>
                        <button className="hover:text-cream transition-colors" type="button">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
