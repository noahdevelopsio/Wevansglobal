import React from 'react';
import { Sparkles } from 'lucide-react';

const items = [
    'Fintech Solutions',
    'Global Recruitment',
    'Travel & Tour',
    'Investment Advisory',
    'Visa Processing',
    'Talent Placement',
    'Forex Trading',
    'Tour Packages',
];

export default function MarqueeBand() {
    // Duplicating the items enough times to create a seamless infinite scroll effect
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="overflow-hidden bg-maroon border-y border-gold/20 py-3.5 relative">
            <div className="flex whitespace-nowrap animate-marquee w-max select-none">
                {repeatedItems.map((item, idx) => (
                    <div key={idx} className="inline-flex items-center gap-5 px-5 lg:px-10">
                        <span className="text-cream/80 text-[12px] uppercase tracking-[3px] font-medium font-sans">
                            {item}
                        </span>
                        <div className="text-gold opacity-80">
                            <Sparkles size={12} strokeWidth={2} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
