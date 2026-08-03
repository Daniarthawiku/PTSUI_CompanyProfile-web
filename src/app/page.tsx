import MapView from "@/components/atoms/MapView";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import ProductCardDetail from "@/components/organisms/ProductCardDetail";

export default function Home() {
  // dummy data for Bare Core product specifications
  const bareCoreSpecs = [
    { label: 'Raw Material', value: 'Albasia Falcata / Pine' },
    { label: 'Thickness (mm)', value: '13.0, 13.5, 14.0 (Custom available)' },
    { label: 'Dimensions (mm)', value: '1220 x 2440 (4\' x 8\')' },
  ];

  return (
    <div className="flex flex-col w-full">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ProductCardDetail 
        title="Bare Core"
        description="Our Bare Core panels are manufactured from carefully selected Albasia Falcata."
        imageSrc="/images/bare-core.jpg"
        specs={bareCoreSpecs} 
      />
      <MapView></MapView>
      <Footer></Footer>
    </div>
  );
}