import LandingSection from "./_components/LandingSection/LandingSection";
import SampleProducts from "./_components/SampleProducts/SampleProducts";
import ShopCategorySection from "./_components/ShopCategorySection/ShopCategorySection";
import { FeaturedProducts } from "./data/productsData";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ShopCategorySection />
      <SampleProducts products={FeaturedProducts} productTitle="Featured" />
    </>
  );
}
