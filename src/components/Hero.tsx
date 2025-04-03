
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Hi, I'm <span className="text-primary">Karimi Nancy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A passionate and versatile professional with a strong foundation in Business Information Technology and a growing expertise in software engineering.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a 
                href="https://docs.google.com/document/d/1v1vwiK0XdWEMtnYCYakOjDfk3UzS2N2JHJc2yTMLiJ0/edit?tab=t.0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-700 to-navy-800 border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/808a0b69-6c42-4d43-9c07-17856b23d66e.png" 
                  alt="Karimi Nancy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-800 rounded-lg glass-card flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-xl font-bold text-white">2+ Yrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
