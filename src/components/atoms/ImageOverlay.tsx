"use client";

import React from 'react';
import { ImageOverlayProps } from '../../types';

export default function ImageOverlay({ children, className = '' }: ImageOverlayProps) {
    return (
    <div className={`absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${className}`}>
        <div className="absolute bottom-0 left-0 p-4 md:p-8 translate-y-4 opacity-0 
            group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {children}
        </div>
    </div>
    );
}
