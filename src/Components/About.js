import React from 'react'
import img from '../assets/About.png'

const About = () => {
  return (
    <div className='container mx-auto max-w-[1172px] px-4 py-8'>
      {/* -----Page header----- */}
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-color2 to-end-color2 bg-clip-text head'>About me</h1>
        <p className='text-center text-3xl text-dark-h'>who i'm I</p>
      </div>
      {/* -----Page content----- */}
      <div className='flex max-md:flex-col items-center justify-between py-12'>
        {/* -----Photo----- */}
        <div>
          <img src={img} alt='Avatar'
            className='p-3 w-[320px] border-4 border-solid border-transparent border2 max-md:mb-8' />
        </div>
        {/* -----About me paragraph----- */}
        <div className='w-[732px] ml-[2rem] max-md:w-[100%]'> 
          <p className='text-dark-p2 text-xl'>
            I am a highly skilled and motivated web developer with several years of experience building user-friendly, modern websites. With a strong background in HTML, CSS, JavaScript, and various web development frameworks, I have the technical expertise required to turn your vision into a reality,
            I am highly organized, and I take pride in my ability to meet deadlines and manage multiple projects at once,
            If you're looking for a reliable, experienced, and skilled web developer, look no further. Let's work together to bring your web project to life.
          </p>
          <button className='btn btn-cv'>My cv</button>
        </div>
      </div>
    </div>
  )
}

export default About