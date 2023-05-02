import React from 'react'
import { Fade } from 'react-reveal';
import { useParams } from 'react-router-dom'
import { Data } from '../utilities/Data'

const ProjectInfo = ({ theme }) => {
    const id = useParams();

    const project = Data.filter((ele, i) => {
        return (
            Data[i].id === id.id
                ? ele
                : console.log('No data')
        )
    })
    const Techs = project[0].techs

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
                        <img src={project[0].img} alt='project' />
                    </div>
                </Fade>
                {/* -----The right side----- */}
                {/* -----The project info----- */}
                <Fade top>
                    <div className='max-md:text-center'>
                        <h3 className='text-center text-3xl text-light-h dark:text-dark-h py-4'>{project[0].name}</h3>
                        <p className='text-light-p dark:text-dark-p2 text-xl w-[400px]'>{project[0].info}</p>
                        <ol className='flex gap-3 mt-8 flex-wrap max-md:justify-center'>
                            {
                                Techs.map((item, i) => {
                                    return (
                                        <li key={i} className={`px-4 text-[14px] rounded-full uppercase dark:text-light-h text-dark-h bg-${item}`}>{item}</li>
                                    )
                                })
                            }
                        </ol>
                        {theme === 'dark'
                            ? <a href={project[0].github} target='blank' ><button className='btn dark-red-btn'>live demo</button></a>
                            : <button className='btn red-btn'>live demo</button>
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ProjectInfo
