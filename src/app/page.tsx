import Categories from "@/components/CategoriesProducts";
import Testimonials from "@/components/CustomerReviews";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/NewsLetterSubscription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ShopHub",
  description: "Explore top-rated products, featured deals, and exclusive collections at our modern e-commerce store. Shop smart, shop fast, and enjoy a seamless experience.",
};

export default function Home() {
 
  return (
   <>
   <main>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </main>
   </> 
  );
}
