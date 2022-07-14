import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/hansraj-saini-634864190/">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/direct/inbox/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://github.com/Hansraj8149?tab=repositories">
                    <FaGithub />
                </a>
            </div>

        </div>
    )
}

export default SocialMedia