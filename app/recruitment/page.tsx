import { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Recruitment & Job Placement',
    description: 'Connecting top talent with global employers across all industries. Professional CV reviews, job matching, and talent sourcing.',
    openGraph: {
        title: 'Recruitment & Job Placement | Wevans Global',
        description: 'Find opportunity or find talent. Whether you are hiring or job-seeking, Wevans Global connects you with the right fit.',
    }
};

const industries = ['Oil & Gas', 'Healthcare', 'Technology', 'Banking & Finance', 'Hospitality', 'Construction', 'Education', 'NGO/Nonprofit', 'Manufacturing', 'Logistics'];

export default function RecruitmentPage() {
    return (
        <main className="bg-[#0D0A0B] min-h-screen">
            <section className="relative pt-40 pb-24 px-6 md:px-16 overflow-hidden border-b border-white/5">
                <div className="max-w-[1280px] mx-auto text-center">
                    <SectionHeader
                        eyebrow="RECRUITMENT SERVICES"
                        title="Your Career. *Our Mission.*"
                        subtitle="We connect the right people with the right opportunities — bridging talent and employers across Nigeria and the global job market."
                        centered={true}
                    />
                </div>
            </section>

            <section className="py-24 px-6 md:px-16">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-surface border border-white/5 p-10 md:p-14 hover:border-maroon/30 transition-colors">
                        <h3 className="font-serif text-[32px] text-gold mb-4">For Job Seekers</h3>
                        <p className="text-secondary mb-8">Whether you're a fresh graduate or a seasoned professional, we provide end-to-end support to land your ideal role.</p>
                        <ul className="flex flex-col gap-4 text-cream">
                            {['Professional CV Review & Rewrite', 'Job Matching & Referrals', 'Interview Preparation', 'Career Coaching & Guidance', 'Post-placement Follow-up'].map(item => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="text-maroon-light">
                                        <CheckCircle2 size={18} strokeWidth={2} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-surface border border-white/5 p-10 md:p-14 hover:border-maroon/30 transition-colors">
                        <h3 className="font-serif text-[32px] text-gold mb-4">For Employers</h3>
                        <p className="text-secondary mb-8">Find the talent that drives your business forward — fast, efficiently, and reliably.</p>
                        <ul className="flex flex-col gap-4 text-cream">
                            {['Talent Sourcing & Headhunting', 'Candidate Screening & Shortlisting', 'HR Consulting & Advisory', 'Onboarding Support'].map(item => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="text-maroon-light">
                                        <CheckCircle2 size={18} strokeWidth={2} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            <section className="py-24 px-6 md:px-16 bg-surface border-y border-white/5">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="font-serif text-4xl text-cream mb-16">How It Works</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-4 relative">
                        <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-white/10 -z-0" />

                        <div className="flex flex-col items-center bg-surface relative z-10 px-6 w-full md:w-1/3">
                            <div className="w-16 h-16 rounded-full bg-[#0D0A0B] border-2 border-maroon flex items-center justify-center text-gold font-display text-2xl mb-6">1</div>
                            <h4 className="font-serif text-xl text-cream mb-2">Register</h4>
                            <p className="text-secondary text-sm">Submit your profile or vacancy</p>
                        </div>
                        <div className="flex flex-col items-center bg-surface relative z-10 px-6 w-full md:w-1/3">
                            <div className="w-16 h-16 rounded-full bg-[#0D0A0B] border-2 border-maroon flex items-center justify-center text-gold font-display text-2xl mb-6">2</div>
                            <h4 className="font-serif text-xl text-cream mb-2">Match</h4>
                            <p className="text-secondary text-sm">We find the perfect fit</p>
                        </div>
                        <div className="flex flex-col items-center bg-surface relative z-10 px-6 w-full md:w-1/3">
                            <div className="w-16 h-16 rounded-full bg-[#0D0A0B] border-2 border-maroon flex items-center justify-center text-gold font-display text-2xl mb-6">3</div>
                            <h4 className="font-serif text-xl text-cream mb-2">Place</h4>
                            <p className="text-secondary text-sm">Successful placement + follow-up</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-16">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="font-sans text-[11px] uppercase tracking-[4px] text-gold mb-10">Industries We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {industries.map(ind => (
                            <span key={ind} className="px-5 py-2 bg-white/[0.03] border border-white/[0.07] text-cream/80 text-[14px]">
                                {ind}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-b from-maroon-dark/20 to-transparent">
                <h2 className="font-serif text-4xl text-cream mb-4">Find Opportunity. Find Talent.</h2>
                <p className="text-secondary mb-10">Whether you're hiring or job-seeking, Wevans Global gets results.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="primary" href="/contact">Submit Your CV</Button>
                    <Button variant="outline" href="/contact">Post a Job Vacancy</Button>
                </div>
            </section>
        </main>
    );
}
