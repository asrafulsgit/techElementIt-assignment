
import { getProduct } from "@/services/getProducts";
import { notFound } from "next/navigation";
import ActionButtons from "./ActionButtons";


interface Props {
  params : { id: string }
}

export async function generateMetadata({ params }: Props) {
  const product = await getProduct(Number(params.id));
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    }
  }
  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductDetails({params} : Props) {
  const id = params.id;
  const product = await getProduct(Number(id))

  if (!product) {
    notFound()  
  }
  return (
    <section id="product" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div className="aspect-square flex 
            justify-center   items-start rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full lg:w-[90%] lg:h-[90%] object-cover"
              />
            </div>
            {/* <div className="grid grid-cols-4 gap-2">
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
            </div> */}
          {/* </div> */}

          {/* RIGHT: Product Info */}
          <div className="space-y-4">
            <div>
              <p className="text-indigo-400 font-normal ">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              {/* <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p> */}
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {/* <span className="text-lg text-gray-500 line-through">${product.oldPrice}</span> */}
              {/* <span className="text-sm font-medium text-green-600">{product.discount}</span> */}
            </div>

            <div className="prose prose-sm text-gray-600">
              <p>{product.description}</p>
            </div>

            {/* Colors */}
            {/* <div className="space-y-4"> */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-600 border border-gray-300"></button>
                </div>
              </div> */}

              {/* Quantity */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center">-</button>
                  <span className="w-12 text-center">1</span>
                  <button className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center">+</button>
                </div>
              </div> */}
            {/* </div> */}

            {/* Buttons */}
            
                <ActionButtons product ={product}/>
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
