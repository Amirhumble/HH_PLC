import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Teams from '../pages/Teams';
import Contact from '../pages/Contact';
import SearchResults from '../pages/SearchResults';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
};

export default AppRoutes;
