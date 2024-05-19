import React from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './Pages/about'
import Programs from './Pages/Programs';
import Contact from './Pages/contact';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/programs', element: <Programs /> },
  { path: '/contact', element: <Contact /> },
  { path: '/company', element: <About /> },
];

const MainRoutes = () => {
  const element = useRoutes(routes);
  const navigate = useNavigate();

  // If no matching route was found...
  if (!element) {
    const path = window.location.pathname;

    // Check if any of the defined paths are included in the current path
    const routesExcludingLast = routes.slice(0, -1);
    const similarRoute = routesExcludingLast.find(route => path.includes(route.path));

    // If a similar route was found, navigate to it
    if (similarRoute) {
      navigate(similarRoute.path);
    } 
    // If no similar route was found, navigate to the home page
    else {
      navigate('/');
    }
  }

  return element;
};

export default MainRoutes;
