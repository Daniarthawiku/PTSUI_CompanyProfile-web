"use client";

import React from 'react';
import { MotionDiv } from './Motion';
import { TextRevealProps } from '../../../types';

export default function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <MotionDiv
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.33, 1, 0.68, 1] // Kurva easeOutCubic untuk pergerakan halus
        }}
      >
        {children}
      </MotionDiv>
    </div>
  );
}