import React, { ElementType } from 'react';
import { LabelCapsProps } from '../../types';

export default function LabelCaps({ 
    children, 
    className = '', 
    tag = 'span' 
}: LabelCapsProps) {
    const Component: ElementType = tag;

    return (
    <Component className={`font-sans text-xs font-bold tracking-[0.1em] uppercase ${className}`}>
        {children}
    </Component>
    );
}
