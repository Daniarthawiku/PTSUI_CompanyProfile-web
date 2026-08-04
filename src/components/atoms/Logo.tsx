import React from 'react';
import Link from 'next/link';

interface LogoProps {
    className?: string;
    isDarkTheme?: boolean;
}

export default function Logo({ className = '', isDarkTheme = false }: LogoProps) {
    const textColor = isDarkTheme ? 'text-neutral-base' : 'text-primary-dark';
    

    return (
    <Link 
        href="/" 
        className={`font-serif font-black text-2xl tracking-tight hover:text-primary transition-colors ${textColor} ${className}`}
    >
        PT. Sahabat Utama Industri
    </Link>
    );
}