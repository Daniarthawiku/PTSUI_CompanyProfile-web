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
export interface StatItem {
    value: string;
    label: string;
    icon?: ReactNode; 
}

export interface CertificationItem {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface FeatureItem {
    title: string;
    description?: string;
    icon?: ReactNode;
}