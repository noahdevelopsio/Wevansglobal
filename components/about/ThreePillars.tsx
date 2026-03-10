'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../shared/SectionHeader';

const pillars = [
    {
        name: 'Fintech',
        desc: 'Cutting-edge financial tools for trading, investment, and digital payments.',
        href: '/fintech',
        image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Recruitment',
        desc: 'Connecting Nigerian talent with local and international career opportunities.',
        href: '/recruitment',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Travel & Tour',
        desc: 'Full-service travel consultancy: visas, flights, hotels, and curated tours.',
        href: '/travel',
        image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export default function ThreePillars() {
    return (
        <section className="py-24 px-6 md:px-16 bg-surface border-y border-white/5">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <SectionHeader
                        eyebrow="WHAT DRIVES US"
                        title="Three Industries. *One Purpose.*"
                        centered
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <Link href={pillar.href} className="block relative p-10 md:p-12 bg-[#0D0A0B] border border-white/5 hover:border-maroon/50 transition-all duration-300 overflow-hidden group h-full">
                                {/* Background image */}
                                <Image
                                    src={pillar.image}
                                    alt={pillar.name}
                                    fill
                                    className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                                />
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-maroon to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                <div className="relative z-10">
                                    <h3 className="font-serif text-3xl font-semibold text-cream mb-4">{pillar.name}</h3>
                                    <p className="text-white/50 text-[14px] leading-relaxed mb-6">{pillar.desc}</p>
                                    <span className="text-gold text-[12px] uppercase tracking-[2px] font-medium group-hover:tracking-[4px] transition-all duration-300">
                                        Learn More →
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
