import React from 'react';
import Image from 'next/image';
import Typography from '../atoms/Typography';
import { ProductSpec as SpecItem } from '../../types';
import { Product } from '../../types';

interface ProductCardDetailProps {
    title: Product['title'];
    description: Product['description'];
    imageSrc: Product['imageSrc'];
    specs: SpecItem[];
    features?: React.ReactNode; 
    reverse?: Product['isReversedLayout'];
}

export default function ProductCardDetail({
    title, description, imageSrc, specs, features, reverse = false
}: ProductCardDetailProps) {
    return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-secondary-soft gap-8 p-6 md:p-12 mb-12`}>

       {/* text content & spec tabel */}
        <div className="flex-1 flex flex-col justify-center">
            <Typography variant="h2" className="mb-4 text-secondary-dark">{title}</Typography>
            <Typography variant="body" className="mb-8">{description}</Typography>
            
            {/* render feature */}
            {features && <div className="flex flex-col gap-3 mb-8">{features}</div>}

            <div className="overflow-x-auto border border-neutral-border bg-neutral-base">
                <table className="table w-full text-sm font-sans rounded-none">
                    <tbody>
                        {specs?.map((spec, index) => (
                        <tr key={index} className="border-b border-neutral-border last:border-0 hover:bg-neutral-card 
                        transition-colors">
                            <td className="font-bold text-primary-dark bg-primary-soft/30 w-1/3 py-4">{spec.label}</td>
                            <td className="text-neutral-text py-4">{spec.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        {/* image area */}
        <div className="flex-1 relative min-h-[300px] md:min-h-[400px] w-full">
            <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover"
            sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"/>
        </div>
    </div>
    );
}