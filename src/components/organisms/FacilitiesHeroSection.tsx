"use client";

import React from 'react';
import Section from '../templates/Section';
import FadeIn from '../atoms/framer/FadeIn';
import TextReveal from '../atoms/framer/TextReveal';
import Typography from '../atoms/Typography';
import StatCounter from '../molecules/StatCounter';
import StaggerContainer from '../atoms/framer/StaggerContainer';
import StaggerItem from '../atoms/framer/StaggerItem';

const STATS = [
    { value: '15k', label: 'SQM Land Area' },
    { value: '10+', label: 'Production Lines' },
];

export default function FacilitiesHeroSection() {
    return (
    <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left — Headline & Description */}
            <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
                <FadeIn direction="up">
                    <TextReveal>
                        <Typography
                            variant="h1"
                            className="!text-3xl md:!text-5xl lg:!text-6xl !leading-tight mb-4"
                        >
                            World-Class Manufacturing Infrastructure
                        </Typography>
                    </TextReveal>
                </FadeIn>

                <FadeIn direction="up" delay={0.15}>
                    <Typography
                        variant="body"
                        className="max-w-2xl text-neutral-text/80 text-lg leading-relaxed"
                    >
                        At PT. Sahabat Utama Industri, precision meets scale. Our expansive
                        facilities are engineered for maximum efficiency, ensuring every timber
                        product meets rigorous international standards.
                    </Typography>
                </FadeIn>
            </div>

            {/* Right — Stat Counters */}
            <div className="col-span-1 md:col-span-4 flex items-end justify-start md:justify-end">
                <StaggerContainer className="flex gap-8 mt-6 md:mt-0" delayChildren={0.3} staggerChildren={0.2}>
                    {STATS.map((stat) => (
                        <StaggerItem key={stat.label}>
                            <StatCounter value={stat.value} label={stat.label} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    </Section>
    );
}
