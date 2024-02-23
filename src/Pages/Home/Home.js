import '../Home/Home.css'; // Corrected import path
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Docs/Resume.pdf';
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from 'react';
import darkTheme, { ThemeContext } from '../../Context/Darkmode';
import React,{useContext} from 'react';
import MobileNav from '../../Component/MobileNav/MobileNav';
import Fade from 'react-reveal/Fade';


export const Home = ( ) => {
  const {theme,toggleTheme} = useContext(ThemeContext);


  return (
    <>
    

        <div className=' bg-black'id='home'><MobileNav/>
      <div className='w-[90%]  sm:ml-[4vw] lg:ml-0 bg-black sm:h-[40vh] h-48'>
        <div className='home-content sm:text-5xl text-3xl font-bold'>
    <div className='theme-icon float-right sm:bg-teal-700 bg-zinc-400 text-white h-10 w-10  sm:my-20 my-0 '>  
        <div className='' onClick={toggleTheme} >
          {theme === 'light' ? (<FaRegMoon size={30} />)
            : (<IoSunnyOutline size={30} />)}
        </div>
      </div>
      
          <div className='sm:ml-32 ml-5 sm:my-3 mt-5'>
            < div className='mb-3'>Hi! I'm Mubasher</div>
            <Typewriter
              options={{
                strings: [
                  'FullStack developer',
                  'Android App Developer'
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <Fade bottom>
            <div className='container-btn'>
             <a href='https://web.whatsapp.com/' className=' hire-btn'> Hire Me</a> 
              <a className='resume-btn' href={Resume} download='My portfolio.pdf'>My Resume</a>
            </div>
            </Fade>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
