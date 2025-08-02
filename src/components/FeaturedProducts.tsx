'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './lib/store'
import { getProducts } from '@/services/getProducts';
import { setProducts } from './lib/slices/productsSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function FeaturedProducts() {
  const AllProducts = useSelector((state: RootState) => state?.products?.products);
  const products = AllProducts.filter(product => product?.rating?.rate >= 3).slice(0,4);
   

   const dispatch = useDispatch<AppDispatch>();
   const getAllProducts = async () => {
      try {
        const data = await getProducts();
        dispatch(setProducts(data));
      } catch (e) {
        toast.error('Product fetch error');
      }
    };
 

  useEffect(() => {
    getAllProducts();
  }, [dispatch]);

  if(!products.length) return;

  return (
    <section id="featured-products" className="py-16 bg-white" aria-label="Featured Products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our handpicked selection of trending items
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ id, title, category,description, price, image }) => (
            <div
              key={id}
              className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-center object-cover group-hover:opacity-75"
                  loading='lazy'
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900  line-clamp-1">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-indigo-500">{category}</p>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
                <div className='flex items-center justify-between mt-3'>
                  <p className="text-[18px] font-semibold text-black">${price.toFixed(2)}</p>
                <Link
                  href={`/products/${id}`}
                 
                >
                  <button  className="bg-indigo-600 text-white  cursor-pointer
                  py-1.5 px-3  rounded-md text-center hover:bg-indigo-700 
                  transition-colors">View Details</button>
                
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Products
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
