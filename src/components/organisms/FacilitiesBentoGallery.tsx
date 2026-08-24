"use client";

import React from 'react';
import Section from '../templates/Section';
import FadeIn from '../atoms/framer/FadeIn';
import ScaleIn from '../atoms/framer/ScaleIn';
import BentoImageCard from '../molecules/BentoImageCard';
import BentoInfoCard from '../molecules/BentoInfoCard';

export default function FacilitiesBentoGallery() {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                {/* Large image — Main Production Floor (col-span-8, row-span-2) */}
                <FadeIn
                    direction="up"
                    delay={0.1}
                    className="col-span-1 md:col-span-8 md:row-span-2"
                >
                    <BentoImageCard
                        imageSrc="/images/facilities/floor-plan.webp"
                        imageAlt="A wide, high-angle shot of a massive, modern timber manufacturing facility interior with rows of advanced heavy machinery"
                        title="Main Production Floor"
                        className="w-full h-full"
                    />
                </FadeIn>

                {/* Top-right image — Automated Cutting (col-span-4, row-span-1) */}
                <FadeIn
                    direction="left"
                    delay={0.25}
                    className="col-span-1 md:col-span-4 md:row-span-1"
                >
                    <BentoImageCard
                        imageSrc="/images/facilities/machine-cutting.webp"
                        imageAlt="A detailed close-up of a high-tech automated wood cutting saw slicing precisely through raw timber"
                        badgeLabel="Machinery"
                        className="w-full h-full bg-neutral-card"
                    />
                </FadeIn>

                {/* Bottom-right card — Strategic Location (col-span-4, row-span-1) */}
                <ScaleIn
                    delay={0.4}
                    className="col-span-1 md:col-span-4 md:row-span-1"
                >
                    <BentoInfoCard
                        title="Strategic Location"
                        description="Situated near major export hubs, ensuring streamlined logistics and timely global delivery."
                        linkText="View Map"
                        linkHref="/contact"
                        className="w-full h-full"
                    />
                </ScaleIn>
            </div>
        </Section>
    );
}
