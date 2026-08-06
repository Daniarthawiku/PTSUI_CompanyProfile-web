import React from 'react';
import Typography from '../atoms/Typography';
import { BadgeProps } from '../../types';

export default function Badge({ children }: BadgeProps) {
    return (
    <Typography variant='custom' className="font-secondary-dark text-xs font-bold tracking-[0.1em] border border-secondary-dark px-3 py-1 rounded-xs uppercase">
        {children}
    </Typography>
    )
}