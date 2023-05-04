import React from 'react'
import { Link } from 'react-router-dom'

function Error({ theme }) {
    return (
        <div className='container overflow-hidden mx-auto max-w-[1172px] px-4'>
            <div className='min-h-[100vh] flex items-center justify-center flex-col '>
                <h1 className='bg-gradient-to-r from-start-blue to-end-blue bg-clip-text text-[15rem] py-2 font-bold heading max-md:text-[13rem]'>404</h1>
                <p className='text-light-p dark:text-dark-p2 text-xl max-md:text-center'>The page that you're looking for is not found</p>
                {
                    theme === 'dark'
                        ? <Link to="My-portfolio/"><button className='btn dark-blue-btn'>back home</button></Link>
                        : <Link to="My-portfolio/"><button className='btn blue-btn'>back home</button></Link>
                }
            </div>
        </div>
    )
}

export default Error