'use client';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { STATS } from '@/lib/constants';

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#0D0A0B]">
            {/* Background Textures */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--color-maroon)_0%,_transparent_70%)] opacity-25 rounded-full translate-x-1/3 -translate-y-1/4" />
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)'
                    }}
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col items-start pt-10">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-gold/30 px-4 py-1.5 rounded-full mb-7">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="text-gold text-[11px] tracking-[3px] uppercase font-medium">Trusted Global Partner</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-display text-[clamp(64px,8vw,110px)] leading-[0.92] tracking-wide mb-6">
                            <span className="text-cream block">BUILDING</span>
                            <span className="text-stroke-maroon block">GLOBAL</span>
                            <span className="text-gold block">FUTURES</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-[17px] text-cream/70 font-light max-w-lg mb-10 leading-relaxed font-sans">
                            Wevans Global empowers individuals and businesses through cutting-edge fintech solutions, world-class recruitment, and seamless travel experiences.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <Button variant="primary" href="#services">Explore Services</Button>
                            <Button variant="outline" href="/contact">Contact Us</Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center justify-center lg:items-end w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] flex items-center justify-center mb-12"
                        >
                            <div className="absolute inset-2 border border-maroon/30 rounded-full animate-spin-slow" />
                            <div className="absolute inset-8 border border-gold/15 rounded-full animate-spin-medium" style={{ animationDirection: 'reverse' }} />
                            <div className="absolute inset-16 border border-maroon/20 rounded-full animate-spin-fast" />

                            <div className="relative w-[180px] h-[180px] bg-surface flex items-center justify-center z-10 shadow-[0_0_40px_rgba(107,15,26,0.3)] border border-white/5">
                                <img src="/logo.svg" alt="Wevans Logo" className="w-[120px] h-[120px] object-contain" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="w-full grid grid-cols-3 gap-2"
                        >
                            {STATS.map((stat) => (
                                <div key={stat.label} className="bg-white/[0.03] border border-white/[0.06] p-5 text-center flex flex-col justify-center transition-colors hover:bg-maroon/10 hover:border-maroon/40 cursor-default">
                                    <span className="font-serif text-[clamp(24px,3vw,36px)] text-gold leading-none mb-1.5 font-semibold">{stat.num}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-muted">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
