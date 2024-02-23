import React, { useContext } from 'react'
import '../Education/Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSchool } from "react-icons/md";
import { ThemeContext } from '../../Context/Darkmode';


export const Education = () => {
  const {theme} =useContext(ThemeContext)
  return (
    <>
     
      <div className='education sm:ml-[80px] ml-0 sm:w-[90%] w-full'id='education' >
        <p className='education-text sm:text-4xl text-2xl font-bold'> EDUCATION DETAILS   </p>
        <hr />


        <VerticalTimeline className='name' >
          <VerticalTimelineElement
            className="vertical-timeline-element--work sm:w-full sm:float-right float-none"
            contentStyle={theme.data}
            contentArrowStyle={{ borderRight: '8px solid  grey' }}
            date="2019 - 2024"
            iconStyle={{ background: 'rgb(0, 138, 113)', color: 'white' }}
            icon={< MdOutlineSchool />}>
            
              <h3 className="vertical-timeline-element-title">BCA</h3>
              <h4  className="vertical-timeline-element-subtitle"style={theme.data.color == "white"?{color:"white"}:{color:"black"}}>UNIVERSITY OF KASHMIR</h4>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={theme.data}
            contentArrowStyle={{ borderRight: '8px solid  grey' }}
            date="2017"
            iconStyle={theme.data}
            icon={< MdOutlineSchool />}>
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle" style={theme.data.color == "white"?{color:"white"}:{color:"black"}}>J&KBOSE</h4>

          </VerticalTimelineElement>
          <div className='line'>
              <div></div>
            </div>
        </VerticalTimeline>
      </div>
      
    </>
  )
}

