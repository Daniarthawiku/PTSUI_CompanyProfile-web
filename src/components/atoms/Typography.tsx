import React, { ElementType, HTMLAttributes } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
}

export default function Typography({ 
    tag, 
    variant = 'body', 
    className = '', 
    children, 
    ...props 
}: TypographyProps) {
    const Component: ElementType = tag || (variant.startsWith('h') ? variant as ElementType : 'p');

    const baseStyles = {
        h1: 'font-serif text-4xl md:text-5xl lg:text-6xl font-black text-primary-dark leading-tight',
        h2: 'font-serif text-3xl md:text-4xl font-bold text-primary-dark leading-snug',
        h3: 'font-serif text-xl md:text-2xl font-bold text-secondary-dark',
        body: 'font-sans text-base text-neutral-text leading-relaxed',
        caption: 'font-sans text-sm text-neutral-text/70',
    }[variant];

    return (
    <Component className={`${baseStyles} ${className}`} {...props}>
        {children}
    </Component>
    );
}