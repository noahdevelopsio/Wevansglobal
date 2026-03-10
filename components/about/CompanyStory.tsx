'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '../shared/SectionHeader';

export default function CompanyStory() {
    return (
        <section className="py-24 px-6 md:px-16">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative border-l-4 border-maroon"
                >
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                            alt="Professional diverse business team collaborating in a modern office"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-[#0D0A0B]/90 border border-gold/30 px-4 py-2 backdrop-blur-sm">
                        <span className="text-gold text-[11px] uppercase tracking-[2px] font-medium">Est. 2017 · RC 1437708</span>
                    </div>
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionHeader
                        eyebrow="WHO WE ARE"
                        title="More Than a Company, A *Movement*"
                    />
                    <div className="space-y-5 mt-6 text-white/60 text-[15px] leading-relaxed">
                        <p>
                            Wevans Global Ltd is a registered private company limited by shares, incorporated on <strong className="text-cream">September 12, 2017</strong>, under the Companies and Allied Matters Act 1990. Headquartered in Port Harcourt, Rivers State, and registered with the <strong className="text-cream">Corporate Affairs Commission (RC: 1437708)</strong>, we have grown into a trusted multi-service institution.
                        </p>
                        <p>
                            Our foundation was built on a single belief: that Nigerians deserve access to world-class financial tools, career opportunities, and seamless travel experiences, all without compromise. From our base in the South-South, we have expanded our reach across Nigeria with offices in Umuahia, Owerri, and Abuja, with our sights firmly set on the global stage.
                        </p>
                        <p>
                            Today, Wevans Global operates across three core industries: Fintech, Recruitment, and Travel & Tour, serving hundreds of individuals and corporate clients who trust us to deliver real, lasting results.
                        </p>
                    </div>

                    {/* Fact Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { label: 'Founded', value: '2017' },
                            { label: 'RC Number', value: '1437708' },
                            { label: 'Status', value: 'Active' },
                            { label: 'HQ', value: 'Port Harcourt' },
                        ].map(item => (
                            <div key={item.label} className="border-l-2 border-maroon/40 pl-3">
                                <p className="text-[10px] uppercase tracking-[2px] text-gold">{item.label}</p>
                                <p className="text-cream font-medium text-[15px]">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
