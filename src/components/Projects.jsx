import React from 'react'

const Projects = () => {
  return (
    <div id='Projects'className='text-[#94d2bd] max-w-[600px] mt-[64px] w-full mx-auto text-left h-80'>
        <h1 className='text-[#94d2bd] text-4xl'>Projects:</h1>
        <div>
          <ul className='list-disc'>
            <li>
              <a href='https://spotter1.netlify.app' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'>Spotter
              <br></br>
              - A healthcare platform to take care of all the fitness and hygiene related needs at the click of a button, helping users by "spotting" them.</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Projects