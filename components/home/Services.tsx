'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import ServiceCard from '../shared/ServiceCard';
import { SERVICES } from '@/lib/constants';

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 md:px-16 bg-[#0D0A0B]">
            <div className="max-w-[1280px] mx-auto">
                <SectionHeader
                    eyebrow="WHAT WE OFFER"
                    title="Our Core *Services*"
                    centered={false}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="h-full flex"
                        >
                            <div className="h-full w-full">
                                <ServiceCard {...service} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
