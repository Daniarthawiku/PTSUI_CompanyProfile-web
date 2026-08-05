import MapView from "@/components/atoms/MapView";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import ProductCardDetail from "@/components/organisms/ProductCardDetail";
import FadeIn from '@/components/atoms/FadeIn';
import StatBadge from "@/components/molecules/StatBadge";
import PageWrapper from '@/components/templates/PageWrapper';
import Section from '@/components/templates/Section';

import { CheckBadgeIcon, CalendarIcon, BuildingOfficeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
  // dummy data for Bare Core product specifications
  const bareCoreSpecs = [
    { label: 'Raw Material', value: 'Albasia Falcata' },
    { label: 'Thickness (mm)', value: '13.0mm - 15.0mm' },
    { label: 'Dimensions (mm)', value: '1220mm x 2440mm (4\' x 8\')' },
  ];

  const blockBoardSpecs = [
    { label: 'Raw Material', value: 'Albasia Barecore, Short Core, and Dry Face/Back' },
    { label: 'Thickness (mm)', value: '15.0mm - 18.0mm (Custom available)' },
    { label: 'Dimensions (mm)', value: '1220mm x 2440mm (4\' x 8\')' },
  ];

  return (
  <PageWrapper className="!pt-0"> 
    <HeroSection />
    
      <Section bgClass="bg-neutral-card border-b border-neutral-border">
        <FadeIn direction="up" delay={0.2} className="flex flex-col md:flex-row justify-between gap-8">
          <StatBadge icon={<CalendarIcon className="w-full h-full" />} value="30+" label="Years Experience" />
          <StatBadge icon={<BuildingOfficeIcon className="w-full h-full" />} value="15k" label="SQM Facility" />
          <StatBadge icon={<GlobeAltIcon className="w-full h-full" />} value="Global" label="Export Network" />
          <StatBadge icon={<CheckBadgeIcon className="w-full h-full" />} value="ISO 9001" label="Certified" />
        </FadeIn>
      </Section>

      <Section>
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">Core Product Lines</h2>
            <p className="text-neutral-text mt-4">Engineered for durability and precision.</p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12">
          <FadeIn direction="right" delay={0.1}>
            <ProductCardDetail 
              title="Bare Core"
              description="Premium Albasia bare core offering exceptional strength-to-weight ratio."
              imageSrc="/images/home/product-bare-core.webp"
              specs={bareCoreSpecs} 
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <ProductCardDetail 
              title="Block Board"
              description="High-density block board engineered for superior screw-holding capacity."
              imageSrc="/images/home/product-block-board.webp"
              specs={blockBoardSpecs} 
              reverse={true}
            />
          </FadeIn>
        </div>
      </Section>

      <Section bgClass="bg-neutral-base">
        <FadeIn direction="up">
          <MapView />
        </FadeIn>
      </Section>

    </PageWrapper>
  );
}