import './App.css'
import React from 'react';
import { portfolioData } from './data/default';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={portfolioData.personalInfo} />
      <Hero data={portfolioData.personalInfo} />
      <About data={portfolioData.personalInfo} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Footer data={portfolioData.personalInfo} />
    </div>
  );
}

export default App;