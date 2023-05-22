import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import NotFound from '../views/NotFound';

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  };
  

  export default AppRoutes;
