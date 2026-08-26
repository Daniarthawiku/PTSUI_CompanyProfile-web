"use client";

import React from 'react';
import Section from '../templates/Section';
import Icon from '../atoms/Icon';
import ExportDestinationBadge from '../atoms/ExportDestinationBadge';
import ShippingTermItem from '../molecules/ShippingTermItem';
import PaymentMethodItem from '../molecules/PaymentMethodItem';
import ExportStatCard from '../molecules/ExportStatCard';
import FadeIn from '../atoms/framer/FadeIn';
import ScaleIn from '../atoms/framer/ScaleIn';
import StaggerContainer from '../atoms/framer/StaggerContainer';
import StaggerItem from '../atoms/framer/StaggerItem';

const DESTINATIONS = ['China', 'Taiwan', 'Singapore', 'Middle East'];

const SHIPPING_TERMS = [
    {
        title: 'FoB (Free on Board)',
        description:
            'We handle all costs and risks until the goods are loaded onto the vessel at the designated Indonesian port.',
        accentClass: 'text-primary-mid',
    },
    {
        title: 'CFR (Cost and Freight)',
        description:
            'We arrange and pay for transportation to the destination port, providing a streamlined shipping solution for buyers.',
        accentClass: 'text-secondary-dark',
    },
];

const PAYMENT_METHODS = ['Letter of Credit (L/C)', 'Telegraphic Transfer (T/T)'];

const EXPORT_STATS = [
    { value: '15+', label: 'Years Exporting' },
    { value: 'ISO', label: '9001 Certified' },
];

export default function ExportBentoGrid() {
    return (
    <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* ─── Global Presence Card (8 cols) ─── */}
            <FadeIn direction="up" className="md:col-span-8">
                <div className="bg-neutral-card rounded-lg border border-neutral-border p-6 md:p-8 flex flex-col relative overflow-hidden h-full min-h-[320px]">
                    {/* Decorative dot pattern */}
                    <div
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 50% 50%, #3C8B60 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}
                    />

                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-dark mb-2 z-10">
                        Global Presence
                    </h2>
                    <p className="font-sans text-base leading-relaxed text-neutral-text/70 mb-6 z-10 max-w-lg">
                        Our strategic location in Indonesia enables efficient distribution
                        networks across key Asian and Middle Eastern markets, ensuring timely
                        delivery of high-volume orders.
                    </p>

                    {/* Destination badges */}
                    <StaggerContainer
                        className="mt-auto z-10 flex gap-3 flex-wrap"
                        delayChildren={0.3}
                        staggerChildren={0.1}
                    >
                        {DESTINATIONS.map((country) => (
                            <StaggerItem key={country}>
                                <ExportDestinationBadge country={country} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Decorative globe watermark */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.06] pointer-events-none flex items-center justify-center">
                        <Icon name="language" size={300} className="text-primary-dark" />
                    </div>
                </div>
            </FadeIn>

            {/* ─── Logistics & Shipping Card (4 cols) ─── */}
            <FadeIn direction="up" delay={0.1} className="md:col-span-4">
                <div className="bg-neutral-card rounded-lg border border-neutral-border p-6 flex flex-col h-full">
                    <ScaleIn>
                        <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mb-6 border border-neutral-border">
                            <Icon name="local_shipping" size={24} className="text-primary-dark" />
                        </div>
                    </ScaleIn>

                    <h2 className="font-serif text-xl font-bold text-primary-dark mb-4">
                        Logistics &amp; Shipping
                    </h2>

                    <div className="space-y-4 mt-auto">
                        {SHIPPING_TERMS.map((term) => (
                            <ShippingTermItem
                                key={term.title}
                                title={term.title}
                                description={term.description}
                                accentClass={term.accentClass}
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* ─── Payment Terms Card (4 cols) ─── */}
            <FadeIn direction="up" delay={0.2} className="md:col-span-4">
                <div className="bg-neutral-card rounded-lg border border-neutral-border p-6 flex flex-col h-full">
                    <ScaleIn>
                        <div className="w-12 h-12 bg-secondary-soft rounded-full flex items-center justify-center mb-6 border border-neutral-border">
                            <Icon name="account_balance" size={24} className="text-secondary-dark" />
                        </div>
                    </ScaleIn>

                    <h2 className="font-serif text-xl font-bold text-secondary-dark mb-4">
                        Payment Terms
                    </h2>
                    <p className="font-sans text-sm leading-relaxed text-neutral-text/70 mb-6">
                        We prioritize secure and standardized international financial
                        transactions to build trust with our global partners.
                    </p>

                    <div className="space-y-2 mt-auto">
                        {PAYMENT_METHODS.map((method) => (
                            <PaymentMethodItem key={method} label={method} />
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* ─── Regulatory Expertise Card (8 cols, dark) ─── */}
            <FadeIn direction="up" delay={0.3} className="md:col-span-8">
                <div className="bg-primary-dark text-white rounded-lg border border-primary-dark p-8 flex items-center relative overflow-hidden min-h-[260px]">
                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 30% 70%, rgba(60,139,96,0.3) 0%, transparent 60%)',
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">
                                Regulatory Expertise
                            </h2>
                            <p className="font-sans text-base leading-relaxed text-white/70">
                                Decades of experience navigating complex international trade
                                regulations, customs documentation, and phytosanitary certifications
                                ensure your cargo clears borders without costly delays.
                            </p>
                            <button className="mt-6 border border-white text-white font-sans text-xs font-bold tracking-[0.1em] uppercase px-6 py-2.5 rounded hover:bg-white hover:text-primary-dark transition-all duration-300">
                                Download Compliance Pack
                            </button>
                        </div>

                        <StaggerContainer
                            className="grid grid-cols-2 gap-4"
                            delayChildren={0.4}
                            staggerChildren={0.15}
                        >
                            {EXPORT_STATS.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <ExportStatCard value={stat.value} label={stat.label} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </FadeIn>

        </div>
    </Section>
    );
}
