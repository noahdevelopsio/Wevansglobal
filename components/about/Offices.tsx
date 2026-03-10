'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { OFFICES } from '@/lib/constants';
import { Building2 } from 'lucide-react';

export default function Offices() {
    return (
        <section className="py-24 px-6 md:px-16">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left: Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionHeader
                        eyebrow="WHERE WE ARE"
                        title="Four Locations. *One Mission.*"
                        subtitle="Our offices span Nigeria's key commercial and administrative hubs, making us accessible wherever you are."
                    />
                </motion.div>

                {/* Right: Office Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {OFFICES.map((office, index) => (
                        <motion.div
                            key={office.city}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative p-8 border transition-all duration-300 overflow-hidden group ${office.isHQ
                                    ? 'bg-maroon/20 border-maroon/50'
                                    : 'bg-surface border-white/5 hover:border-maroon/40'
                                }`}
                        >
                            {office.isHQ && (
                                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-gold border border-gold/40 px-2.5 py-1">
                                    HQ
                                </span>
                            )}

                            <div className="mb-4 text-gold">
                                <Building2 size={28} strokeWidth={1.2} />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-cream mb-1">{office.city}</h3>
                            <p className="text-gold text-xs uppercase tracking-widest mb-3">{office.state}</p>
                            <p className="text-white/50 text-sm leading-relaxed">{office.address}</p>

                            {/* Hover left accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-maroon scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-400" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
