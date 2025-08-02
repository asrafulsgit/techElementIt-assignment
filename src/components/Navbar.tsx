'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      id="header"
      className="sticky top-0 z-50 bg-white shadow-md"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              ShopHub
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8" role="menubar">
              <li role="none">
                <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">
                  Home
                </Link>
              </li>
              <li role="none">
                <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">
                  Products
                </Link>
              </li>     
              <li role="none">
                <Link href="/orders" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">
                  Orders
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Search"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link href='/cart/checkout'>
            
              <button
                className="relative cursor-pointer p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Shopping cart"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
            </Link>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="px-2 pt-2 pb-3 space-y-1" role="menu" aria-label="Mobile Navigation">
            <li role="none">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">
                Home
              </Link>
            </li>
            <li role="none">
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">
                Products
              </Link>
            </li>
            <li role="none">
              <Link href="/orders" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
