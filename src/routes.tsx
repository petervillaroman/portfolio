import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './views/Projects';
// Import other pages here

const AppRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/projects" element={<Projects />} />
      {/* Add other routes here */}
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
