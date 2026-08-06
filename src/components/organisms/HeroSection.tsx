"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from '../atoms/framer/FadeIn';
import TextReveal from '../atoms/framer/TextReveal';
import Typography from '../atoms/Typography';

export default function HeroSection() {
    return (
    <section 
        className="relative w-full h-[600px] md:h-[700px] flex items-center bg-cover bg-bottom"
        style={{ backgroundImage: "url('/images/home/hero-home.webp')" }}>
        {/* dark overlay*/}
        <div className="absolute inset-0 bg-primary-dark/55"></div>

        {/* content & button */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-neutral-base">
            <FadeIn direction="left" delay={0.1}>
                <TextReveal>
                    <Typography variant="h3" className="text-4xl md:text-6xl mb-6">
                        Premium Timber Solutions for Global Markets
                    </Typography>
                </TextReveal>
                <Typography variant="custom" className="font-sans text-lg md:text-xl max-w-2xl mb-10 text-neutral-border">
                Over 10+ years of manufacturing excellence, delivering sustainable, high-precision Bare Core and 
                Block Board to the worlds most demanding industries.
                </Typography>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products" className="btn btn-primary border-none bg-primary hover:bg-primary-mid text-white 
                    rounded-md px-8 font-sans font-semibold">
                    View Products
                    </Link>
                
                    <Link href="/contact" className="btn btn-outline border-neutral-base text-neutral-base hover:bg-neutral-base
                    hover:text-primary-dark rounded-md px-8 font-sans font-semibold">
                    Consult with Us
                    </Link>
                </div>
            </FadeIn>
        </div>
    </section>
    );
}