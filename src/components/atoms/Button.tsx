import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-dark';
    size?: 'sm' | 'md' | 'lg';
    isFullWidth?: boolean;
}

export default function Button({ 
    variant = 'primary', 
    size = 'md', 
    isFullWidth = false, 
    className = '', 
    children, 
    ...props 
}: ButtonProps) {
    const baseClass = 'btn font-sans font-semibold rounded-none';
    const variantClass = {
        primary: 'bg-primary hover:bg-primary-mid text-white border-none',
        secondary: 'bg-secondary hover:bg-secondary-mid text-white border-none',
        outline: 'btn-outline border-neutral-base text-neutral-base hover:bg-neutral-base hover:text-primary-dark', 
        'outline-dark': 'btn-outline border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white'
    }[variant];

    const sizeClass = {
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg'
    }[size];

    const widthClass = isFullWidth ? 'w-full' : '';

    return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${className}`} {...props}>
        {children}
    </button>
    );
}