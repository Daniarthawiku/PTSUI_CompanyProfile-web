import MapView from "@/components/atoms/MapView";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import ProductCardDetail from "@/components/organisms/ProductCardDetail";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ProductCardDetail></ProductCardDetail>
      <MapView></MapView>
      <Footer></Footer>
    </div>
  );
}