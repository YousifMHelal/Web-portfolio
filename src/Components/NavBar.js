import React from 'react'
import { FaCode, FaHome, FaLaptopCode, FaMoon, FaPhone, FaSun, FaUser } from 'react-icons/fa'
import { Link } from 'react-scroll';

const NavBar = ({ theme, setTheme }) => {

    const themeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

    return (
        <div>
            {/* -----Larg screen Navbar----- */}
            <nav className="nav-bar w-full md:fixed top-0 min-h-[70px]">
                <div className='container mx-auto max-w-[1172px] flex justify-between items-center h-full py-4 px-4'>
                    <Link to="home" spy={true} smooth={true} offset={-300} duration={500}
                        className='text-[1.8rem] capitalize cursor-pointer text-light-h dark:text-dark-h'>Logo</Link>
                    <ul className='flex justify-between max-md:hidden'>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}
                                className='no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                                dark:hover:text-dark-h hover:text-light-h text-light-p dark:text-dark-p2'>About</Link>
                        </li>
                        <li>
                            <Link to="project" spy={true} smooth={true} offset={-70} duration={500}
                                className='no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                                dark:hover:text-dark-h hover:text-light-h text-light-p dark:text-dark-p2'>Projects</Link>
                        </li>
                        <li>
                            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}
                                className='no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                                dark:hover:text-dark-h hover:text-light-h text-light-p dark:text-dark-p2'>Skills</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}
                                className='no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                            dark:hover:text-dark-h hover:text-light-h text-light-p dark:text-dark-p2'>contact</Link>
                        </li>
                    </ul>
                    <button className='text-xl text-light-h dark:text-dark-h p-2 rounded-full bg-dark-p dark:bg-dark-p3'
                        onClick={themeSwitch}>
                        {
                            theme === 'dark'
                                ? <FaSun />
                                : <FaMoon />
                        }
                    </button>
                </div>
            </nav>
            {/* -----Small screen Navbar----- */}
            <nav className='fixed bottom-2 w-full overflow-hidden z-50 md:hidden'>
                <div className='container mx-auto'>
                    <div className='w-full bg-dark-bg2 text-dark-p2 h-[50px] backdrop-blur-2xl rounded-full
                max-w-[350px] mx-auto px-5 flex justify-between items-center text-2xl'>
                        <FaHome className='w-[25px] cursor-pointer' />
                        <FaUser className='w-[25px] cursor-pointer' />
                        <FaLaptopCode className='w-[25px] cursor-pointer' />
                        <FaCode className='w-[25px] cursor-pointer' />
                        <FaPhone className='w-[25px] cursor-pointer' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar