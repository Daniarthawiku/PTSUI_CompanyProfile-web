import React from 'react';
import { IconProps } from '../../types';


export default function Icon({ name, className = '', size = 24 }: IconProps) {
    return (
    <span 
        className={`material-symbols-outlined select-none ${className}`}
        style={{ fontSize: size, lineHeight: 1 }}
    >
        {name}
    </span>
    );
}
