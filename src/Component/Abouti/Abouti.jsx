import React from 'react'
import { Link } from 'react-router-dom'
import './Abouti.scss'

function Abouti() {
  return (
    <div className='abouti'>
      <h1>WHAT I DO?</h1>
      <h2>I'm a programmer.</h2>
      <p>For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.

For the back-end I also work with Javascript (NodeJS).</p>
<Link to='/Portfolio'><button>PROJECTS</button></Link>
    </div>
  )
}

export default Abouti
