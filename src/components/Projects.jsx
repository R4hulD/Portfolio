import React from 'react'

const Projects = () => {
  return (
    <div id='Projects'className='text-[#94d2bd] max-w-[600px] mt-[64px] w-full mx-auto text-left h-80'>
        <h1 className='text-[#94d2bd] text-4xl'>Projects:</h1>
        <br />
        <div>
          <ul className='list-disc'>
          <li>
              <a href='https://github.com/R4hulD/random-joke-generator' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'><b>Random Joke Generator</b></a>
            </li>
            <li>
              <a href='https://github.com/R4hulD/Disease-Prediction-System' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'><b>Disease prediction system</b></a>
            </li>
            <li>
              <a href='https://github.com/R4hulD/library_management_system' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'><b>Basic Library Management System</b></a>
            </li>
            <li>
              <a href='https://github.com/R4hulD/meme-generator' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'><b>Meme generator</b></a>
            </li>
            <li>
              <a href='https://spotter1.netlify.app' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'><b>Spotter</b> Healthcare and fitness platform</a>
            </li>
            <li>
              <a href='https://github.com/R4hulD/snake-game' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'><b>Snake game using python</b></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Projects