import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavComp } from './components/Nav/nav';
import { Footer } from './components/Footer/Footer';
import { BlogPost } from './components/BlogPost/BlogPost';
import { ProjectDetail } from './components/ProjectDetail/projectDetail';
import { AboutPage, HomeSlider, ProjectsPage, ContactPage, ServicesPage, BlogListPage } from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavComp />
        <Routes>
        <Route path="/" element={< HomeSlider/>} />
        <Route path="/projects" element={< ProjectsPage/>} />
        <Route path="/projects/:id" element={< ProjectDetail />} />
        <Route path="/about" element={< AboutPage/>} />
        <Route path="/contact" element={< ContactPage/>} />
        <Route path="/services" element={< ServicesPage/>} />
        <Route path="/bloglist" element={< BlogListPage/>} />
        <Route path="/blog/:id" element={<BlogPost/>} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
