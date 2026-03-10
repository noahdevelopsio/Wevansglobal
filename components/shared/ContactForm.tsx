'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    service: string;
    message: string;
};

export default function ContactForm() {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call delay naturally
        await new Promise(resolve => setTimeout(resolve, 800));
        setSuccess(true);
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white/[0.02] border border-white/5"
            >
                <div className="w-16 h-16 rounded-full bg-maroon/20 text-gold flex items-center justify-center mb-6 border border-maroon/40">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-serif text-3xl text-cream mb-4">Message Received</h3>
                <p className="text-white/60">Thank you! Your message has been received. We'll be in touch within 24 hours.</p>
            </motion.div>
        );
    }

    const inputClasses = "w-full bg-white/[0.03] border border-white/10 p-4 text-cream font-sans text-[14px] placeholder-white/40 focus:outline-none focus:border-maroon/60 focus:bg-maroon/5 transition-all duration-200 resize-none rounded-none";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        {...register('firstName', { required: 'First name is required' })}
                        placeholder="First Name"
                        className={`${inputClasses} ${errors.firstName ? 'border-red-500/50' : ''}`}
                    />
                    <AnimatePresence>
                        {errors.firstName && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-400 text-xs mt-2">{errors.firstName.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <div>
                    <input
                        {...register('lastName', { required: 'Last name is required' })}
                        placeholder="Last Name"
                        className={`${inputClasses} ${errors.lastName ? 'border-red-500/50' : ''}`}
                    />
                    <AnimatePresence>
                        {errors.lastName && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-400 text-xs mt-2">{errors.lastName.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                        })}
                        placeholder="Email Address"
                        className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                    />
                    <AnimatePresence>
                        {errors.email && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-400 text-xs mt-2">{errors.email.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <div>
                    <input
                        {...register('phone')}
                        placeholder="Phone Number (Optional)"
                        className={inputClasses}
                    />
                </div>
            </div>

            <div>
                <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`${inputClasses} appearance-none ${errors.service ? 'border-red-500/50' : ''}`}
                    defaultValue=""
                >
                    <option value="" disabled className="bg-[#1A1215] text-white/50">Service of Interest</option>
                    <option value="fintech" className="bg-[#1A1215]">Fintech</option>
                    <option value="recruitment" className="bg-[#1A1215]">Recruitment</option>
                    <option value="travel" className="bg-[#1A1215]">Travel & Tour</option>
                    <option value="general" className="bg-[#1A1215]">General Inquiry</option>
                </select>
                <AnimatePresence>
                    {errors.service && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-400 text-xs mt-2">{errors.service.message}</motion.p>
                    )}
                </AnimatePresence>
            </div>

            <div>
                <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Your Message"
                    rows={4}
                    className={`${inputClasses} ${errors.message ? 'border-red-500/50' : ''}`}
                />
                <AnimatePresence>
                    {errors.message && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-400 text-xs mt-2">{errors.message.message}</motion.p>
                    )}
                </AnimatePresence>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-br from-maroon-dark to-maroon-light text-cream font-medium tracking-[2px] uppercase text-[13px] py-4 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(107,15,26,0.5)] transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
