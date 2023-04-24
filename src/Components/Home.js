import React from 'react'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
    return (
        <div className='container mx-auto max-w-[1172px] px-4'>
            <div className=' h-[100vh] flex items-center justify-between'>
                {/* -----The right side----- */}
                <div className='flex'>
                    {/* -----Social media links----- */}
                    <div className='flex flex-col mr-8'>
                        <FontAwesomeIcon className='text-3xl mb-8 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' icon={faFacebook} />
                        <FontAwesomeIcon className='text-3xl mb-8 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' icon={faGithub} />
                        <FontAwesomeIcon className='text-3xl mb-8 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' icon={faLinkedinIn} />
                        <FontAwesomeIcon className='text-3xl mb-8 text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-color hover:scale-125' icon={faEnvelope} />
                    </div>
                    <div>
                        {/* -----My information----- */}
                        <p className='text-dark-p2 text-3xl'>Hi, my name is</p>
                        <h1 className='bg-gradient-to-r from-start-color to-end-color bg-clip-text text-6xl py-2 font-bold heading'>Yousif Mamdouh</h1>
                        <h2 className='text-3xl text-dark-p2'>I'm a <span className='bg-gradient-to-r from-start-color2 to-end-color2 bg-clip-text text-4xl font-bold heading'>Font-end</span> web developer</h2>
                        <button className='btn  h-12 text-base font-medium leading-6 cursor-pointer capitalize transition-[0.5s]
                        shadow-[0px_0px_60px_3px_rgba(0,223,216,0.3),0px_0px_60px_3px_rgba(0,124,240,0.3)] mx-0 my-6 px-12 py-0
                        rounded-[5px] border-2 border-solid border-transparent'>contact me</button>
                    </div>
                </div>
                {/* -----The left side----- */}
                {/* -----Code writer side photo----- */}
                <div className='w-[486px] h-[300px] border border-[color:var(--dark-p2)] overflow-hidden relative rounded-[5px] border-solid bg-dark-bg'>
                    {/* -----The side bar----- */}
                    <div className='absolute h-[calc(100%_-_30px)] w-[35px] text-[color:var(--dark-p)] flex flex-col items-center px-0 py-3 text-sm left-0 bottom-0 bg-dark-p1'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                    </div>
                    {/* -----Top control bar----- */}
                    <div className='absolute w-full h-[30px] flex items-center border-b-[color:var(--dark-p2)] px-2.5 py-0 border-b border-solid top-0'>
                        <span className='inline-block w-3 h-3 m-[5px] rounded-[50%] bg-[#FF453A]'></span>
                        <span className='inline-block w-3 h-3 m-[5px] rounded-[50%] bg-[#FFD60A]'></span>
                        <span className='inline-block w-3 h-3 m-[5px] rounded-[50%] bg-[#30D158]'></span>
                        <div className='text-xs h-full border-b-[color:var(--dark-bg)] border-l-[color:var(--dark-p2)] border-r-[color:var(--dark-p2)] mx-2.5 my-0 pt-2.5 pb-5 px-2.5 border-b-[5px] border-solid border-l border-r bg-dark-bg'>App.js</div>
                    </div>
                    {/* -----code page writer----- */}
                    <div className='absolute h-[calc(100%_-_30px)] w-[calc(100%_-_35px)] text-sm p-2 right-0 bottom-0 text-sm'>
                        <p><span className='text-end-color2'>import</span> React <span className='text-end-color2'>from</span> "react";</p>
                        <br />
                        <pre>
                            &#32;<span className='text-end-color2'>function</span> App<span className='text-end-color2'>() &#123;</span>
                            <br />   return (
                            <br />       <span className='text-end-color'>&lt;h1&gt;</span> hello world! <span className='text-end-color'>&lt;/h1&gt;</span>
                            <br />   )
                            <br/> <span className='text-end-color2'>&#125;</span>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home