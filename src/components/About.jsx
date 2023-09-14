import React from 'react'
// import me from '../assets/ayanokoji.jpg'

const About = () => {
  return (
    <div id='About' className='text-[#94d2bd] max-w-[800px] mt-[10px] w-full mx-auto text-left h-screen'>
        <div className='max-w-[800px] mt-[10px] md:ml-4 sm:text-center h-screen mx-auto lg:text-left flex flex-col justify-center'>
            <h1 className='text-[#94d2bd] text-4xl'>About&#x3a;</h1>
              <br />
            <p class='capitalize text-[#0a9396] text-2xl '>
            A CSE Undergrad adept at various fields of tech, C++, Python and C. 
            Actively solving problems on coding sites like Codechef, Hackerrank and 
            interested in ML and creative writing with an eager curiosity in honing skillset and looking for new learning
            opportunities.
            </p>
            
        </div>
    </div>
  )
}

export default About