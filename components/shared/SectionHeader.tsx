import React from 'react';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
    const parseTitle = (text: string) => {
        const parts = text.split('*');
        return parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} className="text-gold font-bold">{part}</strong> : part
        );
    };

    return (
        <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} mb-14`}>
            <div className="font-sans font-medium text-[11px] uppercase tracking-[4px] text-gold flex items-center gap-[14px] mb-5">
                <span className="w-10 h-[1px] bg-gold" />
                {eyebrow}
            </div>
            <h2 className="font-serif text-[40px] md:text-[60px] leading-[1.1] text-cream font-light">
                {parseTitle(title)}
            </h2>
            {subtitle && (
                <p className="font-sans text-white/70 text-[17px] mt-6 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
