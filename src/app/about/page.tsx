import React from 'react';
import Image from 'next/image';
import PageWrapper from '@/components/templates/PageWrapper';
import Section from '@/components/templates/Section';
import FadeIn from '@/components/atoms/framer/FadeIn';
import Badge from '@/components/atoms/Badge';
import CertCard from '@/components/molecules/CertCard';
import Typography from '@/components/atoms/Typography';
import { ShieldCheckIcon, DocumentCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import TextReveal from '@/components/atoms/framer/TextReveal';
import StaggerContainer from '@/components/atoms/framer/StaggerContainer';
import StaggerItem from '@/components/atoms/framer/StaggerItem';

export default function AboutPage() {
    return (
    <PageWrapper className="!pt-0">
    
        {/* hero section */}
        <Section className="">
            <div className="py-[80px] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="col-span-1 md:col-span-7 flex flex-col gap-8">
                    <FadeIn direction="up">
                        <Typography variant="h1">
                            Crafting Nature’s Precision for Global Industry.
                        </Typography>
                    </FadeIn>
            
                    <FadeIn direction="up" delay={0.1}>
                        <Typography variant="body" className="max-w-2xl">
                            For over 10+ years, PT. Sahabat Utama Industri has transformed raw, sustainable timber into the structural 
                            backbone of international trade. We are the architects of reliability.
                        </Typography>
                    </FadeIn>
            
                    <FadeIn direction="up" delay={0.2}>
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Badge>Est. 2015</Badge>
                            <Badge>ISO 9001 Certified</Badge>
                        </div>
                    </FadeIn>
                </div>

                <div className="col-span-1 md:col-span-5 h-[400px] w-full overflow-hidden bg-surface-card
                relative border border-border-muted mt-stack-lg md:mt-0">
                    <FadeIn direction="left" delay={0.3} className="w-full h-full">
                        <Image 
                            src="/images/about/about-sanding.webp" 
                            alt="Timber processing facility" 
                            fill 
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority/>
                    </FadeIn>
                </div>
            </div>
        </Section>

        {/* vision & mission */}
        <Section bgClass="bg-primary-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                <FadeIn direction="right" delay={0.1}>
                    <TextReveal className="flex flex-col gap-4 p-8 border-l-2 border-primary-soft">
                        <Typography variant="custom" className="font-serif text-3xl font-medium text-neutral-base">Our Vision</Typography>
                        <Typography variant="custom" className="font-sans text-lg leading-[1.6] text-neutral-base/90">
                            To be the premier global standard in sustainable industrial timber manufacturing, proving that uncompromising 
                            precision can coexist with profound environmental stewardship.
                        </Typography>
                    </TextReveal>
                </FadeIn>

                <FadeIn direction="left" delay={0.1}>
                    <TextReveal className="flex flex-col gap-4 p-8 border-l-2 border-primary-soft">
                        <Typography variant="custom" className="font-serif text-3xl font-medium text-neutral-base">Our Mission</Typography>
                        <Typography variant="custom" className="font-sans text-lg leading-[1.6] text-neutral-base/90">
                            We engineer high-performance wood products through rigorous quality control, empower our local workforce with 
                            world-class technical expertise, and strictly adhere to international ecological compliance protocols.
                        </Typography>
                    </TextReveal>
                </FadeIn>

            </div>
        </Section>

        {/* compliance & certification */}
        <Section className="py-[80px]">
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