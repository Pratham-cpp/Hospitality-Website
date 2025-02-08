import React from 'react'
import Sample from '../assets/Sample.png'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import { motion } from 'framer-motion';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial.jsx'
const Home = () => {
  return (
    <div>
        <div className='overflow-x-hidden'>
            <div className='mb-16' >
            <Carousel />
            </div>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
              className="relative w-full h-64 bg-cover bg-center"style={{ backgroundImage: `url(${Sample})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">About Us</h1>
              </div>
            </motion.div> */}
            <h1 className='text-amber-700 font-bold text-center text-3xl uppercase'>Welcome to <span className="text-black" >Nischey Institute of Hospitality Management</span> </h1>
            <div className='flex flex-col lg:flex-row sm:w-[35rem] md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto pt-8 items-center gap-4 mb-4'>
              <p className='pt-4 text-lg leading-8 px-8 '>The NIHM is established under aegis of "Navdisha Foundation" in 2025. Offering top-notch education to the region's aspirants and career-focused pupils is the society's goal. The institute focuses on giving student’s quality education and training in the field of Hospitality so they don't have to travel far for their studies. Top faculty is deputed by NIHM as this institute is dedicated to providing quality education and training in hospitality to its students. 
                Students who are educated and trained here will become skilled 
                professionals who can get good employment in both industry and 
                society. 
                Everyone is aware that Garhwal is renowned around the world for its 
                mouthwatering food and the region's talented chefs. According to 
                statistics, the Garhwal region is home to some of India's best chefs who 
                work at the most prestigious hotels in the world. At first, the institute 
                concentrated on the hospitality sector. That’s why the society focused on 
                hospitality education to keep the practice going on.  
                Since NIHM is situated in a resort's campus and is connected to it, it is 
                the greatest location for hospitality education and training. Students will 
                get real-world experience here, which will help them deal with any 
                circumstance in the future. Here, students will be given the opportunity 
                to take up part-time jobs (under the Work-While-Learn scheme) apart 
                from their studies, so that they will not be seen as newcomers after 
                completing their education and training and will also get an opportunity 
                to get a good salary package when they enter the workforce.
              </p>
              <img src={Sample} alt="" className='pt-4 w-[30%]' />
            </div>
        </div>
        {/* why choose NIHM */}
        {/* our facility */}
        {/* <div className='flex justify-center my-8 overflow-x-hidden'>
          <Cards/>
          </div> */}
        <div>
          <Testimonial/>
        </div>
        <div >
          <Faq/>
        </div>
    </div>
  )
}

export default Home