import type { Metadata } from 'next';
import PageWrapper from '@/components/templates/PageWrapper';
import FacilitiesHeroSection from '@/components/organisms/FacilitiesHeroSection';
import FacilitiesBentoGallery from '@/components/organisms/FacilitiesBentoGallery';

export const metadata: Metadata = {
    title: 'Facilities - PT. Sahabat Utama Industri',
    description:
        'Explore PT. Sahabat Utama Industri\'s world-class timber manufacturing facilities. 15,000 SQM of precision-engineered production lines meeting rigorous international standards.',
};

export default function FacilitiesPage() {
    return (
    <PageWrapper>
        <FacilitiesHeroSection />
        <FacilitiesBentoGallery />
    </PageWrapper>
    );
}
