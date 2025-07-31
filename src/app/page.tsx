import Categories from "@/components/CategoriesProducts";
import Testimonials from "@/components/CustomerReviews";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/NewsLetterSubscription";


export default function Home() {
  return (
   <>
    <HeroSection />
    <FeaturedProducts />
    <Categories />
    <Testimonials />
    <Newsletter />
   </> 
  );
}
