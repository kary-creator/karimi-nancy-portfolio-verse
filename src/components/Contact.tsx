
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-600/30 rounded-md text-green-400 text-center animate-fade-in">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-600/30 rounded-md text-red-400 text-center animate-fade-in">
                    {submitError}
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Information and Voice Recording */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a href="mailto:kariminancy097@gmail.com" className="text-white hover:text-primary transition-colors">
                      kariminancy097@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full text-primary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-white">
                      Meru, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full text-primary mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <a href="tel:+254726343215" className="text-white hover:text-primary transition-colors">
                      +254 726 343 215
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-white mb-6">Voice Introduction</h3>
              <p className="text-gray-300 mb-4">
                Listen to my voice introduction where I share my passion for technology and what drives me as a professional.
              </p>
              
              <div className="p-4 bg-navy-700/80 rounded-lg">
                <audio controls className="w-full">
                  <source src="https://drive.google.com/uc?export=download&id=1QlhbE1-qpj1hmOidTVpkyktfKHWHCveP" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <a 
                  href="https://drive.google.com/file/d/1QlhbE1-qpj1hmOidTVpkyktfKHWHCveP/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Trouble playing? Open in Google Drive
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
