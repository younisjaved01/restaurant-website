import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import MenuSection from '@/components/MenuSection';
import SmoothieExtras from '@/components/SmoothieExtras';
import IngredientsSection from '@/components/IngredientsSection';
import CoffeeBreakfast from '@/components/CoffeeBreakfast';
import About from '@/components/About';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import StoreInfo from '@/components/StoreInfo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <MenuSection />
      <SmoothieExtras />
      <IngredientsSection />
      <CoffeeBreakfast />
      <About />
      <Features />
      <Gallery />
      <StoreInfo />
      <Contact />
      <Footer />
    </>
  );
}
