"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export default function FadeIn({ 
    children, 
    delay = 0, 
    duration = 0.6, 
    direction = 'up',
    className = '' 
}: FadeInProps) {
    const offset = 40; 
    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = offset;
    if (direction === 'down') initialY = -offset;
    if (direction === 'left') initialX = offset;
    if (direction === 'right') initialX = -offset;

    return (
    <motion.div
        initial={{ opacity: 0, x: initialX, y: initialY }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ 
        duration: duration, 
        delay: delay, 
        ease: "easeOut" 
        }}
        className={className}
    >
        {children}
    </motion.div>
    );
}