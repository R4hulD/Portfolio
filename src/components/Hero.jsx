import React from 'react'
// import Typed from 'react-typed';
import Type from './Type.jsx'


const Hero = () => {
  return (
    
<div class="bg-[#001219] dark:bg-gray-800 pt-60" id ='hero'>
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-[#005f73] dark:text-white sm:text-4xl">
            <span class="block">
                Hello!
            </span>
            <span class="block text-[#0a9396]">
                I'm Rahul Dhawan
            </span>
        </h2>
    
        <div className='flex justify-center'> 
        <p class="text-2xl mt-4 max-w-md mx-1 text-[#cbf3f0]">
            <Type />
        </p>
        {/* <Typed className='text-2xl mt-4 max-w-md  text-[#cbf3f0]' strings={['Student','Developer','Coder']} typeSpeed={120} backSpeed={140} loop/> */}
        </div>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                
            </div>
        </div>
    </div>
</div>

  )
}

export default Hero