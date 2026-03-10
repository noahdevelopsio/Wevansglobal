'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { REGISTRATION_DATA } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export default function Registration() {
    return (
        <section className="py-24 px-6 md:px-16 bg-surface border-y border-white/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <SectionHeader
                        eyebrow="COMPANY CREDENTIALS"
                        title="Registered. Regulated. *Trusted.*"
                        centered
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="border border-gold/20 p-8 md:p-10"
                >
                    {REGISTRATION_DATA.map((row, index) => (
                        <div
                            key={row.label}
                            className={`flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 ${index < REGISTRATION_DATA.length - 1 ? 'border-b border-white/5' : ''
                                }`}
                        >
                            <span className="text-[11px] uppercase tracking-widest text-gold mb-1 sm:mb-0">
                                {row.label}
                            </span>
                            <span className="text-cream font-medium text-[15px] flex items-center gap-2">
                                {row.label === 'Status' && <CheckCircle2 size={16} className="text-green-500" />}
                                {row.value}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {['CAC Registered', 'Active Status', 'CAMA 1990 Compliant'].map(badge => (
                        <span key={badge} className="text-[10px] uppercase tracking-widest text-gold/80 border border-gold/20 px-4 py-2">
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
