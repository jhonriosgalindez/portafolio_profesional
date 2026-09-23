import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useHashlessNavigation } from './hooks/useHashlessNavigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  useHashlessNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
