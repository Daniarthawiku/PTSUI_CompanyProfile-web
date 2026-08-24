'use client';

import React from 'react';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import { QualityCardProps } from '../../types';

export default function QualityCard({ icon, title, description, className = '' }: QualityCardProps) {
    return (
    <div className={`bg-primary-mid/20 p-6 rounded border border-primary-mid/30 ${className}`}>
        <div className="flex items-center gap-2 mb-3">
            <Icon name={icon} className="text-primary-soft" size={24} />
            <Typography variant="custom" tag="h3" className="font-serif text-xl font-semibold text-white">
                {title}
            </Typography>
        </div>
        <Typography variant="custom" tag="p" className="font-sans text-sm leading-relaxed text-primary-soft/80">
            {description}
        </Typography>
    </div>
    );
}
