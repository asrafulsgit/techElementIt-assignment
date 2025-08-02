

export default function Newsletter() {



  return (
    <section id="newsletter" className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Stay in the loop</h2>
            <p className="mt-3 max-w-3xl text-lg text-indigo-200">
              Get exclusive deals and new product updates delivered straight to your inbox.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <form className="sm:flex" >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="w-full px-5 py-3 border border-transparent 
                rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 
                bg-white
                "
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-indigo-200">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
