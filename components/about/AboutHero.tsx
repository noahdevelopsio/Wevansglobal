'use client';
import { motion } from 'framer-motion';

const stats = [
    { num: '2017', label: 'Year Founded' },
    { num: 'RC 1437708', label: 'CAC Registration' },
    { num: '4', label: 'Office Locations' },
    { num: '3', label: 'Core Industries' },
];

export default function AboutHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(107,15,26,0.25)_0%,transparent_70%)]" />
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
            }} />

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 text-center py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <div className="w-10 h-[1px] bg-gold" />
                    <span className="text-gold text-[11px] uppercase tracking-[4px] font-medium">Our Story</span>
                    <div className="w-10 h-[1px] bg-gold" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-display text-[60px] md:text-[100px] leading-[0.95] tracking-tight mb-8"
                >
                    Built on Purpose.
                    <br />
                    Driven by <span className="text-gold">Results.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16"
                >
                    Since 2017, Wevans Global has been empowering Nigerians and businesses worldwide through trusted fintech, recruitment, and travel services, backed by integrity and registered with the Corporate Affairs Commission.
                </motion.p>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl mx-auto"
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white/[0.03] border border-white/[0.06] py-5 px-4 text-center hover:bg-maroon/15 hover:border-maroon/40 transition-all duration-300">
                            <p className="font-serif text-2xl md:text-3xl text-cream font-semibold">{stat.num}</p>
                            <p className="text-white/40 text-[11px] uppercase tracking-[2px] mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
