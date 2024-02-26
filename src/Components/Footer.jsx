import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"


const Footer = () => {
  return (
    <div className='w-full h-24 bg-black flex items-center justify-center p-5'>
        <div className="text-white/[0.5] text-[12px] flex flex-col my-3">
          Projects By: Sachin Deswal
          <span className="flex items-center justify-center text-xl mt-3">
            <Link to="https://github.com/sDeswal10">
              <FaGithub  className="mx-2"/>
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram className="mx-2"/>
            </Link>
            <Link to="https://www.linkedin.com/in/sachindeswal10">
              <FaLinkedin className="mx-2"/>
            </Link>
          </span>
        </div>
    </div>
  )
}

export default Footer