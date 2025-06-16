
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.01}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + mousePosition.x * 0.015}%`,
            top: `${10 + mousePosition.y * 0.015}%`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Glass Card Container */}
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <img 
                  src="https://i.postimg.cc/ZKtXmtFT/pp-photo.jpg" 
                  alt="Mohamed Riyaskhan M" 
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5 text-white" />
              </Button>
            </div>

            {/* Name with Enhanced Typography */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Hi, I'm{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Mohamed Riyaskhan M
              </span>
            </h1>

            {/* Role with Animated Underline */}
            <div className="relative inline-block mb-8">
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-300">
                Full Stack Developer
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed opacity-90">
              I'm a motivated and detail-oriented{" "}
              <span className="text-purple-300 font-semibold">Full Stack Developer</span>{" "}
              with a strong foundation in modern web development technologies. 
              Proficient in{" "}
              <span className="text-pink-300 font-medium">HTML, CSS, JavaScript, Node.js, React.js, and MongoDB</span>, 
              I specialize in developing responsive web applications, 
              RESTful APIs, and seamlessly integrating front-end and back-end systems.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 border-0"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="group relative border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/10 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5"
              >
                <span className="flex items-center">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('skills')}
            className="group flex flex-col items-center text-purple-400 hover:text-purple-300 transition-all duration-300"
          >
            <div className="animate-bounce group-hover:animate-none">
              <ArrowDown className="h-6 w-6 mb-2" />
            </div>
            <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              Scroll to explore
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
