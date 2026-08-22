import React, { ElementType } from 'react';
import { LabelCapsProps } from '../../types';

/**
 * LabelCaps Atom — uppercase tracking-wide label text.
 * Matches the Stitch design system's `font-label-caps text-label-caps` pattern.
 */
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
