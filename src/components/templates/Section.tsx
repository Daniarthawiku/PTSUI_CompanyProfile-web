import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    bgClass?: string; 
    id?: string;
}

export default function Section({ 
    children, 
    className = '', 
    bgClass = 'bg-transparent', 
    id 
}: SectionProps) {
    return (
        <section id={id} className={`py-12 md:py-16 lg:py-24 w-full ${bgClass}`}>
            <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full ${className}`}>
                {children}
            </div>
        </section>
    );
}