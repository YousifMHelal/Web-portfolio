import React from 'react'
import project from '../assets/Project.png'

const Projects = () => {

  return (
    // -----Projects page-----
    <div className='container mx-auto max-w-[1172px] px-4 py-8'>
      {/* -----Heading----- */}
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-color to-end-color bg-clip-text head'>My Projects</h1>
        <p className='text-center text-3xl capitalize text-dark-h'>My works experience</p>
      </div>
      {/* -----Projects card----- */}
      <div className='py-8 mt-8 flex items-center justify-between flex-wrap max-xl:justify-center'>
        <div className='overflow-hidden w-[320px] h-[210px] blue-border border-solid border-transparent rounded-xl border-2 m-4'>
          <img src={project} alt='project'/>
        </div>
        <div className='overflow-hidden w-[320px] h-[210px] blue-border border-solid border-transparent rounded-xl border-2 m-4'>
          <img src={project} alt='project'/>
        </div>
        <div className='overflow-hidden w-[320px] h-[210px] blue-border border-solid border-transparent rounded-xl border-2 m-4'>
          <img src={project} alt='project'/>
        </div>
      </div>
    </div>
  )
}

export default Projects
