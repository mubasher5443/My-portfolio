import React, { useState } from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { MdWrapText } from 'react-icons/md';


export const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    console.log("name is clicked", name)

    return (
        <>
            <div className=''id='contact'>
                <div className='contact-icon mb-3 '>
                    <h2 className='text-3xl font-bold '>Contact Us</h2>
                    <a href='https://www.linkedin.com/in/mubasher-ahmed-8475a42b4/' className='icon'><FaLinkedin size={30}/></a>
                    <a href='https://github.com/mubasher5443/' className='icon'><IoLogoGithub size={30}/></a>
                    <a href='https://web.whatsapp.com/' className='icon'><BsWhatsapp size={30}/></a>
                </div>
                <div className='contact sm:ml-[8%] ml-0  '>

                    <div className='contact-image sm:block hidden '>
                        <img src='https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/05/iStock-1187114666.jpg' />
                    </div>
                    <div className='container'>

                        <div className='justify-content-center align-item-center'>
                            <div className='rounded '>
                                <form action="">
                                    <div className='mb-2'>
                                        <label htmlFor="">Name</label>
                                        <input type="text" placeholder='Mubasher' className='form-control'
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="">Email</label>
                                        <input type="text" placeholder='mubasher5443@gmail.com' className='form-control'
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="">Phone</label>
                                        <input type="text" placeholder='8492955443' className='form-control'
                                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className='mb-2'>
                                        <textarea className='border-2 w-full' placeholder='Write message...'>

                                        </textarea>
                                    </div>
                                    <button className='btn btn-dark w-100' type='submit' disabled={!name || !email || !phone}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer sm:text-6xl text-2xl bg-black ml-0 font-bold items-center flex justify-center sm:h-[20vh] h-[10vh] '>
                <div className='text-center '>Made By &copy;Mubasher2024</div>
            </div>

        </>
    )
}
