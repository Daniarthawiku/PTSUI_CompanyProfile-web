import type { Metadata } from 'next';
import PageWrapper from '@/components/templates/PageWrapper';
import ExportHeroSection from '@/components/organisms/ExportHeroSection';
import ExportBentoGrid from '@/components/organisms/ExportBentoGrid';

export const metadata: Metadata = {
    title: 'Export Information - PT. Sahabat Utama Industri',
    description:
        'Global export expertise from PT. Sahabat Utama Industri. Learn about our logistics, shipping terms, payment options, and regulatory compliance for international timber trade.',
};

export default function ExportPage() {
    return (
    <PageWrapper>
        <ExportHeroSection />
        <ExportBentoGrid />
    </PageWrapper>
    );
}
