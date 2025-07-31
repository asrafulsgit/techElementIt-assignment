'use client'
import Categories from "@/components/CategoriesProducts";
import Testimonials from "@/components/CustomerReviews";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import { setProducts } from "@/components/lib/slices/productsSlice";
import { AppDispatch } from "@/components/lib/store";
import Newsletter from "@/components/NewsLetterSubscription";
import { getProducts } from "@/services/getProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
   const getAllProducts = async () => {
      try {
        const data = await getProducts();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Product fetch error:', error);
      }
    };
 

  useEffect(() => {
    getAllProducts();
  }, [dispatch]);
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
