import React from 'react';
import Typography from '../atoms/Typography';

interface StatBadgeProps {
    icon?: React.ReactNode;
    value: string;
    label: string;
}

export default function StatBadge({ icon, value, label }: StatBadgeProps) {
    return (
    <div className="flex items-center gap-4">
        {icon && (
            <div className="text-primary-mid w-10 h-10 flex-shrink-0">
            {icon}
            </div>
        )}
        
        <div className="flex flex-col">
            <Typography variant="h2" className="!mb-0 leading-none">
                {value}
            </Typography>
        
            <Typography variant="caption" className="font-semibold uppercase tracking-wider mt-1 text-secondary-base">
                {label}
            </Typography>
        </div>
    </div>
    );
}