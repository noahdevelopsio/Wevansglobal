import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    variant: 'primary' | 'outline' | 'white' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}

export default function Button({ variant, size = 'md', href, onClick, children, className = '' }: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center uppercase tracking-[2px] font-medium transition-all duration-300 whitespace-nowrap';

    const variants = {
        primary: 'bg-gradient-to-br from-maroon-dark to-maroon-light text-cream shadow-[0_8px_30px_rgba(107,15,26,0.4)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(107,15,26,0.6)]',
        outline: 'border border-gold/40 text-gold bg-transparent hover:bg-gold/10 hover:border-gold',
        white: 'bg-cream text-maroon-dark font-semibold hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]',
        ghost: 'border border-cream/40 text-cream bg-transparent hover:bg-cream/10 hover:border-cream',
    };

    const sizes = {
        sm: 'px-6 py-2.5 text-[11px]',
        md: 'px-10 py-4 text-[13px]',
        lg: 'px-12 py-5 text-[14px]',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
