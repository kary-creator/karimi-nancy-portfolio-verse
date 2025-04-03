
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Karimi Nancy | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
