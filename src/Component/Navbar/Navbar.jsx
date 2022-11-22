import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'


function Navbar() {
  return (
    <div className='nav'>
      <div className="Sidebar">
        <div className="logo">
          <h1>YR</h1>
        </div>
        <div className="nav-links">
          <ul className='menu'>
       
        
        
            
              <li  className='nav-menu'>
                <Link to='/Contact' className='nav-list'>Contact</Link>
             </li>
              <li  className='nav-menu'>
                <Link to='/Portfolio' className='nav-list'>Portfolio</Link>
             </li>
             <li  className='nav-menu'>
            <Link to='/About' className='nav-list'>About </Link>
           </li>
              <li className='nav-menu'>
             <Link to='/Home' className='nav-list active'>Home </Link>
        </li>
          <li className='nav-menu'>
             <Link to='/Welcome' className='nav-list active'>Welcome</Link>
        </li>
           
           
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar