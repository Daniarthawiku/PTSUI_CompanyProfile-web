"use client";

import React from 'react';
import Section from '../templates/Section';
import FadeIn from '../atoms/framer/FadeIn';
import TextReveal from '../atoms/framer/TextReveal';
import Typography from '../atoms/Typography';

export default function ExportHeroSection() {
    return (
    <Section className="py-8">
        <div className="max-w-4xl">
            <FadeIn direction="up">
                <TextReveal>
                    <Typography
                        variant="h1"
                        className="!text-3xl md:!text-5xl lg:!text-6xl !leading-tight mb-4"
                    >
                        Global Export Expertise
                    </Typography>
                </TextReveal>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
                <Typography
                    variant="body"
                    className="max-w-3xl text-neutral-text/70 text-lg leading-relaxed"
                >
                    Delivering premium timber products worldwide with precision, reliability,
                    and adherence to international trade regulations. Partner with PT. Sahabat
                    Utama Industri for seamless logistics and secure transactions.
                </Typography>
            </FadeIn>
        </div>
    </Section>
    );
}
