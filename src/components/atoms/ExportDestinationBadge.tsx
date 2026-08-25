import React from 'react';
import Icon from './Icon';
import LabelCaps from './LabelCaps';
import { ExportDestinationBadgeProps } from '../../types';

export default function ExportDestinationBadge({ country, className = '' }: ExportDestinationBadgeProps) {
    return (
    <span className={`inline-flex items-center gap-2 bg-neutral-base px-4 py-2 rounded border border-neutral-border font-sans text-xs font-bold tracking-[0.1em] uppercase text-secondary-dark ${className}`}>
        <Icon name="public" size={18} className="text-secondary-dark" />
        {country}
    </span>
    );
}
