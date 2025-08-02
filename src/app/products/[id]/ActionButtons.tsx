'use client'
import { setCarts } from "@/components/lib/slices/cartSlice";
import { AppDispatch } from "@/components/lib/store";
import { Product } from "@/interfaces/interface"
import { useDispatch } from "react-redux";


type Props = {
  product: Product;
};

export default function ActionButtons  ({product} : Props){
  const dispatch = useDispatch<AppDispatch>();
  
  const handleAddToCart = () => {
    dispatch(setCarts(product));
  };
  return (
    <div className="space-y-3">
              <button onClick={handleAddToCart} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
    </div>
  )
}
