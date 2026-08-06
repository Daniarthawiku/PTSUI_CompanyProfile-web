"use client";

import React from 'react';
import { MotionDiv } from './Motion';
import { ScaleInProps } from '../../../types';

export default function ScaleIn({ 
    children, 
    delay = 0, 
    duration = 0.7, 
    className = '' 
}: ScaleInProps) {
    return (
        <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 0.1, 0.25, 1]
    }}
    className={className}>
        {children}
    </MotionDiv>
    );
}