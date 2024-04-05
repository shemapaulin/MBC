import React from 'react'
import Garelly from './Garelly';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Home';
import About from '../components/Pages/about'
const MainRoutes = () => {
    const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
<Route path="/" element={<Home/>}/>
    <Route path="/garelly" element={<Garelly/>}/>
    <Route path="/about" element={<About/>}/>
     </Routes>
  )
}

export default MainRoutes