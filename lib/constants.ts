import {
    LineChart,
    Users,
    Plane,
    Globe2,
    ShieldCheck,
    Zap,
    Award,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

export const SERVICES = [
    {
        number: '01',
        icon: LineChart,
        name: 'Fintech',
        href: '/fintech',
        description: 'We deliver powerful financial tools, from trading platforms to investment guidance, helping you grow and protect your wealth in a dynamic global market.',
        tags: ['Trading', 'Investment', 'Financial Advisory', 'Forex'],
    },
    {
        number: '02',
        icon: Users,
        name: 'Recruitment',
        href: '/recruitment',
        description: 'We connect skilled professionals with top-tier local and international employers. Whether you\'re hiring or seeking opportunity, we make the match happen.',
        tags: ['Talent Sourcing', 'CV Review', 'Job Placement', 'HR Consulting'],
    },
    {
        number: '03',
        icon: Plane,
        name: 'Travel & Tour',
        href: '/travel',
        description: 'From visa processing to curated tour packages, we handle every detail of your journey, making international and local travel stress-free and memorable.',
        tags: ['Visa Processing', 'Tour Packages', 'Flight Booking', 'Hotel'],
    },
];

export const STATS = [
    { num: '500+', label: 'Clients Served' },
    { num: '3', label: 'Core Services' },
    { num: '5+', label: 'Years Experience' },
];

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Fintech', href: '/fintech' },
    { label: 'Recruitment', href: '/recruitment' },
    { label: 'Travel', href: '/travel' },
    { label: 'Contact', href: '/contact' },
];

export const CONTACT = {
    email: 'info@wevansglobal.com',
    phone: '+234 000 000 0000',
    location: 'Nigeria',
    facebook: 'https://web.facebook.com/profile.php?id=100066593572733',
};

export const WHY_FEATURES = [
    { icon: Globe2, title: 'Global Network', desc: 'Partnerships across Nigeria, UK, UAE, Canada, and beyond' },
    { icon: ShieldCheck, title: 'Secure & Transparent', desc: 'Every transaction and process is handled with complete integrity' },
    { icon: Zap, title: 'Fast Turnaround', desc: 'From consultation to delivery, we move with purpose and speed' },
    { icon: Award, title: 'Proven Results', desc: 'Hundreds of success stories across fintech, recruitment, and travel' },
];
