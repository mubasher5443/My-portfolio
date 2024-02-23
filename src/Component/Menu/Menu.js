import React from 'react'
import './Menu.css'
import { Link } from 'react-scroll';

import { FcHome } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcAbout } from 'react-icons/fc';
import { FcReadingEbook } from "react-icons/fc";
import { DiTechcrunch } from "react-icons/di";
import { FcPortraitMode } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const Menu = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className='navbar-profile-pic'>
                            <img src="./image/our-mission.jpg" alt='#' />
                        </div>
                    </Zoom>
                    <Fade left>
                    <div className='Nav-items '>
                        <div className='Nav-icons'>
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><FcHome size={30} />Home</div>
                            </Link>
                            <Link to="about"
                                spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><FcAbout size={30} />About</div>
                            </Link>
                            <Link to="education" spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><FcReadingEbook size={30} />Education</div>
                            </Link>
                            <Link to="techStack" spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><DiTechcrunch size={30} />Tech Stack</div>
                            </Link>
                            <Link to="project" spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><FcVideoProjector size={30} />Projects</div>
                            </Link>
                            <Link to="workExperince" spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><FcPortraitMode size={30} />Work Experince</div>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} >
                                <div className='Nav-link'><FcPhone size={30} />Contact</div>
                            </Link>


                        </div>
                    </div>
                    </Fade>
                </>
            ) : (
                <div className='Nav-item sm:block hidden'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
                        <div className='Nav-link'><FcHome title="Home" size={30} /></div>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100} >

                        <div className='Nav-link'><FcAbout title="About" size={30} /></div>
                    </Link>
                    <Link to="education" spy={true} smooth={true} offset={-100} duration={100} >

                        <div className='Nav-link'><FcReadingEbook title="Education" size={30} /></div>
                    </Link>
                    <Link to="techStack" spy={true} smooth={true} offset={-100} duration={100} >

                        <div className='Nav-link'><DiTechcrunch title="Tech Stack" size={30} /></div>
                    </Link>
                    <Link to="project" spy={true} smooth={true} offset={-100} duration={100} >

                        <div className='Nav-link'><FcVideoProjector title="Projects" size={30} /></div>
                    </Link>
                    <Link to="workExperince" spy={true} smooth={true} offset={-100} duration={100} >

                        <div className='Nav-link'><FcPortraitMode title="Work Experince" size={30} /></div>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} >

                        <div className='Nav-link'><FcPhone title="Contact" size={30} /></div>
                    </Link>

                </div>
            )}

        </>
    )
}

export default Menu;