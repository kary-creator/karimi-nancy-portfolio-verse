
import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-900/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Karimi Nancy
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <div className="flex items-center space-x-4 ml-4">
            <a
              href="https://www.linkedin.com/in/nancy-karimi-6886562b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/kary-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-md shadow-lg animate-fade-in">
            <nav className="flex flex-col py-4 px-4">
              <a
                href="#about"
                className="py-3 px-4 hover:bg-navy-800 rounded-md"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#education"
                className="py-3 px-4 hover:bg-navy-800 rounded-md"
                onClick={toggleMenu}
              >
                Education
              </a>
              <a
                href="#projects"
                className="py-3 px-4 hover:bg-navy-800 rounded-md"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="py-3 px-4 hover:bg-navy-800 rounded-md"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="py-3 px-4 hover:bg-navy-800 rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="flex space-x-4 mt-4 px-4">
                <a
                  href="https://www.linkedin.com/in/nancy-karimi-6886562b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/kary-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
