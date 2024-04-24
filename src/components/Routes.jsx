import React from 'react'
import Garelly from './Garelly';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Home';
import About from './Pages/about'

import Programs from './Pages/Programs';
import Contact from './Pages/contact';
const MainRoutes = () => {
    const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
<Route path="/" element={<Home/>}/>
    <Route path="/Garelly" element={<Garelly/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Programs" element={<Programs/>}/>
    <Route path="/Contact" element={<Contact/>}/>
     </Routes>
  )
}

export default MainRoutes