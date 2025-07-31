'use client';

const products = [
  {
    id: 1,
    name: 'Smart Watch',
    description: 'Latest smart watch with health tracking',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Latest flagship smartphone',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300',
  },
  {
    id: 4,
    name: 'Laptop',
    description: 'Ultra-thin laptop with high performance',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300',
  },
  {
    id: 5,
    name: 'Tablet',
    description: '10-inch tablet for work and play',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300',
  },
  {
    id: 6,
    name: 'Running Shoes',
    description: 'Comfortable athletic shoes',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300',
  },
  {
    id: 7,
    name: 'Camera',
    description: 'Professional DSLR camera',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300',
  },
  {
    id: 8,
    name: 'Sneakers',
    description: 'Stylish casual sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
  },
  {
    id: 9,
    name: 'Backpack',
    description: 'Durable travel backpack',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300',
  },
  {
    id: 10,
    name: 'Sunglasses',
    description: 'UV protection polarized lenses',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300',
  },
  {
    id: 11,
    name: 'Coffee Maker',
    description: 'Automatic drip coffee machine',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
  },
  {
    id: 12,
    name: 'Gaming Mouse',
    description: 'High precision gaming mouse',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300',
  },
];

export default function AllProductsPage() {
  return (
    <div id="products-section" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
