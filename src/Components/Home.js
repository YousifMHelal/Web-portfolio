import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Home = ({theme}) => {
    return (
        <div className='container mx-auto max-w-[1172px] px-4'>
            <div className='min-h-[750px] flex items-center justify-between 
            max-md:flex-col max-md:justify-normal max-md:mt-20'>
                {/* -----The left side----- */}
                <div className='flex max-md:mt-20'>
                    {/* -----Social media links----- */}
                    <div className='flex flex-col mr-8'>
                        <FaFacebook className='text-3xl mb-8 text-light-p dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
                        <FaGithub className='text-3xl mb-8 text-light-p dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
                        <FaLinkedinIn className='text-3xl mb-8 text-light-p dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
                        <FaEnvelope className='text-3xl mb-8 text-light-p dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125' />
                    </div>  
                    <div>
                        {/* -----My information----- */}
                        <p className='dark:text-dark-p2 text-light-p text-3xl'>Hi, my name is</p>
                        <h1 className='bg-gradient-to-r from-start-blue to-end-blue bg-clip-text text-6xl py-2 font-bold heading'>Yousif Mamdouh</h1>
                        <h2 className='text-3xl text-light-p dark:text-dark-p2'>I'm a <span className='bg-gradient-to-r from-start-red to-end-red bg-clip-text text-4xl font-bold heading'>Front-End</span> web developer</h2>
                        {
                            theme === 'dark'
                                ? <button className='btn dark-blue-btn'>contact me</button>

                                : <button className='btn blue-btn'>contact me</button>

                        }
                    </div>
                </div>
                {/* -----The right side----- */}
                {/* -----Code writer side photo----- */}
                <div className='w-[486px] h-[300px] border border-dark-p2 overflow-hidden relative rounded-[5px] border-solid bg-dark-bg
                max-md:mt-12 max-md:w-[350px] max-md:h-[220px] shadow-[0px_10px_63px_7px_rgba(0,0,0,0.1)] '>    
                    {/* -----The side bar----- */}
                    <div className='absolute h-[calc(100%_-_30px)] w-[35px] text-light-p2 dark:text-dark-p flex flex-col items-center px-0 py-3 text-sm left-0 bottom-0 bg-light-p3 dark:bg-dark-p1'>
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
                    <div className='absolute text-light-p dark:text-dark-p w-full h-[30px] flex items-center border-b-[color:var(--dark-p2)] px-2.5 py-0 border-b border-solid top-0'>
                        <span className='inline-block w-3 h-3 m-[5px] rounded-[50%] bg-[#FF453A]'></span>
                        <span className='inline-block w-3 h-3 m-[5px] rounded-[50%] bg-[#FFD60A]'></span>
                        <span className='inline-block w-3 h-3 m-[5px] rounded-[50%] bg-[#30D158]'></span>
                        <div className='text-xs h-full border-b-light dark:border-b-dark border-l-dark-p2 border-r-dark-p2
                        mx-2.5 my-0 pt-2.5 pb-5 px-2.5 border-b-[5px] border-solid border-l border-r dark:bg-dark'>App.js</div>
                    </div>
                    {/* -----code page writer----- */}
                    <div className='absolute text-light-h dark:text-dark-h h-[calc(100%_-_30px)] w-[calc(100%_-_35px)] text-sm p-2 right-0 bottom-0'>
                        <p><span className='text-end-red'>import</span> React <span className='text-end-red'>from</span> "react";</p>
                        <br />
                        {/* -----Code display----- */}
                        <pre>
                            &#32;<span className='text-end-red'>function</span> App<span className='text-end-red'>() &#123;</span>
                            <br />   return (
                            <br />       <span className='text-end-blue'>&lt;h1&gt;</span> hello world! <span className='text-end-blue'>&lt;/h1&gt;</span>
                            <br />   )
                            <br /> <span className='text-end-red'>&#125;</span>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Home