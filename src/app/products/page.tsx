'use client';
import { setProducts } from "@/components/lib/slices/productsSlice";
import { AppDispatch, RootState } from "@/components/lib/store";
import Spinner from "@/components/Spinner";
import { getProducts } from "@/services/getProducts";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";







export default function AllProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state?.products?.products);
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

  if(!products.length){
    return <Spinner />
  }

  return (
  <>  
 
  
  <div id="products-section" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">{product.description}</p>
                 <div className='flex items-center justify-between mt-3'>
                  <p className="text-[18px] font-semibold text-black">${product.price.toFixed(2)}</p>
                <Link
                  href={`/products/${product.id}`}
                 
                >
                  <button  className="bg-indigo-600 cursor-pointer text-white 
                  py-1.5 px-3  rounded-md text-center hover:bg-indigo-700 
                  transition-colors">View Details</button>
                
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
}
