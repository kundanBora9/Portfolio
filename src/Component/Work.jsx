import React from 'react'
import Anytime from '../assets/Any-time.png'
import Saffron from '../assets/Saffron.png'
import vatsayana from '../assets/Vatsayana.png'
function Work() {
  return (
    <>
    <section>
    <div className='container mx-auto'>
        <h1 className='text-center fs-1 text-white text-6xl'>Crafted Creations</h1>
        <p  className="text-white text-center text-1xl mt-3 md:text-2xl lg:text-2xl">Showcasing innovation, design, and seamless execution across projects.</p>
       
           
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-3 mt-10'>
                 <div>
                    <img src={Anytime} alt="" />
                 </div>
                 <div>
                    <img src={Saffron} alt="" />
                 </div>
                 <div>
                    <img src={vatsayana} alt="" />
                 </div>
           </div>
          
           </div>
    </section>
       

    </>
  )
}

export default Work