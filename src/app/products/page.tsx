import { Metadata } from "next";
import AllProducts from "./AllProducts";

export const metadata: Metadata = {
  title: "Browse All Products Online | ShopHub",
  description:
    "Explore the best deals on top-quality products at ShopHub. Browse electronics, fashion, home essentials, and more – all in one place with secure shopping and fast delivery.",
};

export default function AllProductsPage() {

  return (
  <>  
  
    <main  className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Products</h2>
        <AllProducts />
      </div>
    </main>
    
  </>
  );
}
