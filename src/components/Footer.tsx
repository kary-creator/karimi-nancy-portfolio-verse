
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-navy-950 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Karimi Nancy</h3>
            <p className="text-gray-400 mt-2">Business Information Technology Professional</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-navy-800 hover:bg-navy-700 text-white rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-navy-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Karimi Nancy. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/nancy-karimi-6886562b6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/kary-creator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:nancykarimi@example.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
