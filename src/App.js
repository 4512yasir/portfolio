import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import './App.scss'
import Navbar from './Component/Navbar/Navbar';
import Welcome from './Pages/Welcome/Welcome'


function App() {
  return (
    <div className="App">
  
 <BrowserRouter>
<Navbar/>
 
 <Routes>
    <Route path='/' element={<Navigate replace to='/Welcome'/>}/>  
     <Route path='/Home' element = {<Home/>}/>
     <Route path='/About' element = {<About/>}/>
     <Route path='/Portfolio' element={<Portfolio/>}/>
     <Route path='/Contact' element={<Contact/>}/>
    <Route path='/welcome' element={<Welcome/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
