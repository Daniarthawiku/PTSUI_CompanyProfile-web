'use client';

import React from 'react';
import Icon from '../atoms/Icon';
import LabelCaps from '../atoms/LabelCaps';
import { FeatureBadgeProps } from '../../types';

/**
 * FeatureBadge Molecule — icon + uppercase label in a horizontal row.
 * Used for product feature highlights like "High Dimensional Stability".
 */
export default function FeatureBadge({ icon, label, className = '' }: FeatureBadgeProps) {
    return (
    <div className={`flex items-center gap-2 text-primary-mid ${className}`}>
        <Icon name={icon} size={20} />
        <LabelCaps>{label}</LabelCaps>
    </div>
    );
}
