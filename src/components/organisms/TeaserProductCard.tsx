import React from 'react';
import Image from 'next/image';
import Typography from '../atoms/Typography';
import {Product} from '../../types';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


interface TeaserProductCardProps {
    title: Product['title'];
    description: Product['description'];
    imageSrc: Product['imageSrc'];
    href: Product['href'];
}

export default function TeaserProductCard({
    title, description, imageSrc, href
}: TeaserProductCardProps) {
    return (
    <div className="group bg-surface-card overflow-hidden border border-border-muted hover:shadow-md transition-shadow">
        {/* image area */}
        <div className="flex-1 relative min-h-[300px] md:min-h-[400px] w-full">
            <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            sizes="50vw "/>
        </div>

        {/* text content & spec tabel */}
        <div className="p-8 gap-4 flex flex-col">
            <Typography variant="h3" className="text-secondary-dark">{title}</Typography>
            <Typography variant="body" className="max-w-md-60dvh">{description}</Typography>
            
            <Link 
                href={href}
                className="text-primary text-xs tracking-wide font-black hover:text-secondary-mid transition-colors inline-flex items-center gap-1">
                Explore Specs
                <ArrowRightIcon className="w-4 h-4 group-hover:scale-105 transition-transform duration-500" strokeWidth={2.5} />
            </Link>
        </div>
    </div>
    );
}