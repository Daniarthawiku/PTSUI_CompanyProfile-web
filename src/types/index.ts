import { ReactNode } from 'react';

// PRODUCT DOMAIN 
export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: string; 
    title: string;
    description: string;
    imageSrc: string;
    specs: ProductSpec[];
    isReversedLayout?: boolean;
    href: string;
}

// UI COMPONENTS DOMAIN 
export interface StatBadgeProps {
    value: string;
    label: string;
    icon?: ReactNode; 
}

export interface CertCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface FeatureItemProps {
    title: string;
    description?: string;
    icon?: ReactNode;
}

export interface Button {
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-dark';
    size?: 'sm' | 'md' | 'lg';
    isFullWidth?: boolean;
}

export interface Input {
    error?: boolean;
}

export interface LogoProps {
    className?: string;
    isDarkTheme?: boolean;
}

export interface TextArea {
    error?: boolean;
}

export interface FormFieldProps {
    label: string;
    id: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode; // placeholder for <Input /> or <Textarea />
}

export interface BadgeProps {
    children: React.ReactNode;
}

// FRAMER COMPONENTS
export interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delayChildren?: number;
    staggerChildren?: number;
}

export interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export interface ScaleInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export interface TextRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}
