import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark-p1 border-t-2 border-dark-p3'>
      <div className='container mx-auto max-w-[1172px] px-4 py-8 flex justify-between'>
        <h1 className='text-[1.8rem] capitalize cursor-pointer text-dark-h'>logo</h1>
        <div>
          <ul className='flex flex-col max-md:hidden'>
            <li><a className='no-underline capitalize text-md px-6 hover:text-dark-h text-dark-p2' href="#project">Projects</a></li>
            <li><a className='no-underline capitalize text-md px-6 hover:text-dark-h text-dark-p2' href="#skills">Skills</a></li>
            <li><a className='no-underline capitalize text-md px-6 hover:text-dark-h text-dark-p2 mb-4' href="#about">About</a></li>
            <li><a className='no-underline capitalize text-md px-6 hover:text-dark-h text-dark-p2' href="#contact">contact</a></li>
          </ul>
        </div>
        <div>social</div>
      </div>
    </div>
  )
}

export default Footer