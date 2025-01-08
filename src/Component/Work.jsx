import React from 'react'
import Anytime from '../assets/Any-time.png'
import Saffron from '../assets/Saffron.png'
import vatsayana from '../assets/Vatsayana.png'
function Work() {
  return (
    <>
    <section>
    <div className='container mx-auto'>
        <h1 className='text-center fs-1 text-white text-6xl'>Latest Work Showcase</h1>
        <p  className="text-white text-center text-1xl mt-3 md:text-2xl lg:text-2xl">Showcasing innovation, design, and seamless execution across projects.</p>
       
           
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-3 mt-10'>
                 
           <div class="max-w-sm bg-white border border-gray-200 rounded-lg ">
               <a href="https://visa-project-six.vercel.app/" target='_blank'> <img src={Anytime} alt="" className='rounded-lg text-center' /> </a>  
    <div class="p-5">
        <a href="https://visa-project-six.vercel.app/" target='_blank'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Any-Time </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed the Any-Time Visa website using React, Vite, and Tailwind CSS, creating a responsive, fast, and visually appealing user experience with modern design principles.</p>
        <a href="https://visa-project-six.vercel.app/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg ">
<a href="https://saffronroutes.in/" target='_blank'> <img src={Saffron} alt="" className='rounded-lg text-center' /></a>   
    <div class="p-5">
        <a href="https://saffronroutes.in/" target='_blank' >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Saffron Routes</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed the Saffron Routes tour and travel website with a React-based frontend for an interactive user experience and a PHP backend for robust functionality.</p>
        <a href="https://saffronroutes.in/" target='_blank'  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg ">
<a href="https://www.vatsyayanaresorts.com/travel-hub/best-resort-for-corporate-outing-near-delhi-ncr/" target='_blank'  ><img src={vatsayana} alt=""  className='rounded-lg text-center' /></a>
    <div class="p-5">
        <a href="https://www.vatsyayanaresorts.com/travel-hub/best-resort-for-corporate-outing-near-delhi-ncr/"  target='_blank' >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vatasayana Resort</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Designed a responsive landing page for Vatsyayana Resort using PHP and Bootstrap, ensuring a visually appealing and user-friendly interface.</p>
        <a href="https://www.vatsyayanaresorts.com/travel-hub/best-resort-for-corporate-outing-near-delhi-ncr/" target='_blank'  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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