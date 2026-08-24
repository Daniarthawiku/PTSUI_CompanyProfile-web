import React from 'react';
import LabelCaps from '../atoms/LabelCaps';
import { StatCounterProps } from '../../types';

export default function StatCounter({ value, label, className = '' }: StatCounterProps) {
    return (
    <div className={className}>
        <span className="block font-serif text-5xl font-bold text-primary-mid leading-none">
            {value}
        </span>
        <LabelCaps className="text-neutral-text/70 mt-2">
            {label}
        </LabelCaps>
    </div>
    );
}
