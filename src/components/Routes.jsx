import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './Pages/about';
import Programs from './Pages/Programs';
import Contact from './Pages/contact';
import Garelly from './Garelly';

const definedRoutes = [
  { path: '/', component: <Home /> },
  { path: '/gallery', component: <Garelly /> },
  { path: '/about', component: <About /> },
  { path: '/programs', component: <Programs /> },
  { path: '/contact', component: <Contact /> }
];

const findClosestRoute = (path) => {
  const routeScores = definedRoutes.map(route => {
    const regex = new RegExp(route.path.replace('/', ''));
    const match = path.match(regex);
    return { route, score: match ? match.length : 0 };
  });

  routeScores.sort((a, b) => b.score - a.score);
  return routeScores[0].route;
};

const MainRoutes = () => {
  const location = useLocation();
  const matchedRoute = definedRoutes.find(route => route.path === location.pathname);

  if (!matchedRoute) {
    const closestRoute = findClosestRoute(location.pathname);
    return <Navigate to={closestRoute.path} replace />;
  }

  return (
    <Routes key={location.pathname} location={location}>
      {definedRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
