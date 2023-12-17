import React from 'react';
import Header from './Component/Header';
import Education from './Component/Education';
import Projects from './Component/Projects';
import Internship from './Component/Internship';
import Certificates from './Component/Certificates';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Home from './Component/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/portfolio"
            element={
              <div>
                <Home />
                <Skills />
                <Education />
                <Projects />
                <Internship />
                <Certificates />
                <Contact />
              </div>
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
