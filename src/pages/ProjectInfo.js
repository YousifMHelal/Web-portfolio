import React from 'react'
import img from '../assets/Project.png'
import { Fade } from 'react-reveal';

const ProjectInfo = ({ theme }) => {
    return (
        <div className='container mx-auto max-w-[1172px] px-4'>
            <div className='min-h-[750px] flex items-center gap-16 
            max-md:flex-col max-md:justify-normal max-md:mt-20'>
                {/* -----The left side----- */}
                {/* -----The project info----- */}
                <Fade top>
                    <div className='overflow-hidden max-w-[600px] max-h-[420px] bg-white rounded-md border-2 
                        red-border border-solid border-transparent shadow-[0px_10px_63px_7px_rgba(0,0,0,0.4)]
                        min-w-[350px] min-h-[260px]'>
                        <img src={img} alt='project' />
                    </div>
                </Fade>
                {/* -----The right side----- */}
                {/* -----The project info----- */}
                <Fade top>
                    <div className='max-md:text-center'>
                        <h3 className='text-center text-3xl text-light-h dark:text-dark-h py-4'>Name</h3>
                        <p className='text-light-p dark:text-dark-p2 text-xl w-[400px]'>Tempor et laboris dolore aliqua sit elit labore id. Nisi ad reprehenderit laboris exercitation ipsum anim voluptate consectetur cillum ullamco officia sunt. Irure Lorem occaecat reprehenderit adipisicing adipisicing Lorem proident id non tempor</p>
                        <ol className='flex gap-3 mt-8 max-md:justify-center'>
                            <li className=' px-4 text-[14px] rounded-full dark:text-light-h text-dark-h bg-html'>HTML</li>
                            <li className=' px-4 text-[14px] rounded-full dark:text-light-h text-dark-h bg-css'>CSS</li>
                            <li className=' px-4 text-[14px] rounded-full dark:text-light-h text-dark-h bg-js'>JavaScript</li>
                        </ol>
                        {theme === 'dark'
                            ? <button className='btn dark-red-btn'>live demo</button>
                            : <button className='btn red-btn'>live demo</button>
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ProjectInfo
