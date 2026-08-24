'use client';

import React from 'react';
import Image from 'next/image';
import Typography from '../atoms/Typography';
import LabelCaps from '../atoms/LabelCaps';
import FadeIn from '../atoms/framer/FadeIn';
import ScaleIn from '../atoms/framer/ScaleIn';
import StaggerContainer from '../atoms/framer/StaggerContainer';
import StaggerItem from '../atoms/framer/StaggerItem';
import { ProductSpec as SpecItem } from '../../types';
import { Product } from '../../types';

interface ProductCardDetailProps {
    title: Product['title'];
    description: Product['description'];
    imageSrc?: Product['imageSrc'];
    specs: SpecItem[];
    features?: React.ReactNode;
    reverse?: Product['isReversedLayout'];
    titleColor?: string;
}


export default function ProductCardDetail({
    title, description, imageSrc, specs, features, reverse = false, titleColor = 'text-primary-dark'
}: ProductCardDetailProps) {
    const cardBg = 'bg-neutral-card border border-neutral-border';

    const tableBg = 'bg-neutral-card';
    const headerBg = 'bg-primary-soft';

    return (
        <FadeIn direction={reverse ? 'right' : 'left'} duration={0.7}>
            <section className={`${cardBg} p-5 md:p-16 rounded-lg`}>
                {/* Decorative blob for reversed variant */}
                {reverse && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-soft rounded-bl-full opacity-50 -z-[1]" />
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6`}>
                    {/* Text + Features Column */}
                    <div className={`lg:col-span-5 space-y-6 ${reverse ? 'order-1 lg:order-2 pl-0 lg:pl-6' : ''}`}>
                        <h2 className={`font-serif text-3xl md:text-[40px] font-semibold leading-[1.2] ${titleColor} border-b border-neutral-border pb-2`}>
                            {title}
                        </h2>

                        <Typography variant="body" className="text-neutral-text/70">
                            {description}
                        </Typography>

                        {/* Feature badges */}
                        {features && (
                            <StaggerContainer className="space-y-2 pt-4" delayChildren={0.2} staggerChildren={0.1}>
                                {React.Children.map(features, (child) => (
                                    <StaggerItem>{child}</StaggerItem>
                                ))}
                            </StaggerContainer>
                        )}

                        {/* Optional image (Block Board variant) */}
                        {imageSrc && reverse && (
                            <ScaleIn delay={0.3}>
                                <div className="h-48 w-full rounded overflow-hidden border border-neutral-border mt-4">
                                    <Image
                                        src={imageSrc}
                                        alt={title}
                                        width={600}
                                        height={300}
                                        className="object-cover w-full h-full"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                </div>
                            </ScaleIn>
                        )}
                    </div>

                    {/* Spec Table Column */}
                    <div className={`lg:col-span-7 ${reverse ? 'order-2 lg:order-1' : ''}`}>
                        <div className={`${tableBg} border border-neutral-border rounded overflow-hidden`}>
                            <StaggerContainer delayChildren={0.1} staggerChildren={0.05} className="w-full text-left flex flex-col">
                            
                            {/* Table Header (Flexbox) */}
                            <div className={`${headerBg} flex flex-col sm:flex-row border-b border-neutral-border`}>
                                <div className="py-3 px-4 sm:w-1/3">
                                    <LabelCaps className="text-primary-dark">Specification</LabelCaps>
                                </div>
                                <div className="py-3 px-4 flex-1">
                                    <LabelCaps className="text-primary-dark">Detail</LabelCaps>
                                </div>
                            </div>

                            {/* Table Body (Flexbox) */}
                            <div className="font-sans text-sm flex flex-col">
                                {specs?.map((spec, index) => (
                                    <StaggerItem 
                                        key={index} 
                                        className="flex flex-col sm:flex-row border-b border-neutral-border last:border-0 hover:bg-neutral-base/10 transition-colors"
                                    >
                                        <div className="py-3 px-4 font-medium bg-neutral-base/50 text-neutral-text sm:w-1/3 flex items-center">
                                            {spec.label}
                                        </div>
                                        <div className="py-3 px-4 text-neutral-text flex-1 flex items-center">
                                            {spec.value}
                                        </div>
                                    </StaggerItem>
                                ))}
                            </div>
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}