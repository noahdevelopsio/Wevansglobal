import Hero from '@/components/home/Hero';
import MarqueeBand from '@/components/home/MarqueeBand';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import CtaBand from '@/components/home/CtaBand';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <CtaBand />
    </main>
  );
}
