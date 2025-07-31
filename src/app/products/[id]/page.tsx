"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const product = {
  id: "wh-2024-001",
  name: "Premium Wireless Headphones",
  price: 299.99,
  oldPrice: 399.99,
  discount: "25% OFF",
  sku: "WH-2024-001",
  description:
    "Experience premium sound quality with our flagship wireless headphones. Featuring active noise cancellation, 30-hour battery life, and superior comfort for all-day wear.",
  mainImage:
    "https://images.unsplash.com/photo-1641945511908-4a2ef922b2a2?auto=format&fit=crop&w=1080&q=80",
  images: [
    "https://images.unsplash.com/photo-1523350703530-161b46e28e24?auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1668855516759-872c952f8a56?auto=format&fit=crop&w=1080&q=80",
  ],
};

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <section id="product" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p>
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-lg text-gray-500 line-through">${product.oldPrice}</span>
              <span className="text-sm font-medium text-green-600">{product.discount}</span>
            </div>

            <div className="prose prose-sm text-gray-600">
              <p>{product.description}</p>
            </div>

            {/* Colors */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-600 border border-gray-300"></button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center">-</button>
                  <span className="w-12 text-center">1</span>
                  <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center">+</button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              {[
                "Free shipping on orders over $50",
                "30-day return policy",
                "1-year warranty included",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
