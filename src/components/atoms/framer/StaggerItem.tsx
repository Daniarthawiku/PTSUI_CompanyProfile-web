"use client";

import React from 'react';
import { MotionDiv } from './Motion';
import { StaggerItemProps } from '../../../types';

export default function StaggerItem({ children, className = '' }: StaggerItemProps) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <MotionDiv variants={itemVariants} className={className}>
            {children}
        </MotionDiv>
    );
}