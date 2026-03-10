'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    number: string;
    icon: LucideIcon;
    name: string;
    description: string;
    tags: string[];
    href: string;
}

export default function ServiceCard({ number, icon: Icon, name, description, tags, href }: ServiceCardProps) {
    return (
        <motion.div
            whileFocus="hover"
            whileHover="hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative bg-surface border border-white/5 p-10 md:p-14 overflow-hidden transition-colors duration-500 hover:border-maroon/50 group"
        >
            <motion.div
                variants={{ hover: { scaleX: 1 } }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-maroon to-gold"
            />

            <span className="absolute top-6 right-6 md:top-10 md:right-10 font-display text-[80px] text-white/[0.03] leading-none select-none group-hover:text-maroon/[0.12] transition-colors duration-500">
                {number}
            </span>

            <div className="w-16 h-16 bg-maroon-dark/50 border border-maroon/40 flex items-center justify-center text-2xl mb-8 group-hover:bg-maroon/40 transition-colors duration-300 text-gold">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <h3 className="font-serif text-[34px] font-semibold text-cream mb-4 leading-none">
                {name}
            </h3>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8 relative z-10">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-9 relative z-10">
                {tags.map((tag) => (
                    <span key={tag} className="px-3.5 py-1 text-[11px] uppercase tracking-[1.5px] border border-maroon/50 text-white/50 bg-maroon/10">
                        {tag}
                    </span>
                ))}
            </div>

            <Link href={href} className="inline-flex items-center gap-2.5 text-gold text-xs uppercase tracking-widest font-medium hover:gap-5 transition-all duration-300 relative z-10">
                Explore {name}
                <ArrowRight size={14} />
            </Link>
        </motion.div>
    );
}
