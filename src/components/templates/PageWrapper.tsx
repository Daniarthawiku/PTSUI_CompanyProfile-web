import React from 'react';

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
    return (
    <main className={`flex flex-col min-h-screen w-full pt-16 md:pt-20 ${className}`}>
        {children}
    </main>
    );
}