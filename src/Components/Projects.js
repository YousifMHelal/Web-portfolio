import React from 'react'
import { Data } from '../utilities/Data'

const Projects = () => {

  return (
    // -----Projects page-----
    <div className='container mx-auto max-w-[1172px] px-4 py-8' id='project'>
      {/* -----Heading----- */}
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-blue to-end-blue bg-clip-text head'>My Projects</h1>
        <p className='text-center text-3xl capitalize text-light-h dark:text-dark-h'>My works experience</p>
      </div>
      {/* -----Projects card----- */}
      <div className='py-8 mt-8 flex items-center justify-between flex-wrap max-xl:justify-center'>
        {
          Data.map(item => {
            return (
              <div key={item.id} className='overflow-hidden w-[320px] h-[210px] blue-border border-solid border-transparent rounded-xl border-2 m-4 shadow-[0px_10px_63px_7px_rgba(0,0,0,0.4)]'>
                <img src={item.img} alt='project' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects
