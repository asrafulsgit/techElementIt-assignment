'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-gray-50 overflow-hidden"
      aria-label="Hero section showcasing featured products and call to actions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Shop Smarter Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Discover amazing products at unbeatable prices. Quality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/products"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="Showcase of featured products"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
