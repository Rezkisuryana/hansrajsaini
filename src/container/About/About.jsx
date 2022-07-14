import React from 'react';
// import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';
import images from '../../constants/images'
import { IoMdArrowDropright } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#3c8ffc] app-parafrontendf'>
                        About
                    </p>
                    <h2 className='py-4 app-head'>Who I Am</h2>
                    <p className='py-2 text-[#3c8ffc]'>
                        Hi I'am Hansraj Saini
                    </p>
                    <p className='py-2 text-gray-600 text-sm'>
                        Well, I’ve been working on web app development for two years now, while still studying at college. Had my own projects, coded mostly in Node JS and React JS, I have lerned a lot while working on this projects. Now I am looking to get a intership to get some experience, and am glad to be interviewing with you here.

                    </p>
                    <p className='py-2 text-gray-600'>
                        This are the some qualities which I think sets me apart from other candidates

                    </p>
                    <p className='py-2 text-gray-600 flex text-sm'>
                        <IoMdArrowDropright />  One of the things that distinguish me from other candidates is that I am able to remain calm and focused no matter how difficult the task. I always try to stay positive and find a way out. I am sure that everything happens for a reason and that any mistake can be fixed.

                    </p>
                    <p className='py-2 text-gray-600 flex text-sm'>
                        <IoMdArrowDropright />  I am a quick learner and constantly improve my skills not only in the professional but also in multiple other fields. If hired for the position, I will continue to learn and transfer obtained knowledge and skills to other team members.

                    </p>
                    <p className='py-2 text-gray-600 flex text-sm'>
                        <IoMdArrowDropright />  You will never find a more disciplined person. I am never late and know how to value the time of other people. Especially in the engineering field, where everything should be clear, structured, and meet requirements.
                    </p>
                    <a href='/#work'>
                        <button className='flex justify-center items-center my-2'>Check out my projects <BsArrowRightShort /></button>
                    </a>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img src={images.profile2} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div >
    );
};
export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg')