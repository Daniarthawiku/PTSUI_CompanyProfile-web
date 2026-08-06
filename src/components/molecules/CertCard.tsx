import React from 'react';
import Typography from '../atoms/Typography';
import { CertCardProps } from '../../types';

export default function CertCard({ icon, title, description }: CertCardProps) {
    return (
    <div className="bg-neutral-card border border-neutral-border p-6 md:p-8 flex flex-col gap-4 rounded-none hover:shadow-md transition-shadow">
        <div className="text-primary-mid w-10 h-10">
            {icon}
        </div>

        <Typography variant="h3" className="text-primary-dark">
            {title}
        </Typography>

        <Typography variant="body" className="text-sm">
            {description}
        </Typography>
    </div>
    );
}