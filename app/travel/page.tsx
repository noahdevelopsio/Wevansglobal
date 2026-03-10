import { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';
import { MapPin, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Travel & Tour Services',
    description: 'Stress-free travel planning: visa processing, flights, hotel reservations, and curated tour packages for individuals and groups.',
    openGraph: {
        title: 'Travel & Tour Services | Wevans Global',
        description: 'Explore the world stress-free. From visa applications to fully managed tour packages, Wevans Global takes care of every step of your journey.',
    }
};

const travelServices = [
    { title: 'Visa Processing', desc: 'UK, Schengen, UAE, US, Canada & more — we handle the paperwork, you pack your bags' },
    { title: 'Flight Booking', desc: 'Best-price airfare with flexible options across major airlines worldwide' },
    { title: 'Hotel Reservations', desc: 'Carefully vetted accommodations to suit every budget and preference' },
    { title: 'Tour Packages', desc: 'Curated group and private tours both locally and internationally' },
    { title: 'Travel Insurance', desc: 'Comprehensive coverage to keep you protected wherever you travel' },
    { title: 'Airport Transfers', desc: 'Reliable ground transport so your journey starts and ends smoothly' },
];

const destinations = [
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'London', flag: '🇬🇧' },
    { name: 'Paris', flag: '🇫🇷' },
    { name: 'Cape Town', flag: '🇿🇦' },
    { name: 'Abuja', flag: '🇳🇬' },
    { name: 'Lagos', flag: '🇳🇬' },
];

const testimonials = [
    { text: "Wevans Global made our Dubai trip absolutely seamless. Visa done in record time!", author: "Emeka O.", location: "Lagos" },
    { text: "Professional, responsive, and incredibly thorough. Best travel agency I've worked with.", author: "Blessing A.", location: "Port Harcourt" },
    { text: "They handled everything for our group tour to London. Zero stress from start to finish.", author: "Chidi N.", location: "Abuja" },
];

export default function TravelPage() {
    return (
        <main className="bg-[#0D0A0B] min-h-screen">
            <section className="relative pt-40 pb-24 px-6 md:px-16 overflow-hidden border-b border-white/5 bg-gradient-to-b from-maroon/10 to-[#0D0A0B]">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="max-w-[1280px] mx-auto relative z-10 text-center">
                    <SectionHeader
                        eyebrow="TRAVEL & TOUR"
                        title="Explore the World *Stress-Free.*"
                        subtitle="From visa applications to fully managed tour packages, Wevans Global takes care of every step of your journey — so you can focus on the experience."
                        centered={true}
                    />
                </div>
            </section>

            <section className="py-24 px-6 md:px-16">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {travelServices.map((service, i) => (
                            <div key={i} className="bg-surface border border-white/5 p-10 hover:border-gold/30 transition-colors">
                                <span className="text-gold font-display text-4xl block mb-4">0{i + 1}</span>
                                <h3 className="font-serif text-2xl text-cream mb-4">{service.title}</h3>
                                <p className="font-sans text-secondary leading-relaxed text-[15px]">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-16 bg-surface border-y border-white/5">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="font-serif text-4xl text-cream mb-12">Popular Destinations</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {destinations.map(dest => (
                            <div key={dest.name} className="flex items-center gap-3 px-6 py-4 bg-[#0D0A0B] border border-white/5 hover:border-maroon/40 transition-colors">
                                <div className="text-gold">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <span className="font-sans font-medium text-cream">{dest.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-16">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="font-sans text-[11px] uppercase tracking-[4px] text-gold mb-16">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((test, i) => (
                            <div key={i} className="bg-surface border border-white/5 p-8 text-left h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-gold mb-4 flex gap-1 cursor-default select-none">
                                        {[1, 2, 3, 4, 5].map((_, j) => <Star key={j} className="fill-gold" size={16} strokeWidth={0} />)}
                                    </div>
                                    <p className="text-secondary italic mb-8">"{test.text}"</p>
                                </div>
                                <div>
                                    <p className="font-sans text-cream font-medium">{test.author}</p>
                                    <p className="text-muted text-sm">{test.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-b from-maroon-dark/20 to-transparent">
                <h2 className="font-serif text-4xl text-cream mb-4">Where Do You Want to Go Next?</h2>
                <p className="text-secondary mb-10">Let's plan your perfect trip together.</p>
                <Button variant="primary" href="/contact">Plan My Trip</Button>
            </section>
        </main>
    );
}
