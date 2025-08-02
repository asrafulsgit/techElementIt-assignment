import Link from 'next/link'
import React from 'react'

const EmptyOrder = () => {
  return (
    <div className="flex flex-col items-center 
    justify-center text-center w-full h-[60vh]
     px-4 bg-white rounded-lg shadow-md">
      <p className="text-lg font-medium text-gray-700 mb-4">
        You have no Order yet
      </p>
      <Link href='/products'>
      <button
       
        className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Order Now
      </button></Link>
    </div>
  )
}

export default EmptyOrder
