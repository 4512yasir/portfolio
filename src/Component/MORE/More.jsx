import React from 'react'
import './More.scss'
// import yasirqadhi from '../../Assets/yasirqadhi.jpg'
import{ AiOutlineGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs'


function More() {
  return (
    <div className='More'>
<div className="text">
 

       <h1>YASIR <span>AHMED</span></h1>
       <hr/>
       <p>Front-end developer</p>
      <Link to='/About'> <button className='button'>MORE</button></Link>

        <div className="icon">
       <a href="https://github.com/4512yasir"> <AiOutlineGithub className='fb'  /></a>
       <a href="mailto:yasiryaska1@gmail.com"> <SiGmail className='fb' /></a>
      <a href="hhttps://linkedin.com/in/yasir-ahmed-37b558247"> <BsLinkedin className='fb'/></a>
     </div>
     </div>
    

     <div className="img">
     {/* <img src={yasirqadhi} alt=''/> */}
     </div>

    </div>
  )
}

export default More
