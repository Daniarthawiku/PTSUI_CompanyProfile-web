import React from 'react';
import { ExportStatCardProps } from '../../types';

export default function ExportStatCard({ value, label, className = '' }: ExportStatCardProps) {
    return (
    <div className={`bg-primary/20 p-4 rounded border border-primary-mid/30 ${className}`}>
        <div className="font-sans text-5xl font-bold text-white mb-1 leading-none">
            {value}
        </div>
        <div className="font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary-soft">
            {label}
        </div>
    </div>
    );
}
