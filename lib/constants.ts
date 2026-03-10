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
    MapPin,
    Building2
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
    { label: 'About', href: '/about' },
    { label: 'Fintech', href: '/fintech' },
    { label: 'Recruitment', href: '/recruitment' },
    { label: 'Travel', href: '/travel' },
    { label: 'Contact', href: '/contact' },
];

export const CONTACT = {
    email: 'info@wevansglobal.com',
    phone: '+2348160592607',
    location: 'Port Harcourt, Rivers State',
    facebook: 'https://web.facebook.com/profile.php?id=100066593572733',
};

export const WHY_FEATURES = [
    { icon: Globe2, title: 'Global Network', desc: 'Partnerships across Nigeria, UK, UAE, Canada, and beyond' },
    { icon: ShieldCheck, title: 'Secure & Transparent', desc: 'Every transaction and process is handled with complete integrity' },
    { icon: Zap, title: 'Fast Turnaround', desc: 'From consultation to delivery, we move with purpose and speed' },
    { icon: Award, title: 'Proven Results', desc: 'Hundreds of success stories across fintech, recruitment, and travel' },
];

export const OFFICES = [
    { city: 'Port Harcourt', state: 'Rivers State', address: '500102 Port Harcourt, Rivers State', isHQ: true },
    { city: 'Umuahia', state: 'Abia State', address: 'WG, Plot 12 Bank Road, Umuahia, Abia State', isHQ: false },
    { city: 'Owerri', state: 'Imo State', address: 'WG, Alvan Ikoku Road, Owerri, Imo State', isHQ: false },
    { city: 'Abuja', state: 'FCT', address: 'WG, Lugbe, Abuja', isHQ: false },
];

export const REGISTRATION_DATA = [
    { label: 'Full Company Name', value: 'Wevans Global Ltd' },
    { label: 'Registration Number', value: 'RC 1437708' },
    { label: 'Date of Incorporation', value: 'September 12, 2017' },
    { label: 'Legal Structure', value: 'Private Company Limited by Shares' },
    { label: 'Incorporating Act', value: 'Companies and Allied Matters Act 1990' },
    { label: 'Registrar', value: 'Corporate Affairs Commission (CAC)' },
    { label: 'Registrar General', value: 'Bello Mahmud' },
    { label: 'Status', value: 'Active' },
    { label: 'Headquarters', value: 'Port Harcourt, Rivers State, Nigeria' },
];
