
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [projectRef, projectVisible] = useScrollAnimation();
  const [footerRef, footerVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a fully responsive personal portfolio website using HTML5, CSS3, and JavaScript, highlighting my profile, skills, education, accomplishments, and contact details.",
      features: [
        "Modern, clean, and mobile-friendly UI",
        "Smooth navigation between sections", 
        "Integrated contact form and social media links",
        "Custom color schemes and typography for personal branding",
        "Future upgrades planned using React.js for enhanced interactivity"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js (Planned)"],
      status: "Completed",
      gradient: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my journey in web development through practical applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              ref={projectRef}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-700 hover:transform hover:scale-105 group ${
                projectVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">📌</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-green-400 text-sm font-medium">{project.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={footerRef} className={`text-center mt-12 transition-all duration-700 ${footerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-400 text-lg">
            More projects coming soon as I continue my development journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
