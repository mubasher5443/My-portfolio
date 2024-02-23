import React from 'react'
import { Home } from '../../Pages/Home/Home';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../Layout/Layout.css'
import { useState } from 'react';
import Menu from '../Menu/Menu';
import About from './../About/About';
import { TextStack } from '../../Pages/TextStack/TextStack';
import { Education } from '../Education/Education';
import Project from '../../Pages/Projects/Project';
import { Contact } from '../Contact/Contact';
import WorkExperience from '../WorkExperience/WorkExperience';
import { Route, Routes } from 'react-router-dom';

export const Layout = () => {
  const [toggle, setToggle] = useState(0)
  const handleToggle = () => {
    setToggle(!toggle)

  }
  return (
    <>

      <div className='sidebar-section  flex'>
        <div className={toggle ? "sidebar-toggle sidebar sm:block hidden" : "sidebar sm:block hidden"}>
          <div className='sidebar-toggle-icon'>
            <div onClick={handleToggle}>
              {toggle ? (<MdKeyboardDoubleArrowLeft size={30} />)
                : (<MdKeyboardDoubleArrowRight size={30} />)}
            </div>
          </div>
          <Menu toggle={toggle} />

        </div>
        <div className='sm:ml-[5vw] ml-0' style={{ marginLeft: !toggle ? "0" : "5vw" }}>


          <Home />
          <About />
          <Education />
          <TextStack />
          <Project />
          <WorkExperience />
          <Contact />
        </div>

      </div>

    </>
  )
}




