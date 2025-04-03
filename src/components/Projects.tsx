
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Advanced HTML Portfolio",
      description: "A portfolio project featuring advanced HTML techniques, responsive layouts, and modern design principles.",
      tags: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/PLP-WebTechnologies/feb-2025-advanced-html-kary-creator.git",
      live: ""
    },
    {
      title: "Week 1 Web Project",
      description: "A responsive web development project showcasing front-end development skills with interactive elements.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kary-creator/week-1-web.git",
      live: ""
    },
    {
      title: "Database Design - Week 2",
      description: "A comprehensive database design project with entity-relationship diagrams and SQL implementation.",
      tags: ["SQL", "Database Design", "ERD"],
      github: "https://github.com/PLP-Database-Design/wk-2a-kary-creator.git",
      live: ""
    },
    {
      title: "Database Design - Week 1",
      description: "Foundational database project focusing on schema design, normalization, and database theory.",
      tags: ["SQL", "Database Design", "Schema"],
      github: "https://github.com/PLP-Database-Design/wk-1-kary-creator.git",
      live: ""
    },
    {
      title: "Linux System Automation",
      description: "Shell scripts and tools for automating common Linux administration tasks and system maintenance.",
      tags: ["Bash", "Linux", "Shell Scripting"],
      github: "https://github.com/kary-creator",
      live: ""
    },
    {
      title: "E-commerce Database Design",
      description: "A comprehensive SQL database design for an e-commerce platform with complex relationships and optimization.",
      tags: ["SQL", "Database Design", "ERD"],
      github: "https://github.com/kary-creator",
      live: ""
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Project Card Header */}
              <div className="mb-4 flex justify-between items-start">
                <div className="bg-navy-700/50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
              </div>
              
              {/* Project Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-medium bg-navy-700/80 text-primary/90 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary group-hover:underline inline-flex items-center gap-1"
                >
                  View Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/kary-creator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
