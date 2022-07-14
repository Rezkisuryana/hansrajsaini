import React from 'react';
import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
import './Header.scss';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AppWrap, MotionWrap } from '../../wrapper';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 app-p'>
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700 app-head'>
                        Hi, I&#39;m <span className='text-[#3c8ffc]'> Hansraj</span>
                    </h1>
                    <h1 className='py-2 text-gray-700 app-head'>A Fullstack Web Developer</h1>
                    <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto app-p'>
                        I’m focused on building responsive fullstack web applications while
                        learning & exploring other technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/hansraj-saini-634864190/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/Hansraj8149?tab=repositories'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                        <a href='/resume'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default AppWrap(Header, 'home');
export default MotionWrap(Header, 'home')