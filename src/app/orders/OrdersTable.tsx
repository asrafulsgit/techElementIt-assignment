'use client'

import { RootState } from '@/components/lib/store';
import { useSelector } from 'react-redux';
import EmptyOrder from './EmptyOrder';
import Link from 'next/link';

const OrdersTable = () => {
    const orders = useSelector((state: RootState) => state.orders.orders);

    if(!orders.length){
      return <EmptyOrder />
    }
  return (
    <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) =>{ 

                    const totalItems = order.items.reduce((acc,value)=> acc + value.quantity,0 )
                    const totalAmount = order.items.reduce((acc,value)=> acc + (value.quantity * value.price), 0 )
                    return(<tr
                    key={order.id}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.shippingAddress.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {totalItems}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ${totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <Link href={`/orders/${order.id}`} className='text-sm text-blue-600 hover:text-blue-900'>
                        View Details
                      </Link>
                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
  )
}

export default OrdersTable
