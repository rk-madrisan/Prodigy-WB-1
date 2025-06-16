
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "mriyaskhan.official@gmail.com",
      link: "mailto:mriyaskhan.official@gmail.com",
      icon: "📧",
      color: "from-red-500 to-pink-500"
    },
    {
      type: "Phone",
      value: "+91 9092211595",
      link: "tel:+919092211595",
      icon: "📱",
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "Location",
      value: "Tenkasi, Tamil Nadu, India",
      link: "#",
      icon: "📍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "GitHub",
      value: "github.com/rk-Madrisan",
      link: "https://github.com/rk-Madrisan",
      icon: "🌐",
      color: "from-purple-500 to-violet-500"
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/riyaskhan",
      link: "https://linkedin.com/in/riyaskhan",
      icon: "🌐",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const interests = [
    "Exploring New Places", "Driving", "Cooking", "Drawing", 
    "Watching Movies", "Listening to Music"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm eager to contribute to dynamic development teams and continue enhancing my technical skills. Let's build something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="block bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center`}>
                      <span className="text-2xl">{contact.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {contact.type}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>

            {/* Personal Interests & CTA */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Personal Interests</h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div 
                      key={index}
                      className="px-4 py-3 bg-gray-700 rounded-lg text-gray-300 text-center hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
                <p className="text-purple-100 mb-6">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together!
                </p>
                <Button 
                  className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = 'mailto:mriyaskhan.official@gmail.com'}
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Mohamed Riyaskhan M. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
