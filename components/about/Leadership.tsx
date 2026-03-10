'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '../shared/SectionHeader';
import { MapPin } from 'lucide-react';

export default function Leadership() {
    return (
        <section className="py-24 px-6 md:px-16">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionHeader
                        eyebrow="EXECUTIVE LEADERSHIP"
                        title="Guided by *Vision*"
                    />
                    <div className="space-y-5 mt-6 text-white/60 text-[15px] leading-relaxed">
                        <p>
                            Mr Samuel Evans Weli leads Wevans Global Ltd with a clear strategic vision for expanding Nigeria's access to global financial markets, top-tier talent opportunities, and world-class travel services. Based in Port Harcourt, he oversees all operations across the company's four offices and three core business verticals.
                        </p>
                        <p>
                            Under his leadership, Wevans Global has grown from a single-location startup into a multi-city enterprise with a registered footprint across Rivers State, Abia State, Imo State, and the FCT, with ambitions that extend far beyond Nigeria's borders.
                        </p>
                    </div>
                </motion.div>

                {/* Right: CEO Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="bg-surface border border-gold/20 overflow-hidden"
                >
                    <div className="relative h-72 md:h-80 overflow-hidden">
                        <Image
                            src="/CEO.png"
                            alt="Samuel Evans Weli - CEO"
                            fill
                            className="object-fit object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                    </div>
                    <div className="p-8">
                        <h3 className="font-serif text-3xl font-semibold text-cream">Samuel Evans Weli</h3>
                        <span className="inline-block mt-2 text-gold text-[10px] uppercase tracking-[3px] font-medium border border-gold/30 px-3 py-1">
                            Chief Executive Officer
                        </span>
                        <blockquote className="mt-6 text-white/50 text-[15px] italic leading-relaxed border-l-2 border-maroon/40 pl-4">
                            "We are not just building a company, we are building pathways for Nigerians to reach their fullest potential."
                        </blockquote>
                        <div className="flex items-center gap-2 mt-5 text-white/40 text-sm">
                            <MapPin size={14} />
                            <span>Port Harcourt, Rivers State</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
