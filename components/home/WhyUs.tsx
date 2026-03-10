'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { WHY_FEATURES } from '@/lib/constants';

import { Target, MessageSquare, Smartphone, Star } from 'lucide-react';

const staggeredCards = [
    { icon: Target, title: 'Goal-Oriented', desc: 'We align our services to your personal and business objectives' },
    { icon: MessageSquare, title: 'Expert Guidance', desc: 'Our team brings deep industry knowledge to every client interaction' },
    { icon: Smartphone, title: 'Always Accessible', desc: 'Reach us online, by phone, or in person — we\'re here when you need us' },
    { icon: Star, title: 'Client-First', desc: 'Your success is the metric we measure ourselves by' },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 px-6 md:px-16 bg-surface overflow-hidden border-y border-white/5">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Col */}
                <div>
                    <SectionHeader
                        eyebrow="WHY WEVANS GLOBAL"
                        title="A Partner You Can *Trust*"
                        subtitle="With years of experience across finance, human capital, and travel, Wevans Global has built a reputation for reliability, transparency, and results. We don't just offer services — we deliver transformation."
                    />

                    <ul className="flex flex-col gap-2 mt-8">
                        {WHY_FEATURES.map((feature, idx) => (
                            <motion.li
                                key={feature.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-4 items-start px-6 py-5 border-l-2 border-maroon/30 bg-white/[0.02] hover:border-l-maroon hover:bg-maroon/10 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 mt-0.5 text-gold">
                                    <feature.icon size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="font-sans font-semibold text-cream text-[15px] mb-1">{feature.title}</p>
                                    <p className="font-sans text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right Col: Staggered Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative py-12 lg:py-0">
                    {staggeredCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className={`p-9 bg-[#0D0A0B] border border-white/5 hover:border-gold/30 transition-all duration-300 ${index === 1 ? 'sm:mt-12' : index === 3 ? 'sm:-mt-12' : ''
                                }`}
                        >
                            <div className="mb-4 text-gold">
                                <card.icon size={40} strokeWidth={1.2} />
                            </div>
                            <h4 className="font-serif text-2xl font-semibold text-cream mb-3">{card.title}</h4>
                            <p className="font-sans text-white/50 text-[14px] leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
