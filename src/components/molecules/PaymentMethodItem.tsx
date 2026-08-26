import React from 'react';
import Icon from '../atoms/Icon';
import { PaymentMethodItemProps } from '../../types';

export default function PaymentMethodItem({ label }: PaymentMethodItemProps) {
    return (
    <div className="flex items-center gap-3 bg-neutral-base p-3 rounded border border-neutral-border">
        <Icon name="check_circle" size={22} className="text-primary-mid" />
        <span className="font-sans text-sm font-semibold text-neutral-text">
            {label}
        </span>
    </div>
    );
}
