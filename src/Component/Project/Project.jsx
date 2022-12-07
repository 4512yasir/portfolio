import React from 'react'
import './Project.scss'
import tip from '../../Assets/tip.png'
import project from '../../Assets/Screenshot (5).png'
import projects from '../../Assets/Screenshot (4).png'
import todo from '../../Assets/todo.png'
import api from '../../Assets/api.png'


function Project() {

  return (
    
    <div className="Project">
      <div className='projetit'>
      <h1>My work</h1>
      </div>
     
      <div className="project-details">
    <p>Here are some works that i have done using different languages:</p>
     </div>  
    <div className="projects">
      <img src={project} alt="" />
 
      <div className="project-text">
        <h1>Calculator</h1>
        <p className='short-des'><em>This project was created using Html,css and javascript</em></p>
        <p className='description'>This is a calculator which took 3 days to build</p>
        <div className="buttons">
   <a href="https://calator.netlify.app/" ><button>GO LIVE</button></a>     
        </div>
      </div>
 </div>
 <div className="projects"  style={{Display:'flex'}}>
      <img src={projects} alt="" />
 
      <div className="project-text">
        <h1>Animated Website</h1>
        <p className='short-des'><em>This project was created using HTML,JAVASCRIPT,CSS</em></p>
        <p className='description'>This is a animated  landing page which took 1 day to build</p>
           <div className="buttons">
   <a href="https://ysc1.netlify.app/" ><button>GO LIVE</button></a>     
        </div>
      </div>
   
 </div>
 <div className="projects">
      <img src={tip} alt="" />
 
      <div className="project-text">
           
        <h1>TIP-CALCULATOR</h1>
        <p className='short-des'><em>This project was created using react and sass only</em></p>
        <p className='description'>This is a clone  of whatsapp which took 1 weeks to build</p>
        <div className="buttons">
   <a href="https://tip-calculator-2-3.netlify.app/" ><button>GO LIVE</button></a>     
        </div>
      </div>
 </div>
  <div className="projects">
      <img src={todo} alt="" />
 
      <div className="project-text">
           
        <h1>TO-DO LIST</h1>
        <p className='short-des'><em>This project was created using HTML CSS AND JS only</em></p>
        <p className='description'>This is a clone  of whatsapp which took 1 weeks to build</p>
        <div className="buttons">
   <a href="https://work-manager.netlify.app/" ><button>GO LIVE</button></a>     
        </div>
      </div>
 </div>
  <div className="projects">
      <img src={api} alt="" />
 
      <div className="project-text">
           
        <h1>MOVIE-API</h1>
        <p className='short-des'><em>This project was created using HTML CSS AND JS only</em></p>
        <p className='description'>This is a api project</p>
        <div className="buttons">
   <a href="https://work-manager.netlify.app/" ><button>GO LIVE</button></a>     
        </div>
      </div>
 </div>
      
        </div>

  )
}

export default Project
