import React from 'react';
import LabelCaps from '../atoms/LabelCaps';
import { ShippingTermItemProps } from '../../types';

export default function ShippingTermItem({ title, description, accentClass = 'text-primary-mid' }: ShippingTermItemProps) {
    return (
    <div className="border-b border-neutral-border pb-4 last:border-b-0 last:pb-0">
        <LabelCaps className={`${accentClass} mb-1`}>
            {title}
        </LabelCaps>
        <p className="font-sans text-sm leading-relaxed text-neutral-text/70">
            {description}
        </p>
    </div>
    );
}
