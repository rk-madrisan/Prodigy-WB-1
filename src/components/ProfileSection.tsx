
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileSectionProps {
  mousePosition: { x: number; y: number };
}

const ProfileSection = ({ mousePosition }: ProfileSectionProps) => {
  return (
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
    </div>
  );
};

export default ProfileSection;
