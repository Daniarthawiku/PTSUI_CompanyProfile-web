import MapView from "@/components/atoms/MapView";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import ProductCardDetail from "@/components/organisms/ProductCardDetail";
import FadeIn from '@/components/atoms/FadeIn';
import StatBadge from "@/components/molecules/StatBadge";

export default function Home() {
  // dummy data for Bare Core product specifications
  const bareCoreSpecs = [
    { label: 'Raw Material', value: 'Albasia Falcata' },
    { label: 'Thickness (mm)', value: '13.0mm - 15.0mm' },
    { label: 'Dimensions (mm)', value: '1220mm x 2440mm (4\' x 8\')' },
  ];

  const blockBoardSpecs = [
    { label: 'Raw Material', value: 'Albasia Barecore, Short Core, and Dry Face/Back' },
    { label: 'Thickness (mm)', value: '15.0mm - 18.0mm (Custom available)' },
    { label: 'Dimensions (mm)', value: '1220mm x 2440mm (4\' x 8\')' },
  ];

  return (
    <div className="flex flex-col w-full">
      <Navbar></Navbar>
      <HeroSection></HeroSection>

      <FadeIn direction="up" delay={0.2} className="py-12 bg-neutral-card border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
          <StatBadge value="30+" label="Years Experience" />
          <StatBadge value="15k" label="SQM Facility" />
          <StatBadge value="Global" label="Export Network" />
          <StatBadge value="ISO 9001" label="Certified" />
        </div>
      </FadeIn>

      
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary-dark">Core Product Lines</h2>
            <p className="text-neutral-text mt-4">Engineered for durability and precision.</p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12">
          <FadeIn direction="right" delay={0.1}>
            <ProductCardDetail 
              title="Bare Core"
              description="Premium Albasia bare core offering exceptional strength-to-weight ratio."
              imageSrc="/images/home/product-bare-core.webp"
              specs={bareCoreSpecs} 
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <ProductCardDetail 
              title="Block Board"
              description="High-density block board engineered for superior screw-holding capacity."
              imageSrc="/images/home/product-block-board.webp"
              specs={blockBoardSpecs} 
              reverse={true}
            />
          </FadeIn>
        </div>
      </section>
      <MapView></MapView>
      <Footer></Footer>
    </div>
  );
}