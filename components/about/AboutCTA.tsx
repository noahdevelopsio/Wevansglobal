'use client';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

export default function AboutCTA() {
    return (
        <section className="relative py-24 px-6 md:px-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-[800px] mx-auto text-center"
            >
                <h2 className="font-serif text-4xl md:text-5xl text-cream font-semibold mb-6">
                    Ready to Experience the <span className="text-gold">Wevans Difference?</span>
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                    Join our growing family of clients across Nigeria and beyond.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="white" href="/#services">Explore Our Services</Button>
                    <Button variant="outline" href="/contact">Get In Touch</Button>
                </div>
            </motion.div>
        </section>
    );
}
