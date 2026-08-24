import React from 'react';
import Link from 'next/link';
import Icon from '../atoms/Icon';
import { BentoInfoCardProps } from '../../types';

export default function BentoInfoCard({
    title,
    description,
    linkText,
    linkHref = '#',
    className = '',
}: BentoInfoCardProps) {
    return (
    <div className={`rounded-lg overflow-hidden relative bg-primary-soft p-6 md:p-8 
        flex flex-col justify-center ${className}`}>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-dark mb-2">
            {title}
        </h3>
        <p className="font-sans text-sm text-neutral-text/80 mb-4 leading-relaxed">
            {description}
        </p>
        {linkText && (
            <Link
                href={linkHref}
                className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.1em] 
                    uppercase text-primary-mid hover:text-primary-dark transition-colors group/link"
            >
                {linkText}
                <Icon 
                    name="arrow_forward" 
                    size={16} 
                    className="group-hover/link:translate-x-1 transition-transform duration-200" 
                />
            </Link>
        )}
    </div>
    );
}
