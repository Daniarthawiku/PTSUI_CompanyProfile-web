'use client';

import React from 'react';
import Typography from '../atoms/Typography';
import QualityCard from '../molecules/QualityCard';
import FadeIn from '../atoms/framer/FadeIn';
import StaggerContainer from '../atoms/framer/StaggerContainer';
import StaggerItem from '../atoms/framer/StaggerItem';
import TextReveal from '../atoms/framer/TextReveal';
import { QualityControlSectionProps } from '../../types';


export default function QualityControlSection({
    headline,
    description,
    items,
}: QualityControlSectionProps) {
    return (
        <section className="bg-primary-dark p-5 md:p-8 rounded-lg text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Intro Column */}
                <div className="md:col-span-1 space-y-4">
                    <TextReveal>
                        <h2 className="font-serif text-2xl md:text-[28px] font-medium leading-[1.3] text-white">
                            {headline}
                        </h2>
                    </TextReveal>
                    <FadeIn direction="up" delay={0.2}>
                        <Typography variant="custom" tag="p" className="font-sans text-sm leading-relaxed text-primary-soft/90">
                            {description}
                        </Typography>
                    </FadeIn>
                </div>

                {/* Quality Cards Grid */}
                <StaggerContainer
                    className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    delayChildren={0.3}
                    staggerChildren={0.15}
                >
                    {items.map((item, index) => (
                        <StaggerItem key={index}>
                            <QualityCard
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
