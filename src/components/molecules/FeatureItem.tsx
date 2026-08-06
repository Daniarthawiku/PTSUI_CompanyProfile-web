import React from 'react';
import Typography from '../atoms/Typography';
import { FeatureItemProps } from '../../types';

export default function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
    <div className="flex items-start gap-3">
        <div className="text-primary-mid w-6 h-6 mt-1 flex-shrink-0">
            {icon || (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )}
        </div>
        
        <div className="flex flex-col">
            <Typography variant="body" className="font-semibold text-primary-dark">
                {title}
            </Typography>
            
            {description && (
            
            <Typography variant="caption" className="mt-1">
                {description}
            </Typography>
            )}
        </div>
    </div>
    );
}