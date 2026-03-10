import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVisionValues from '@/components/about/MissionVisionValues';
import Leadership from '@/components/about/Leadership';
import ThreePillars from '@/components/about/ThreePillars';
import Offices from '@/components/about/Offices';
import Registration from '@/components/about/Registration';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Wevans Global Ltd, incorporated in 2017, RC 1437708. A Nigerian company delivering Fintech, Recruitment, and Travel services across Africa and beyond.',
    openGraph: {
        title: 'About Wevans Global Ltd | Registered Nigerian Multi-Service Company',
        description: 'Incorporated in 2017, RC 1437708. Learn about our mission, leadership, and four office locations across Nigeria.',
    }
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <CompanyStory />
            <MissionVisionValues />
            <Leadership />
            <ThreePillars />
            <Offices />
            <Registration />
            <AboutCTA />
        </main>
    );
}
