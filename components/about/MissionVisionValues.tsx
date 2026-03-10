'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

const cards = [
    {
        title: 'Our Mission',
        body: 'To empower individuals and organizations through innovative financial technology, strategic talent placement, and seamless global mobility solutions, making world-class services accessible to every Nigerian.',
    },
    {
        title: 'Our Vision',
        body: "To be Africa's most trusted multi-service company, a household name synonymous with excellence, integrity, and transformation in fintech, human capital, and travel.",
    },
    {
        title: 'Our Values',
        list: [
            { bold: 'Integrity', desc: 'We do what we say, always' },
            { bold: 'Excellence', desc: 'We deliver beyond expectations' },
            { bold: 'Innovation', desc: 'We embrace better ways of doing things' },
            { bold: 'People-First', desc: 'Our clients and team come first' },
            { bold: 'Global Mindset', desc: 'We think local, act global' },
        ],
    },
];

export default function MissionVisionValues() {
    return (
        <section className="py-24 px-6 md:px-16 bg-surface border-y border-white/5">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <SectionHeader
                        eyebrow="WHAT WE STAND FOR"
                        title="Mission, Vision & *Values*"
                        centered
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="relative p-10 md:p-12 bg-[#0D0A0B] border border-white/5 hover:border-maroon/50 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-maroon to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                            <h3 className="font-serif text-2xl font-semibold text-cream mb-5">{card.title}</h3>

                            {card.body && (
                                <p className="text-white/50 text-[14px] leading-relaxed">{card.body}</p>
                            )}

                            {card.list && (
                                <ul className="space-y-3">
                                    {card.list.map(item => (
                                        <li key={item.bold} className="text-[14px] leading-relaxed">
                                            <strong className="text-cream">{item.bold}</strong>
                                            <span className="text-white/50">: {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
