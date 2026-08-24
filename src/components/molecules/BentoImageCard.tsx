"use client";

import React from 'react';
import Image from 'next/image';
import ImageOverlay from '../atoms/ImageOverlay';
import LabelCaps from '../atoms/LabelCaps';
import { BentoImageCardProps } from '../../types';

export default function BentoImageCard({
    imageSrc,
    imageAlt,
    title,
    badgeLabel,
    className = '',
}: BentoImageCardProps) {
    return (
    <div className={`rounded-lg overflow-hidden relative group ${className}`}>
        <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
        />

        {/* Hover overlay with title */}
        {title && (
            <ImageOverlay>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                    {title}
                </h3>
            </ImageOverlay>
        )}

        {/* Optional badge label (e.g. "Machinery") */}
        {badgeLabel && (
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <LabelCaps className="bg-neutral-base/90 text-primary-dark inline-block 
                    px-2 py-1 rounded-sm self-start mb-2">
                    {badgeLabel}
                </LabelCaps>
            </div>
        )}
    </div>
    );
}
