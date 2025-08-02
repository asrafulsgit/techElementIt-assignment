export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/products" className="text-base text-gray-300 hover:text-white">
               Products</a></li>
              <li><a href="/" 
              className="text-base text-gray-300 hover:text-white">Electronics</a></li>
              <li><a href="/" 
              className="text-base text-gray-300 hover:text-white">Jewelry</a></li>
              <li><a href="/" 
              className="text-base text-gray-300 hover:text-white">Men's Clothing</a></li>
              <li><a href="/" 
              className="text-base text-gray-300 hover:text-white">Women's Clothing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/" className="text-base text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Account</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/orders" className="text-base text-gray-300 hover:text-white">Orders</a></li>
              <li><a href="/cart/checkout" className="text-base text-gray-300 hover:text-white">Checkout</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="/" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
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
