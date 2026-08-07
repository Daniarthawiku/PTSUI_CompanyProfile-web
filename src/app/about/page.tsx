import React from 'react';
import PageWrapper from '@/components/templates/PageWrapper';
import Section from '@/components/templates/Section';
import FadeIn from '@/components/atoms/framer/FadeIn';
import CertCard from '@/components/molecules/CertCard';
import Typography from '@/components/atoms/Typography';
import { ShieldCheckIcon, DocumentCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import StaggerContainer from '@/components/atoms/framer/StaggerContainer';
import StaggerItem from '@/components/atoms/framer/StaggerItem';
import HeroSection from '@/components/organisms/AboutHeroSection';
import VisionMisson from '@/components/organisms/AboutVisionMisson';

export default function AboutPage() {
    return (
    <PageWrapper>
        <HeroSection/>
        <VisionMisson/>
        
        {/* compliance & certification */}
        <Section>
            <FadeIn direction="up">
                <div className="flex flex-col gap-2 mb-8">
                    <Typography variant="custom" className="font-serif text-4xl font-semibold text-primary">Uncompromising Compliance</Typography>
                    <Typography variant="custom" className="font-sans text-lg leading-[1.6] text-neutral-text max-w-3xl">
                        Trust in international B2B trade requires absolute transparency. We hold ourselves to the highest national and 
                        international regulatory standards, ensuring every product is ethically sourced and legally verified.
                    </Typography>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <StaggerItem>
                    <CertCard 
                        icon={<ShieldCheckIcon className="w-full h-full" />}
                        title="AMDAL Certified"
                        description="Our Environmental Impact Analysis (AMDAL) guarantees our large-scale operations maintain strict
                        ecological balance, minimizing footprint while maximizing efficiency."/>
                </StaggerItem>

                <StaggerItem>
                    <CertCard 
                        icon={<SparklesIcon className="w-full h-full" />}
                        title="UKL-UPL Standard"
                    description="Continuous environmental management and monitoring programs are actively enforced across all our 
                    processing facilities to safeguard local ecosystems."/>
                </StaggerItem>

                <StaggerItem>
                    <CertCard 
                        icon={<DocumentCheckIcon className="w-full h-full" />}
                        title="IHPA Compliant"
                        description="Aligned with the International Wood Products Association, ensuring all exports meet stringent 
                        international legality, quality, and grading requirements."/>
                </StaggerItem>
            </StaggerContainer>
        </Section>
    </PageWrapper>
    );
}