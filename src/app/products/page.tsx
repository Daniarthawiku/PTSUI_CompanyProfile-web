import React from 'react';
import PageWrapper from '@/components/templates/PageWrapper';
import Section from '@/components/templates/Section';
import ProductHeroSection from '@/components/organisms/ProductHeroSection';
import ProductCardDetail from '@/components/organisms/ProductCardDetail';
import QualityControlSection from '@/components/organisms/QualityControlSection';
import FeatureBadge from '@/components/molecules/FeatureBadge';


const bareCoreSpecs = [
    { label: 'Raw Material', value: 'Albasia Falcata / Pine' },
    { label: 'Thickness (mm)', value: '13.0, 13.5, 14.0 (Custom available)' },
    { label: 'Dimensions (mm)', value: "1220 x 2440 (4' x 8')" },
    { label: 'Moisture Content', value: '10% - 14%' },
    { label: 'Glue Type', value: 'MR, E0, E1, E2' },
    { label: 'Capacity', value: '5,000 cbm / Month' },
];

const blockBoardSpecs = [
    { label: 'Core Material', value: 'Albasia Falcata / Pine Core' },
    { label: 'Face / Back', value: 'MLH / Meranti / Pine' },
    { label: 'Thickness (mm)', value: '15.0, 18.0 (Custom available)' },
    { label: 'Dimensions (mm)', value: "1220 x 2440 (4' x 8')" },
    { label: 'Grade', value: 'Uty / BB / CC' },
    { label: 'Glue Type', value: 'MR, E0, E1, E2' },
    { label: 'Capacity', value: '3,500 cbm / Month' },
];

const qualityItems = [
    {
        icon: 'fact_check',
        title: 'IHPA Standards',
        description: 'Our inspection protocols strictly adhere to the International Hardwood Products Association (IHPA) guidelines for grading and dimensions.',
    },
    {
        icon: 'science',
        title: 'Emission Testing',
        description: 'Regular laboratory testing for formaldehyde emissions (E0, E1, E2) to guarantee compliance with global environmental regulations.',
    },
];

export default function ProductsPage() {
    return (
        <PageWrapper>
            {/* Hero Section */}
            <Section className="!pt-0">
                <ProductHeroSection
                    headline="Premium Industrial Timber Panels."
                    description="Precision-engineered Bare Core and Block Board manufactured for international trade. Sustainable sourcing, exacting specifications, and high-volume capacity."
                    imageSrc="/images/products/hero-products.webp"
                    imageAlt="Stacked precision-milled bare core panels in a bright modern manufacturing facility"
                />
            </Section>

            {/* Bare Core Section */}
            <Section id="bare-core">
                <ProductCardDetail
                    title="Bare Core"
                    description="Our Bare Core panels are manufactured from carefully selected Albasia Falcata and Pine. Engineered for dimensional stability and lightweight strength, they form the ideal substrate for high-quality plywood and furniture manufacturing."
                    specs={bareCoreSpecs}
                    titleColor="text-primary-dark"
                    features={
                        <>
                            <FeatureBadge icon="precision_manufacturing" label="High Dimensional Stability" />
                            <FeatureBadge icon="forest" label="Sustainably Sourced Raw Material" />
                        </>
                    }
                />
            </Section>

            {/* Block Board Section */}
            <Section id="block-board">
                <ProductCardDetail
                    title="Block Board"
                    description="Constructed with a solid bare core center and high-quality veneers, our Block Board offers exceptional screw-holding capacity and resistance to warping. Perfectly suited for interior applications, cabinetry, and structural paneling."
                    specs={blockBoardSpecs}
                    imageSrc="/images/products/detail-block-board.webp"
                    reverse={true}
                    titleColor="text-secondary-dark"
                />
            </Section>

            {/* Quality Control Section */}
            <Section>
                <QualityControlSection
                    headline="Stringent Quality Control"
                    description="Every batch of panels undergoes rigorous testing to meet strict international standards, ensuring reliability for our global partners."
                    items={qualityItems}
                />
            </Section>
        </PageWrapper>
    );
}
