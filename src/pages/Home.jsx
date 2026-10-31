import React from "react";
import { HeroBanner } from "./home/HeroBanner.jsx";
import { CategorySection } from "./home/CategorySection.jsx";
import { NewArrivalsSlider } from "./home/NewArrivalsSlider.jsx";
import { SetupBanner } from "./home/SetupBanner.jsx";
import { CustomerFavoritesSlider } from "./home/CustomerFavoritesSlider.jsx";
import { ShopByDevice } from "./home/ShopByDevice.jsx";
import { TestimonialsSection } from "./home/TestimonialsSection.jsx";
import { FeaturedProducts } from "./home/FeaturedProducts.jsx";

export const Home = () => {
  return (
    <div className="space-y-0">
      <HeroBanner />
      <CategorySection />
      <NewArrivalsSlider />
      <SetupBanner />
      <CustomerFavoritesSlider />
      <ShopByDevice />
      <TestimonialsSection />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
