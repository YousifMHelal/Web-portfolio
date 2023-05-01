import React from 'react'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNode, FaReact, FaSass, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";
import { Fade } from 'react-reveal';

const Skills = () => {
    return (
        <div className='container mx-auto max-w-[1172px] px-4 py-8' id='skills'>
            {/* -----Heading----- */}
            <Fade top>
                <div>
                    <h1 className='text-center bg-gradient-to-r from-start-red to-end-red bg-clip-text head'>My skills</h1>
                    <p className='text-center text-3xl capitalize text-light-h dark:text-dark-h'>For those who know what they’re looking for..</p>
                </div>
            </Fade>
            {/* -----Skills section-----  */}
            <Fade bottom>
                <div className='py-8 mt-8 flex items-center justify-between flex-wrap 
            text-5xl text-light-h dark:text-dark-h max-xl:justify-center'>
                    <FaHtml5 className='m-4 cursor-pointer' />
                    <FaCss3Alt className='m-4 cursor-pointer' />
                    <IoLogoJavascript className='m-4 cursor-pointer' />
                    <FaReact className='m-4 cursor-pointer' />
                    <SiRedux className='m-4 cursor-pointer' />
                    <FaSass className='m-4 cursor-pointer' />
                    <SiTailwindcss className='m-4 cursor-pointer' />
                    <FaBootstrap className='m-4 cursor-pointer' />
                    <FaNode className='m-4 cursor-pointer' />
                    <SiExpress className='m-4 cursor-pointer' />
                    <TbSql className='m-4 cursor-pointer' />
                    <FaWordpress className='m-4 cursor-pointer' />
                </div>
            </Fade >
        </div>
    )
}

export default Skills
