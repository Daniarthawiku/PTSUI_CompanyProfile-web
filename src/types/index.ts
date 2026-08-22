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

export interface TypographyProps {
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'custom' ;
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

// PRODUCTS PAGE COMPONENTS
export interface IconProps {
    name: string;
    className?: string;
    size?: number;
}

export interface LabelCapsProps {
    children: React.ReactNode;
    className?: string;
    tag?: 'span' | 'p' | 'h3' | 'h4';
}

export interface FeatureBadgeProps {
    icon: string;
    label: string;
    className?: string;
}

export interface QualityCardProps {
    icon: string;
    title: string;
    description: string;
    className?: string;
}

export interface ProductHeroSectionProps {
    headline: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export interface QualityControlItem {
    icon: string;
    title: string;
    description: string;
}

export interface QualityControlSectionProps {
    headline: string;
    description: string;
    items: QualityControlItem[];
}
