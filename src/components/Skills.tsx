
import { Code } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "Linux", level: 70 },
    { name: "Data Analysis", level: 75 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Project Management", level: 75 },
    { name: "Teamwork", level: 90 },
  ];

  return (
    <section id="skills" className="section-padding bg-navy-800/50">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          {/* Programming Languages & Technical Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code size={24} className="mr-3 text-primary" /> 
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-navy-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Professional Skills
            </h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 + 0.1 * index}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-navy-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 glass-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h4 className="text-xl font-semibold text-white mb-4">Additional Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {["Data Cleaning", "Graphic Design", "Virtual Assistance", "Linux Administration", 
                  "Business Analysis", "System Analysis", "UI/UX Basics", "Content Creation"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-navy-700/80 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
