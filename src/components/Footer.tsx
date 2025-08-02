import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/products" className="text-base text-gray-300 hover:text-white">
               Products</Link></li>
              <li><Link href="/" 
              className="text-base text-gray-300 hover:text-white">Electronics</Link></li>
              <li><Link href="/" 
              className="text-base text-gray-300 hover:text-white">Jewelry</Link></li>
              <li><Link href="/" 
              className="text-base text-gray-300 hover:text-white">Mens Clothing</Link></li>
              <li><Link href="/" 
              className="text-base text-gray-300 hover:text-white">Womens Clothing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Account</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/orders" className="text-base text-gray-300 hover:text-white">Orders</Link></li>
              <li><Link href="/cart/checkout" className="text-base text-gray-300 hover:text-white">Checkout</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">Facebook</Link></li>
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">Twitter</Link></li>
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">Instagram</Link></li>
              <li><Link href="/" className="text-base text-gray-300 hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
