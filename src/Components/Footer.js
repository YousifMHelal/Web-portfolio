import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-dark-p1 border-t-2 border-dark-p3 max-md:pb-[50px]'>
      <div className='container mx-auto max-w-[1172px] px-4 py-8 flex justify-between max-md:flex-col max-md:items-center'>
        <h1 className='text-[1.8rem] capitalize cursor-pointer text-dark-h text-center'>logo</h1>
        <div>
          <div className='flex'>
            <FaFacebook className='text-2xl mx-4 mt-2 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' />
            <FaGithub className='text-2xl mx-4 mt-2 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' />
            <FaLinkedinIn className='text-2xl mx-4 mt-2 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' />
            <FaEnvelope className='text-2xl mx-4 mt-2 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' />
          </div>
        </div>
      </div>
      <h1 className='text-center pb-4 text-dark-p2'>2023 &#169; Yousif Mamdouh</h1>
    </div>
  )
}

export default Footer