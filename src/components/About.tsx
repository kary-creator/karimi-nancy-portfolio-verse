
import { User, Code, PenTool, BookUser } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate and versatile professional with a strong foundation in Business Information Technology and a growing expertise in software engineering. My journey has been shaped by curiosity, a hunger for learning, and a deep admiration for how technology can solve problems and bring ideas to life.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With hands-on experience as an intern in various government ministry departments, I've honed my skills in data cleaning and gained valuable insights into organizational workflows. My diverse skill set extends to virtual assistance, graphic design, Linux administration, and AI career essentials, complemented by a solid grounding in professional foundations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What drives me is the thrill of creating solutions that matter. I've always been fascinated by developers—how they think, innovate, and turn challenges into opportunities. This curiosity has led me to dive into software engineering, where I'm excited to build, problem-solve, and contribute to impactful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-primary mb-4">
                <User size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Experience</h3>
              <p className="text-gray-400">
                Government Ministry Internships with focus on data cleaning and organizational processes
              </p>
            </div>
            
            <div className="card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-primary mb-4">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Software Development</h3>
              <p className="text-gray-400">
                Building solutions with Python, SQL, HTML, CSS and exploring new technologies
              </p>
            </div>
            
            <div className="card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-primary mb-4">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Graphic Design</h3>
              <p className="text-gray-400">
                Creating visual assets and understanding design principles for better UI/UX
              </p>
            </div>
            
            <div className="card animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-primary mb-4">
                <BookUser size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lifelong Learning</h3>
              <p className="text-gray-400">
                Continuously expanding knowledge in AI, Linux, and professional development
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-6">My Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white">Problem Solving</h4>
              <p className="text-gray-400 mt-2">Finding elegant solutions to complex challenges</p>
            </div>
            
            <div className="glass-card text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white">Software Development</h4>
              <p className="text-gray-400 mt-2">Building tools that enhance lives</p>
            </div>
            
            <div className="glass-card text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white">Artificial Intelligence</h4>
              <p className="text-gray-400 mt-2">Exploring the frontier of AI applications</p>
            </div>
            
            <div className="glass-card text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white">Graphic Design</h4>
              <p className="text-gray-400 mt-2">Creating visuals that communicate effectively</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
