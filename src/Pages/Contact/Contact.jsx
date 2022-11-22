import React from 'react'
import './Contact.scss'
import{ AiOutlineGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {FaCopyright} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact'>
        <h1>WANT TO <br /><span>  REACH ME?</span> </h1>
     <div className="ico">
        
      <a href="https://github.com/4512yasir"> <AiOutlineGithub className='fb'  /></a>
      <h4>@4512yasir</h4>
       <a href="mailto:yasiryaska1@gmail.com"> <SiGmail className='fb' /></a>
       <h4>@yasiryaska1@gmail</h4>
      <a href="hhttps://linkedin.com/in/yasir-ahmed-37b558247"> <BsLinkedin className='fb'/></a>
      <h4>@Yasir Ahmed</h4>
     </div>
  <div className="copy">
    <FaCopyright className='fa'/>
   <h3>YASIR AHMED</h3>
  </div>

    </div>
  )
}

export default Contact
