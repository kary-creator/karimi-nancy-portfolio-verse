
import { Book, Calendar, Download } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      title: "Software Engineering",
      institution: "PLP Academy",
      period: "2025-Present",
      description: "Comprehensive software engineering program focusing on modern development practices, algorithms, and full-stack web application development."
    },
    {
      title: "Business Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      period: "2014",
      description: "Comprehensive education in business processes and IT systems integration, focusing on database management, system analysis, and software development."
    }, 
    {
      title: "AI Career Essentials Certification",
      institution: "ALX Africa",
      period: "2024",
      description: "Specialized training in artificial intelligence fundamentals, machine learning models, and practical AI applications for business contexts."
    }, 
    {
      title: "Professional Foundations Certification",
      institution: "ALX Africa",
      period: "2025",
      description: "Development of core professional skills including business communication, project management, and workplace collaboration."
    }, 
    {
      title: "Linux Administration Certification",
      institution: "Institute of Advanced Technology",
      period: "2019",
      description: "Technical training in Linux operating systems, server administration, network configuration, and security protocols."
    }, 
    {
      title: "Virtual Assistance",
      institution: "ALX Africa",
      period: "2024",
      description: "Training in professional administrative support, organizational skills, and digital tools for remote assistance and business operations."
    }, 
    {
      title: "Graphic Design",
      institution: "Skill Development Alagappa University",
      period: "2024",
      description: "Fundamentals of visual design principles, typography, color theory, and digital design tools for creating effective visual communications."
    }
  ];
  
  return <section id="education" className="section-padding bg-navy-800/50">
      <div className="container mx-auto">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {educationItems.map((item, index) => <div key={index} className="card relative overflow-hidden animate-fade-in" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <Book size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-primary">{item.institution}</p>
                  <div className="flex items-center text-gray-400 mt-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-base">{item.period}</span>
                  </div>
                  <p className="text-gray-300 mt-4">{item.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="https://docs.google.com/document/d/1v1vwiK0XdWEMtnYCYakOjDfk3UzS2N2JHJc2yTMLiJ0/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 animate-pulse">
            <Download size={18} /> Download Full CV
          </a>
        </div>
      </div>
    </section>;
};

export default Education;
