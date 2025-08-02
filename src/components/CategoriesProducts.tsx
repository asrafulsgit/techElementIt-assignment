import Link from 'next/link'

type Category = {
  name: string
  image: string
  alt: string
  query: string
}

const categories: Category[] = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt: 'Electronics',
    query: 'electronics',
  },
  {
    name: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt: 'Jewelry',
    query: 'jewelery',
  },
  {
    name: "Men's Clothing",
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt: "Men's Clothing",
    query: "men's clothing",
  },
  {
    name: "Women's Clothing",
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt: "Women's Clothing",
    query: "women's clothing",
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-gray-50" aria-label="Shop by Category">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Shop by Category</h2>
          <p className="mt-4 text-lg text-gray-600">Find exactly what you are looking for</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, image, alt }) => (
            

            <div  key={name}
              className="group relative overflow-hidden rounded-lg 
              shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{name}</h3>
              </div></div>
       
          ))}
        </div>
      </div>
    </section>
  )
}
