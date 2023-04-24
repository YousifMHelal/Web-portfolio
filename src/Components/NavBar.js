import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHouse, faLaptopCode, faMoon, faPhone, faSun, faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div>
            {/* -----Larg screen Navbar----- */}
            <nav className="nav-bar w-full fixed top-0 min-h-[70px]">
                <div className='container mx-auto max-w-[1172px] flex justify-between items-center h-full py-4 px-4'>
                    <a className='text-[1.8rem] capitalize cursor-pointer text-dark-h' href="#home">Logo</a>
                    <ul className='flex justify-between max-md:hidden'>
                        <li><a className='no-underline capitalize text-xl leading-7 px-6 hover:text-gray-50 text-dark-p' href="#about">About</a></li>
                        <li><a className='no-underline capitalize text-xl leading-7 px-6 hover:text-gray-50 text-dark-p' href="#project">Projects</a></li>
                        <li><a className='no-underline capitalize text-xl leading-7 px-6 hover:text-gray-50 text-dark-p' href="#skills">Skills</a></li>
                        <li><a className='no-underline capitalize text-xl leading-7 px-6 hover:text-gray-50 text-dark-p' href="#contact">contact</a></li>
                    </ul>
                    <button className='text-xl text-dark-h p-2 rounded-full w-10 h-10 bg-dark-bg2'>
                        <FontAwesomeIcon className='hidden' icon={faMoon} />
                        <FontAwesomeIcon className='sun' icon={faSun} />
                    </button>
                </div>
            </nav>
            {/* -----Small screen Navbar----- */}
            <nav className='fixed bottom-4 w-full overflow-hidden z-100 md:hidden'>
                <div className='container mx-auto'>
                    <div className='w-full bg-dark-bg2 text-dark-p2 h-[70px] backdrop-blur-2xl rounded-full
                max-w-[350px] mx-auto px-5 flex justify-between items-center text-2xl'>
                        <FontAwesomeIcon className='w-[30px] cursor-pointer' icon={faHouse} />
                        <FontAwesomeIcon className='w-[30px] cursor-pointer' icon={faUser} />
                        <FontAwesomeIcon className='w-[30px] cursor-pointer' icon={faLaptopCode} />
                        <FontAwesomeIcon className='w-[30px] cursor-pointer' icon={faCode} />
                        <FontAwesomeIcon className='w-[30px] cursor-pointer' icon={faPhone} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar