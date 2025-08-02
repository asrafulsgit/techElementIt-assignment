'use client'

import { setRemoveCart } from "@/components/lib/slices/cartSlice";
import { AppDispatch, RootState } from "@/components/lib/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const CheckoutSection = () => {
    // carts 
    const dispatch = useDispatch<AppDispatch>();
    const carts = useSelector((state: RootState) => state.carts.carts);
     
    const handleDelete = (id : number) => {
            dispatch(setRemoveCart(id));
    }
    
// shipping information
const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };


//  order summary setting
  const subtotal = carts.reduce((acc, item) => acc + item.price, 0);
  const discount = 0;
  const total = subtotal - discount;
  return (
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
               <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={shippingInfo.fullName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={shippingInfo.phone} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input type="text" id="state" name="state" value={shippingInfo.state} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input type="text" id="zip" name="zip" value={shippingInfo.zip} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <input id="credit-card" name="payment-method" type="radio" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500" />
                    <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">Credit Card</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shopping Cart</h2>
              <div className="overflow-x-auto">
                   <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Product</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Title</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Price</th>
                      <th className="text-center py-2 text-sm font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map(item => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">
                          <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        </td>
                        <td className="py-4 text-sm text-gray-900">{item.title}</td>
                        <td className="py-4 text-sm text-gray-900">${item.price}</td>
                        <td className="py-4 text-center">
                          <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold border-t pt-3">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CheckoutSection
