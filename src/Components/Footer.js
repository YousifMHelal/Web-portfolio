import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import dsign from '../assets/dark-sign.png'
import lsign from '../assets/light-sign.png'

const Footer = ({ theme }) => {
  return (
    <div className='bg-light-p3 dark:bg-dark-p1 border-t-2 border-light-p dark:border-dark-p3 max-md:pb-[49px]'>
      <div className='container mx-auto max-w-[1172px] px-4 py-8 flex justify-between items-center max-md:flex-col max-md:items-center'>
        <div>
          {
            theme === 'dark'
              ? <img src={dsign} alt='YousifMamdouh' className='w-[250px] h-[100x] mb-4' />
              : <img src={lsign} alt='YousifMamdouh' className='w-[250px] h-[100x] mb-4' />
          }
          <p className='text-light-p dark:text-dark-p2 pb-2'><span className="dot"></span> I'm currently available for work.</p>
        </div>
        <div>
          <div className='flex'>
            <a href='https://www.facebook.com/yousif0Joe'><FaFacebook className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' /></a>
            <a href='https://github.com/YousifMHelal'><FaGithub className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' /></a>
            <a href='https://www.linkedin.com/in/yousif-mamdouh/'><FaLinkedinIn className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' /></a>
            <a href='mailto:Yousifm.helal@gmail.com'><FaEnvelope className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' /></a>
          </div>
        </div>
      </div>
      <h1 className='text-center pb-4 text-light-p2 dark:text-dark-p2 capitalize'>copyright &#169; 2022 all rights reserved </h1>
    </div>
  )
}

export default Footer