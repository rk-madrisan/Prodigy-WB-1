
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <Navigation />
      
      {/* Page Sections with Enhanced Animations */}
      <div className="relative">
        <Hero />
        <div className="transform transition-all duration-1000">
          <Skills />
        </div>
        <div className="transform transition-all duration-1000">
          <Projects />
        </div>
        <div className="transform transition-all duration-1000">
          <Education />
        </div>
        <div className="transform transition-all duration-1000">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
