import Button from '../shared/Button';

export default function CtaBand() {
    return (
        <section className="relative bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light py-24 px-6 md:px-16 text-center overflow-hidden">
            {/* Watermark W */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(280px,30vw,400px)] text-white/[0.04] pointer-events-none select-none leading-none z-0">
                W
            </span>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light text-cream leading-[1.1]">
                    Ready to Take the Next <strong className="font-bold">Step?</strong>
                </h2>
                <p className="font-sans text-cream/80 text-[17px] mt-6 mb-12 max-w-xl">
                    Join hundreds of individuals and businesses already growing with Wevans Global.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button variant="white" href="/contact">Get Started Today</Button>
                    <Button variant="ghost" href="#services">Learn More</Button>
                </div>
            </div>
        </section>
    );
}
