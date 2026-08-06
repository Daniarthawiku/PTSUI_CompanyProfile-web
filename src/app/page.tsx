import HeroSection from "@/components/organisms/HeroSection";
import FadeIn from '@/components/atoms/FadeIn';
import StatBadge from "@/components/molecules/StatBadge";
import PageWrapper from '@/components/templates/PageWrapper';
import Section from '@/components/templates/Section';
import TeaserProductCard from "@/components/organisms/TeaserProductCard";

import { CheckBadgeIcon, CalendarIcon, BuildingOfficeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
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
            <p className="text-neutral-text mt-4 max-w-2xl mx-auto">Engineered for durability and precision, our signature timber products
              form the foundation of high-end furniture and construction worldwide.</p>
          </div>
        </FadeIn>

        <div className="flex flex-row gap-12">
          <FadeIn direction="right" delay={0.1}>
            <TeaserProductCard 
              title="Bare Core"
              description="Premium Albasia bare core offering exceptional strength-to-weight ratio. 
              Calibrated to exact millimeter tolerances for seamless veneer lamination."
              imageSrc="/images/home/product-bare-core.webp"
              href="/products/bare-core"
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <TeaserProductCard 
              title="Block Board"
              description="High-density block board engineered for superior screw-holding capacity and resistance to warping.
              Ideal for heavy-duty cabinetry and architectural applications."
              imageSrc="/images/home/product-block-board.webp"
              href="/products/block-board"
            />
          </FadeIn>
        </div>
      </Section>

      {/* <Section bgClass="bg-neutral-base">
        <FadeIn direction="up">
          <MapView />
        </FadeIn>
      </Section> */}

    </PageWrapper>
  );
}