import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-light-p3 dark:bg-dark-p1 border-t-2 border-light-p dark:border-dark-p3 max-md:pb-[50px]'>
      <div className='container mx-auto max-w-[1172px] px-4 py-8 flex justify-between items-center max-md:flex-col max-md:items-center'>
        <div>
          <h1 className='text-[1.8rem] capitalize cursor-pointer text-light-h dark:text-dark-h text-center'>logo</h1>
          <p className='text-light-p dark:text-dark-p2 pb-2'><span className="dot"></span> I'm currently available for work.</p>
        </div>
        <div>
          <div className='flex'>
            <FaFacebook className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
            <FaGithub className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
            <FaLinkedinIn className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
            <FaEnvelope className='text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
          </div>
        </div>
      </div>
      <h1 className='text-center pb-4 text-light-p2 dark:text-dark-p2'>2023 &#169; Yousif Mamdouh</h1>
    </div>
  )
}

export default Footer