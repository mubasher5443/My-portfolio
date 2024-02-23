import React from 'react'
import './TextStack.css'
import { textStackList } from '../../utils/textStackList'
import RubberBand from 'react-reveal/RubberBand';
import Fade  from 'react-reveal/Fade';


export const TextStack = () => {
    return (
        <>
            <div className='textstack sm:ml-[7vw] ml-0' id='techStack'>
                <RubberBand>
                    <div>
                        <h1 className='sm:text-4xl text-2xl font-bold  '>TECHNOLOGIES STACK</h1>
                        <hr />
                        <p className='tech-text'>
                            👉 including programming Languages, frameworks, databses,
                            front-end and back-end tools, and APIs</p>
                    </div>
                </RubberBand>
                
                <div className='tech-row sm:m-[20px] sm:ml-[150px] ml-0'>
                    {textStackList.map(tech => (
                        <Fade left>
                        <button className=' tech-btn sm:m-[40px] m-3 sm:w-[15vw] w-full  p-3 sm:text-2xl text-xl font-bold '>{tech.icons}{tech.name}</button>
                    </Fade>
                    ))}
                </div>
            </div>

        </>
    )
}
