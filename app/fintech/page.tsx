import { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
    title: 'Fintech & Investment Services',
    description: 'Expert financial advisory, forex trading, and asset management. Navigate global financial markets with confidence and secure your future.',
    openGraph: {
        title: 'Fintech & Investment Services | Wevans Global',
        description: 'Empowering your wealth with expert trading strategies and investment portfolios.',
    }
};

const fintechServices = [
    { title: 'Forex Trading', desc: 'Access global currency markets with real-time data and expert guidance to maximise your returns' },
    { title: 'Investment Advisory', desc: 'Tailored investment strategies built around your financial goals, risk tolerance, and timeline' },
    { title: 'Trading Education', desc: 'Structured courses and one-on-one mentorship for traders at every level' },
    { title: 'Portfolio Management', desc: 'Let our experts actively grow and protect your asset portfolio' },
    { title: 'Financial Planning', desc: 'Map your financial future with clarity — retirement, savings, and wealth-building plans' },
    { title: 'Crypto & Digital Assets', desc: 'Navigate the digital asset market safely with our guidance and market insights' },
];

export default function FintechPage() {
    return (
        <main className="bg-[#0D0A0B] min-h-screen">
            <section className="relative pt-40 pb-24 px-6 md:px-16 overflow-hidden border-b border-white/5 bg-gradient-to-b from-maroon/10 to-[#0D0A0B]">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="max-w-[1280px] mx-auto relative z-10 text-center">
                    <SectionHeader
                        eyebrow="FINTECH SERVICES"
                        title="Trade Smarter. *Invest Wiser.*"
                        subtitle="Wevans Global provides the tools, guidance, and platforms to help you navigate global financial markets with confidence — whether you're a beginner or an experienced investor."
                        centered={true}
                    />
                </div>
            </section>

            <section className="py-24 px-6 md:px-16">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fintechServices.map((service, i) => (
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
                    <h2 className="font-serif text-4xl text-cream mb-16">Our Process</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-4 relative">
                        <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-white/10 -z-0" />

                        {['Consultation', 'Strategy Setup', 'Growth & Monitoring'].map((step, i) => (
                            <div key={i} className="flex flex-col items-center bg-surface relative z-10 px-8 w-full md:w-1/3">
                                <div className="w-16 h-16 rounded-full bg-[#0D0A0B] border-2 border-maroon flex items-center justify-center text-gold font-display text-2xl mb-6">
                                    {i + 1}
                                </div>
                                <h4 className="font-serif text-xl text-cream">{step}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-b from-maroon-dark/20 to-transparent">
                <h2 className="font-serif text-4xl text-cream mb-8">Ready to start your investment journey?</h2>
                <Button variant="primary" href="/contact">Book a Free Consultation</Button>
            </section>
        </main>
    );
}
