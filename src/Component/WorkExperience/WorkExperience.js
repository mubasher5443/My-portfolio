import React, { useContext, useState } from 'react'
import './WorkExperience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSchool } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ThemeContext } from './../../Context/Darkmode';


const WorkExperience = () => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <>
    <div className='' id='workExperince'>
    <p className='education-text sm:text-4xl text-2xl font-bold'> WORK EXPERIENCE  </p>

      <div className='experience sm:w-[89%] w-full sm:float-right float-none sm:ml-[80px] ml-0   '>
         <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={theme.data}
            contentArrowStyle={{ borderRight: '8px solid  grey' }}
            date="2024-present"
            iconStyle={{ background: 'black', color: 'white' }}
            icon={< MdOutlineSchool />}>
            
              <h3 className="vertical-timeline-element-title">MERN Stack Developer</h3>
             <h2>intern</h2>
  <h4 className="vertical-timeline-element-subtitle">Gildware Technlogies</h4>
  <p>Developed and maintained web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
Collaborated with the development team to design and implement server-side logic using Node.js and Express.js.
Collaborated in an Agile development environment, participating in daily stand-ups, sprint planning, and code reviews</p>
            
          </VerticalTimelineElement>
           
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline"
            contentStyle={theme.data}
            contentArrowStyle={{ borderRight: '8px solid  grey' }}
            date="2022-2023"
            iconStyle={{ background: 'black', color: 'white' }}
            icon={< CgWebsite />}>
            <h3 className="vertical-timeline-element-title">Website Admin/Content Management</h3>
            <h4 className="vertical-timeline-element-subtitle">GemStones</h4>
            <p>
Created, updated, and maintained website content.
Ensured content accuracy, up-to-date information, and alignment with the company's branding and messaging.</p>

          </VerticalTimelineElement>
           
          <div className='work-line'>
              <div></div>
            </div>
        </VerticalTimeline>
      </div>
      </div>
      </>
  )
}

export default WorkExperience