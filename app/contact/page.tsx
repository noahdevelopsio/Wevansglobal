import { Metadata } from 'next';
import ContactForm from '@/components/shared/ContactForm';
import SectionHeader from '@/components/shared/SectionHeader';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Wevans Global team for inquiries about fintech, recruitment, or travel services.',
    openGraph: {
        title: 'Contact Us | Wevans Global',
        description: 'Have questions? Ready to get started? Reach out to Wevans Global through email, phone, or visit our offices.',
    }
};

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 bg-[#0D0A0B] min-h-screen">
            <div className="max-w-[1280px] mx-auto px-6 md:px-16">
                <SectionHeader
                    eyebrow="GET IN TOUCH"
                    title="We'd Love to *Hear From You*"
                    subtitle="Have questions? Ready to get started? Reach out through any of the options below."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-16">

                    <div className="bg-surface border border-white/5 p-8 md:p-12">
                        <h3 className="font-serif text-3xl text-cream mb-8">Contact Information</h3>
                        <ul className="flex flex-col gap-8 text-secondary text-[16px]">
                            <li className="flex items-start gap-4">
                                <div className="text-gold mt-0.5">
                                    <Mail size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="block text-cream font-medium mb-1">Email Us</span>
                                    <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">{CONTACT.email}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="text-gold mt-0.5">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="block text-cream font-medium mb-1">Call Us</span>
                                    <a href={`tel:${CONTACT.phone.replace(/ /g, '')}`} className="hover:text-gold transition-colors">{CONTACT.phone}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="text-gold mt-0.5">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="block text-cream font-medium mb-1">Visit Us</span>
                                    <span className="leading-relaxed">{CONTACT.location}<br />Offices in Lagos / Port Harcourt</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-surface border border-white/5 p-8 md:p-12">
                        <h3 className="font-serif text-3xl text-cream mb-8">Send a Message</h3>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </main>
    );
}
