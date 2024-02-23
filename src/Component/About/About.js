
import React from 'react'
import '../About/About.css'
import Jump from 'react-reveal/Jump';


const About = () => {
  return (
    <>
    <Jump>
      <div className='about flex-wrap sm:w-[93%] p-[0px] flex sm:ml-[2vw] ml-0 ' id='about'>
        
          <div className='about-image sm:ml-[110px] sm:my-[70px] ml-0 '>
            <img src='/image/Vision.jpg' alt='my pic' className='sm:ml-[20px] m-2 sm:w-[38vw] w-[96%] rounded overflow-hidden'/>
          </div>
          <div className='about-content sm:w-[38vw] w-full '>
            <div className=' h1 text-4xl font-bold'>About Me</div>
            <p className='text-justify p-4'>
              Hello, I'm Mubasher Ahmed, a passionate and creative web developer,with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js).<hr/>
              Expertise My expertise lies in Crafting beautiful and intuitive user interfaces using React.js and ensuring a seamless user experience across devices and Designing robust server-side architecture with Node.js and Express.js, and working with MongoDB for efficient data storage and retrieval. Bringing together the frontend and backend to create cohesive and dynamic web applications.<hr/>
              What Sets Me Apart What sets me apart is my commitment to staying updated with the latest industry trends and technologies. I thrive in collaborative environments and enjoy taking on challenges that push my creative and problem-solving boundaries.
              <br/><br/>
            </p>
          </div>
       
      </div>
      </Jump>
    </>
  )
}

export default About;