'use client'

type Review = {
  id: number
  name: string
  avatar: string
  rating: number  
  review: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://avatar.iran.liara.run/public/1',
    rating: 5,
    review: 'Amazing quality and fast shipping! Will definitely order again.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://avatar.iran.liara.run/public/2',
    rating: 5,
    review: 'Great prices and excellent customer service. Highly recommend!',
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: 'https://avatar.iran.liara.run/public/3',
    rating: 5,
    review: 'Love the variety and quality. My go-to online store!',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex mt-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Customer Reviews</h2>
          <p className="mt-4 text-lg text-gray-600">See what our customers are saying</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {reviews.map(({ id, name, avatar, rating, review }) => (
            <div key={id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={avatar} alt={name} loading="lazy" />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">{name}</h3>
                  <StarRating rating={rating} />
                </div>
              </div>
              <p className="mt-4 text-gray-600">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
