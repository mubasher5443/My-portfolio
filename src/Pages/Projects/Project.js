
import React from 'react';
import './Project.css';
import Spin  from 'react-reveal/Spin';

const Project = () => {
  return (
    <>
    
      <div className='project sm:block hidden' id='project'>
        <h1 className='sm:text-4xl text-2xl font-bold'>TOP RECENT PROJECT</h1>
        <hr className='my-4' />
        <div className='text-center text-xl font-200'>
          👉 including programming Languages, frameworks, databases,
          front-end and back-end tools, and APIs lorem
        </div>
        <div className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Your existing card components */}
         <div className='cards'>
         <Spin>
          <div className='card'>
            <button className='fullstack'>FullStack</button>
            <img src='https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/05/iStock-1187114666.jpg' style={{ marginTop: "-25px" }} />
            <div className='fullstack-btn'>
              <button className='bton'>Node</button>
              <button className='bton'>Express</button>
              <button className='bton'>React</button>
              <button className='bton' style={{ width: "8vw" }}>Mongo DB</button>
            </div>
            <div className='view'>
              <p> Ecomerce website</p>
              <button className='view-btn'>view</button>
            </div>
          </div>
          </Spin>
          <Spin>
          <div className='card'>
            <button className='fullstack'>Mobile App</button>
            <img src='https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM=' style={{ marginTop: "-25px" }} />
            <div className='fullstack-btn'>
              <button className='bton' style={{ width: "8vw" }}>React Native</button>
              <button className='bton' style={{ width: "8vw" }}>IOS/Android</button>
            </div>
            <div className='view'>
              <p> Chat App</p>
              <button className='view-btn'>view</button>
            </div>

          </div>
          </Spin>
          <Spin>
          <div className='card'>
            <button className='fullstack'>Backend</button>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduv3l6xsb4emEUdCVtkZvnAiHE-pNizrq7Q&usqp=CAU' style={{ marginTop: "-25px" }} />
            <div className='fullstack-btn'>
              <button className='bton'>Node</button>
              <button className='bton'>Express</button>
              <button className='bton' style={{ width: "8vw" }}>MongoDB</button>
            </div>
            <div className='view'>
              <p> Expence Tracker website</p>
              <button className='view-btn'>view</button>
            </div>
          </div>
          </Spin>
        </div>
        </div>
      </div>
     
    </>
  );
};

export default Project;
