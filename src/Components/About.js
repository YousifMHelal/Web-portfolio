import React from 'react'
import img from '../assets/About.png'

const About = ({ theme }) => {
  return (
    <div className='container mx-auto max-w-[1172px] px-4 py-8'>
      {/* -----Page header----- */}
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-red to-end-red bg-clip-text head'>About me</h1>
        <p className='text-center text-3xl text-light-h dark:text-dark-h'>Who I'm I</p>
      </div>
      {/* -----Page content----- */}
      <div className='flex max-md:flex-col items-center justify-between py-12'>
        {/* -----Photo----- */}
        <div>
          {
            theme === 'dark'
              ? <img src={img} alt='Avatar'
                className='p-3 w-[320px] border-4 border-solid border-transparent dark-red-border max-md:mb-8' />

              : <img src={img} alt='Avatar'
                className='p-3 w-[320px] border-4 border-solid border-transparent red-border max-md:mb-8' />
          }
        </div>
        {/* -----About me paragraph----- */}
        <div className='w-[732px] ml-[2rem] max-md:w-[100%]'>
          <p className='text-light-p dark:text-dark-p2 text-xl'>
            I am a highly skilled and motivated web developer with several years of experience building user-friendly, modern websites. With a strong background in HTML, CSS, JavaScript, and various web development frameworks, I have the technical expertise required to turn your vision into a reality,
            I am highly organized, and I take pride in my ability to meet deadlines and manage multiple projects at once,
            If you're looking for a reliable, experienced, and skilled web developer, look no further. Let's work together to bring your web project to life.
          </p>
          {theme === 'dark'
            ? <button className='btn dark-red-btn'>My cv</button>
            : <button className='btn red-btn'>My cv</button>
          }
        </div>
      </div>
    </div>
  )
}

export default About