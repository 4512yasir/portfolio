import React from 'react'
import './About.scss'
import Aboutco from '../../Component/About/Aboutco'
import Abouti from '../../Component/Abouti/Abouti'


function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
   <Aboutco/>
   <Abouti/>
    </div>
  )
}

export default About
