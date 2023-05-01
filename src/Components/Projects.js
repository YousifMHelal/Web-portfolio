import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import { BsFillCaretRightFill } from 'react-icons/bs'
import img from '../assets/Project.png'
import { Link } from 'react-scroll';

const Projects = () => {

  return (
    // -----Projects page-----
    <div className='container mx-auto max-w-[1172px] px-4 py-8' id='project'>
      {/* -----Heading----- */}
      <Fade top>
        <div>
          <h1 className='text-center bg-gradient-to-r from-start-blue to-end-blue bg-clip-text head'>My Projects</h1>
          <p className='text-center text-3xl capitalize text-light-h dark:text-dark-h'>My works experience</p>
        </div>
      </Fade>
      {/* -----Projects card----- */}
      <div className='py-8 mt-8 flex items-center justify-center flex-wrap gap-8'>
        {

          <Zoom >
            <Link to="/project">
              <div className='overflow-hidden w-[320px] h-[210px] blue-border border-solid relative card
                border-transparent rounded-xl border-2 shadow-[0px_10px_63px_7px_rgba(0,0,0,0.4)] cursor-pointer'>
                <img src={img} alt='project' />
                <BsFillCaretRightFill className='icone hidden absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-6xl text-start-blue' />
              </div>
            </Link>
          </Zoom>

        }
      </div>
    </div>
  )
}

export default Projects
