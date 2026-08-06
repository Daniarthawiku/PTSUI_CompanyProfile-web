"use client";

import React from 'react';
import { MotionDiv } from './Motion';
import { StaggerContainerProps } from '../../../types';


export default function StaggerContainer({ 
  children, 
  className = '',
  delayChildren = 0.1,
  staggerChildren = 0.15
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerChildren,
      }
    }
  };

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}