'use client'

import Link from 'next/link'

type Product = {
  id: number
  title: string
  category: string
  price: number
  image: string
  alt: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    title: 'Fjallraven Backpack',
    category: "Men's Clothing",
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    alt: 'Fjallraven Backpack',
  },
  {
    id: 2,
    title: 'Mens Premium T-Shirt',
    category: "Men's Clothing",
    price: 22.3,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    alt: 'Mens T-Shirt',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    category: "Men's Clothing",
    price: 55.99,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    alt: 'Mens Cotton Jacket',
  },
  {
    id: 4,
    title: 'Mens Slim Fit T-Shirt',
    category: "Men's Clothing",
    price: 5.99,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    alt: 'Mens Slim Fit T-Shirt',
  },
]

export default function FeaturedProducts() {
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
          {featuredProducts.map(({ id, title, category, price, image, alt }) => (
            <div
              key={id}
              className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-48 object-center object-cover group-hover:opacity-75"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/product/${id}`} className="relative block">
                    {title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{category}</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
                <Link
                  href={`/product/${id}`}
                  className="mt-4 block w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-center hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </Link>
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
