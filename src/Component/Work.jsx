import React from 'react'
import Anytime from '../assets/Any-time.png'
import Saffron from '../assets/Saffron.png'
import vatsayana from '../assets/Vatsayana.png'
function Work() {
  return (
    <>
<section className="overflow-hidden bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <h1 className="text-center text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
      Latest Work Showcase
    </h1>
    <p className="text-center text-lg md:text-2xl text-gray-600 mb-12">
      Showcasing innovation, design, and seamless execution across projects.
    </p>

    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <a href="https://visa-project-six.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={Anytime} alt="Any-Time Visa" className="w-full h-52 object-cover rounded-t-2xl" />
        </a>
        <div className="p-6 text-center">
          <h5 className="text-xl font-bold text-gray-800 mb-2">Any-Time</h5>
          <p className="text-gray-600 mb-4 text-sm">
            Built using React, Vite & Tailwind CSS. Delivers a lightning-fast, modern UI with optimized UX.
          </p>
          <a
            href="https://visa-project-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-2 rounded-lg text-sm transition"
          >
            Visit Site
            <svg className="w-4 h-4" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <a href="https://saffronroutes.in/" target="_blank" rel="noopener noreferrer">
          <img src={Saffron} alt="Saffron Routes" className="w-full h-52 object-cover rounded-t-2xl" />
        </a>
        <div className="p-6 text-center">
          <h5 className="text-xl font-bold text-gray-800 mb-2">Saffron Routes</h5>
          <p className="text-gray-600 mb-4 text-sm">
            React frontend & PHP backend. A stunning tour and travel platform for seamless bookings.
          </p>
          <a
            href="https://saffronroutes.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-2 rounded-lg text-sm transition"
          >
            Visit Site
            <svg className="w-4 h-4" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <a href="https://www.vatsyayanaresorts.com/travel-hub/best-resort-for-corporate-outing-near-delhi-ncr/" target="_blank" rel="noopener noreferrer">
          <img src={vatsayana} alt="Vatsyayana Resort" className="w-full h-52 object-cover rounded-t-2xl" />
        </a>
        <div className="p-6 text-center">
          <h5 className="text-xl font-bold text-gray-800 mb-2">Vatsyayana Resort</h5>
          <p className="text-gray-600 mb-4 text-sm">
            Responsive PHP landing page for an exclusive resort near Delhi NCR — elegant, clean, and efficient.
          </p>
          <a
            href="https://www.vatsyayanaresorts.com/travel-hub/best-resort-for-corporate-outing-near-delhi-ncr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-2 rounded-lg text-sm transition"
          >
            Visit Site
            <svg className="w-4 h-4" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



       

    </>
  )
}

export default Work