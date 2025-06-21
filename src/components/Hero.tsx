
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background with Green Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
            transform: `translateY(${scrollY * 0.5}px)`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.01}%`,
            transform: `translateY(${scrollY * -0.3}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-green-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + mousePosition.x * 0.015}%`,
            top: `${10 + mousePosition.y * 0.015}%`,
            transform: `translateY(${scrollY * 0.8}px)`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) translateY(${scrollY * 0.2}px)`
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content Container */}
        <div 
          className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        >
          <div className="animate-fade-in">
            {/* Profile Photo with Enhanced Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <img 
                  src="https://i.postimg.cc/tgSwN9TR/pp-photo.jpg" 
                  alt="Mohamed Riyaskhan M" 
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-emerald-600/20 hover:bg-emerald-500/30 border border-emerald-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                onClick={() => window.open('https://github.com/rk-madrisan/rk-madrisan.git', '_blank')}
              >
                <Github className="h-5 w-5 text-emerald-300" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-teal-600/20 hover:bg-teal-500/30 border border-teal-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                onClick={() => window.open('https://www.linkedin.com/in/mohamed-riyaskhan-837297369', '_blank')}
              >
                <Linkedin className="h-5 w-5 text-teal-300" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-green-600/20 hover:bg-green-500/30 border border-green-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                onClick={() => window.location.href = 'mailto:mriyaskhan.official@gmail.com'}
              >
                <Mail className="h-5 w-5 text-green-300" />
              </Button>
            </div>

            {/* Creative Typography with Animation */}
            <div className="mb-8">
              <div 
                className="text-2xl md:text-3xl font-light mb-4 text-emerald-300 opacity-90"
                style={{
                  transform: `translateX(${mousePosition.x * 0.02 - 1}px)`
                }}
              >
                HI THERE, I'M
              </div>
              
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
                style={{
                  transform: `translateX(${mousePosition.x * -0.02 + 1}px)`
                }}
              >
                <div className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent blur-sm opacity-50">
                    FRONT-END
                  </span>
                  <span className="relative bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                    FRONT-END
                  </span>
                </div>
                <div 
                  className="relative mt-2"
                  style={{
                    transform: `translateX(${mousePosition.x * 0.03}px)`
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 bg-clip-text text-transparent blur-sm opacity-50">
                    DEVELOPER
                  </span>
                  <span className="relative bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 bg-clip-text text-transparent">
                    DEVELOPER
                  </span>
                </div>
              </h1>

              {/* Code Symbol Animation */}
              <div 
                className="flex justify-center items-center gap-4 mb-6"
                style={{
                  transform: `scale(${1 + mousePosition.x * 0.0002})`
                }}
              >
                <div className="text-6xl md:text-7xl text-emerald-400/70 animate-pulse">{'<'}</div>
                <div className="text-4xl md:text-5xl text-teal-400/70 animate-bounce">/</div>
                <div className="text-6xl md:text-7xl text-emerald-400/70 animate-pulse">{'>'}</div>
              </div>
            </div>

            {/* Enhanced Description with Animation */}
            <div 
              className="relative mb-12"
              style={{
                transform: `translateY(${scrollY * -0.05}px)`
              }}
            >
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                I AM A CREATIVE{" "}
                <span className="text-emerald-300 font-semibold">FRONT-END DEVELOPER</span>{" "}
                WITH A STRONG FOCUS ON{" "}
                <span className="text-teal-300 font-medium">MOTION AND INTERACTION</span>.
                <br className="hidden md:block" />
                Specializing in{" "}
                <span className="text-green-300 font-medium">React.js, JavaScript, and Modern Web Technologies</span>.
              </p>
            </div>

            {/* Enhanced CTA Buttons with New Design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-6 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-emerald-500/25 border-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center font-semibold">
                  VIEW MY WORK
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="group relative border-2 border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 hover:text-white hover:border-emerald-300 px-10 py-6 text-lg rounded-full transition-all duration-500 hover:scale-110 hover:-translate-y-2 backdrop-blur-sm bg-white/5 font-semibold"
              >
                <span className="flex items-center">
                  GET IN TOUCH
                  <Mail className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Animated Status Indicator */}
            <div 
              className="flex items-center justify-center gap-3 text-sm text-gray-300"
              style={{
                transform: `translateY(${scrollY * -0.03}px)`
              }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="font-medium">AVAILABLE FOR NEW OPPORTUNITIES</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * -0.5}px)`
          }}
        >
          <button 
            onClick={() => scrollToSection('skills')}
            className="group flex flex-col items-center text-emerald-400 hover:text-emerald-300 transition-all duration-500"
          >
            <div className="animate-bounce group-hover:animate-none mb-2">
              <ArrowDown className="h-6 w-6" />
            </div>
            <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              SCROLL TO EXPLORE
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-emerald-400 to-transparent mt-2 opacity-50"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
