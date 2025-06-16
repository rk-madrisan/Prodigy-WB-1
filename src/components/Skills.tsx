
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript", "Python", "Shell Scripting"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Front-End",
      skills: ["React.js", "Responsive Design", "Modern UI/UX"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Back-End",
      skills: ["Node.js", "REST API Development", "Server Architecture"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Database Design"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Others",
      skills: ["Visual Studio Code", "GitHub", "Postman", "Git"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const languages = [
    { name: "Tamil", level: "Native", percentage: 100 },
    { name: "English", level: "Fluent", percentage: 95 },
    { name: "Malayalam", level: "Proficient", percentage: 80 },
    { name: "Arabic", level: "Basic", percentage: 40 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about coding clean, scalable, and user-friendly applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredSkill(category.title)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">{category.title[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`px-3 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm transition-all duration-300 ${
                      hoveredSkill === category.title ? 'bg-gray-700 text-white' : ''
                    }`}
                    style={{ 
                      animationDelay: `${skillIndex * 100}ms`,
                      animation: hoveredSkill === category.title ? 'fade-in 0.3s ease-out forwards' : ''
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Languages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-gray-400 text-sm">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${lang.percentage}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
