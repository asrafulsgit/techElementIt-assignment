'use client'
import { RootState } from "@/components/lib/store";
import { notFound } from "next/navigation";
import { useSelector } from "react-redux";

interface Props {
    orderId : string;
}

const OrderDetails = ({orderId} : Props) => {

 const orders = useSelector((state: RootState) => state?.orders.orders);
 const order = orders.find(order=> order.id === orderId)
  if(!order) {
    notFound()
  };
  return (
     <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Order # {order?.id}</h3>
                <p className="text-sm text-gray-600 mt-1">Placed on {order.date}</p>
              </div>
              {/* <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">Delivered</span> */}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Customer Name</p>
                    <p className="text-sm text-gray-600">{order.shippingAddress.name}</p>
                  </div>
                  {/* <div>
                    <p className="text-sm font-medium text-gray-700">Email Address</p>
                    <p className="text-sm text-gray-600">john.doe@example.com</p>
                  </div> */}
                  <div>
                    <p className="text-sm font-medium text-gray-700">Phone Number</p>
                    <p className="text-sm text-gray-600">+{order.shippingAddress.phone}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h4>
                <div className="text-sm text-gray-600">
                  <p>{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h4>
              <div className="border rounded-lg">
                <div className="p-4 border-b flex flex-col gap-5">
                  {order.items.map((item,index)=>{
                    return(
                        <div key={index} className="flex items-center">
                    <img src={item.image} alt={item.title}
                    className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4 flex-1">
                      <h5 className="text-sm font-medium text-gray-900">{item.title}</h5>
                      {/* <p className="text-sm text-gray-600">Color: Black</p> */}
                      {/* <p className="text-sm text-gray-600">SKU: WH-2024-001</p> */}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">${item.price}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                    )
                  })}
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Subtotal</span>
                    <span className="text-sm text-gray-900">${order.subtotal}</span>
                  </div>
                  {/* <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">Shipping</span>
                    <span className="text-sm text-gray-600">$0.00</span>
                  </div> */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">Discount</span>
                    <span className="text-sm text-gray-600">${order.discount}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-base font-semibold text-gray-900">${order.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Payment Method</p>
                    <p className="text-sm text-gray-600">Credit Card ending in 1234</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Billing Address</p>
                    <div className="text-sm text-gray-600">
                      <p>John Doe</p>
                      <p>123 Main Street, Apt 4B</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Shipping Method</p>
                    <p className="text-sm text-gray-600">Standard Shipping (3-5 business days)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Tracking Number</p>
                    <p className="text-sm text-gray-600">1Z999AA10123456784</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Delivered Date</p>
                    <p className="text-sm text-gray-600">December 18, 2024</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
  )
}

export default OrderDetails
