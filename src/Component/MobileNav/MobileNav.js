import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FcHome } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcAbout } from 'react-icons/fc';
import { FcReadingEbook } from "react-icons/fc";
import { DiTechcrunch } from "react-icons/di";
import { FcPortraitMode } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { Link } from 'react-scroll';
import { HiMenuAlt2 } from "react-icons/hi";
import Fade from 'react-reveal/Fade';



const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className=" sm:hidden block fixed top-0 z-10 ">
      <div className='flex align-middle text-yellow-500 p-[8px] bg-black '>
        <div onClick={toggleDropdown}>{isOpen ? <HiMenuAlt2 size={30} /> : <IoMenu size={30} />}</div>
        <div className='text-xl font-bold text-white px-1'>My portfolio</div>
      </div>
      {isOpen && (
        <Fade left>
        <div className="absolute w-40 ml-2 bg-slate-400 border rounded-md shadow-lg">
          <div className="block px-2 py-2  text-sm text-gray-700 hover:bg-gray-100">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
              <div className='flex'>
                <FcHome size={20} />
                <div className='text-sm font-bold px-2'>Home</div>
              </div>
            </Link>
          </div>
          <a
            href="#"
            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100} >
              <div className='flex'>
                <FcAbout size={20} />
                <div className='text-sm font-bold px-2'>About</div>
              </div>
            </Link>
          </a>
          <a href="#"
            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" >
            <Link to="education" spy={true} smooth={true} offset={-100} duration={100} >
              <div className='flex'>
                <FcReadingEbook size={20} />
                <div className='text-sm font-bold px-2'>Education</div>
              </div>
            </Link>
          </a>
          <a
            href="#" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Link to="techStack" spy={true} smooth={true} offset={-100} duration={100} >
              <div className='flex'>
                <DiTechcrunch size={20} />
                <div className='text-sm font-bold px-2'>Tech Stack</div>
              </div>
            </Link>
          </a>
          <a href="#"
            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Link to="workExperince" spy={true} smooth={true} offset={-100} duration={100} >
              <div className='flex'>
                <FcVideoProjector FcPortraitMode size={20} />
                <div className='text-sm font-bold px-2'>Work Experince</div>
              </div>
            </Link>
          </a>
          <a href="#"
            className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} >
              <div className='flex'>
                <FcPhone size={20} />
                <div className='text-sm font-bold px-2'>Contact</div>
              </div>
            </Link>
          </a>
        </div>

      </Fade>
      )}
    </div>

  );
};

export default MobileNav;
