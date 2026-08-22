'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn from '../atoms/framer/FadeIn';
import ScaleIn from '../atoms/framer/ScaleIn';
import TextReveal from '../atoms/framer/TextReveal';
import { ProductHeroSectionProps } from '../../types';

export default function ProductHeroSection({
    headline,
    description,
    imageSrc,
    imageAlt,
}: ProductHeroSectionProps) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Text Column */}
            <div className="space-y-8">
                <TextReveal>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold text-primary-dark leading-[1.1] tracking-[-0.02em]">
                        {headline}
                    </h1>
                </TextReveal>
                <FadeIn direction="up" delay={0.3}>
                    <p className="font-sans text-lg leading-relaxed text-neutral-text/70 max-w-xl">
                        {description}
                    </p>
                </FadeIn>
            </div>

            {/* Image Column */}
            <ScaleIn delay={0.2}>
                <div className="h-96 w-full rounded-lg overflow-hidden border border-neutral-border relative">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary-dark/10" />
                </div>
            </ScaleIn>
        </section>
    );
}
