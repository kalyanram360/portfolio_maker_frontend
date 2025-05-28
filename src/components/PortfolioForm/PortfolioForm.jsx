// import React, { useState, useEffect } from 'react';
// import { Plus, Trash2, User, Mail, Phone, MapPin, Github, Linkedin, Instagram, Code, Briefcase } from 'lucide-react';

// const PortfolioForm = () => {
//   const [formData, setFormData] = useState({
//     contact_info: {
//       email: '',
//       phone: '',
//       linkedin: '',
//       github: '',
//       instagram: '',
//       location: ''
//     },
//     home_info: {
//       name: '',
//       quote: ''
//     },
//     projects_info: [
//       {
//         title: '',
//         description: '',
//         githubUrl: '',
//         liveUrl: ''
//       }
//     ],
//     languages_skills_info: [
//       {
//         name: '',
//         icon: '',
//         level: 50
//       }
//     ],
//     frameworks_skills_info: [
//       {
//         name: '',
//         icon: '',
//         level: 50
//       }
//     ]
//   });

//   // Particle animation effect (same as home)
//   useEffect(() => {
//     const particles = document.getElementById('particles');
//     const particleCount = 20;

//     if (particles) {
//       particles.innerHTML = '';
//     }

//     for (let i = 0; i < particleCount; i++) {
//       const size = Math.random() * 8 + 3;
//       const particle = document.createElement('div');
//       particle.classList.add('particle');

//       const left = Math.random() * 100;
//       const duration = Math.random() * 25 + 15;
//       const delay = Math.random() * 5;
//       const color = Math.random() > 0.5 ? '#4f46e5' : '#818cf8';

//       particle.style.width = `${size}px`;
//       particle.style.height = `${size}px`;
//       particle.style.left = `${left}%`;
//       particle.style.top = `${Math.random() * 100}%`;
//       particle.style.backgroundColor = color;
//       particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
//       particle.style.animationDuration = `${duration}s`;
//       particle.style.animationDelay = `${delay}s`;

//       particles.appendChild(particle);
//     }
//   }, []);

//   const handleInputChange = (section, field, value, index = null) => {
//     setFormData(prev => {
//       const newData = { ...prev };
      
//       if (index !== null) {
//         newData[section][index][field] = value;
//       } else if (section === 'contact_info' || section === 'home_info') {
//         newData[section][field] = value;
//       }
      
//       return newData;
//     });
//   };

//   const addProject = () => {
//     setFormData(prev => ({
//       ...prev,
//       projects_info: [...prev.projects_info, {
//         title: '',
//         description: '',
//         githubUrl: '',
//         liveUrl: ''
//       }]
//     }));
//   };

//   const removeProject = (index) => {
//     setFormData(prev => ({
//       ...prev,
//       projects_info: prev.projects_info.filter((_, i) => i !== index)
//     }));
//   };

//   const addSkill = (type) => {
//     const skillType = type === 'language' ? 'languages_skills_info' : 'frameworks_skills_info';
//     setFormData(prev => ({
//       ...prev,
//       [skillType]: [...prev[skillType], {
//         name: '',
//         icon: '',
//         level: 50
//       }]
//     }));
//   };

//   const removeSkill = (type, index) => {
//     const skillType = type === 'language' ? 'languages_skills_info' : 'frameworks_skills_info';
//     setFormData(prev => ({
//       ...prev,
//       [skillType]: prev[skillType].filter((_, i) => i !== index)
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', JSON.stringify(formData, null, 2));
//     alert('Portfolio data collected! Check console for JSON output.');
//   };

//   return (
//     <>
//       <style jsx>{`
//         .particles {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           z-index: -1;
//           pointer-events: none;
//         }

//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           opacity: 0.15;
//           animation: particleAnimation linear infinite;
//         }

//         @keyframes particleAnimation {
//           0% { transform: translateY(0) rotate(0deg); }
//           100% { transform: translateY(-1000px) rotate(720deg); }
//         }

//         .gradient-text {
//           background: linear-gradient(90deg, #4f46e5, #818cf8);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .fade-in {
//           opacity: 0;
//           animation: fadeIn 0.8s forwards;
//         }

//         @keyframes fadeIn {
//           to { opacity: 1; }
//         }

//         .form-section {
//           animation: slideUp 0.6s forwards;
//           opacity: 0;
//           transform: translateY(20px);
//         }

//         .form-section:nth-child(1) { animation-delay: 0.1s; }
//         .form-section:nth-child(2) { animation-delay: 0.2s; }
//         .form-section:nth-child(3) { animation-delay: 0.3s; }
//         .form-section:nth-child(4) { animation-delay: 0.4s; }
//         .form-section:nth-child(5) { animation-delay: 0.5s; }

//         @keyframes slideUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .skill-slider {
//           background: linear-gradient(90deg, #e2e8f0 0%, #e2e8f0 var(--value), #f1f5f9 var(--value), #f1f5f9 100%);
//         }

//         .skill-slider::-webkit-slider-thumb {
//           appearance: none;
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background: #4f46e5;
//           cursor: pointer;
//           border: 2px solid white;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//         }

//         .skill-slider::-moz-range-thumb {
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background: #4f46e5;
//           cursor: pointer;
//           border: 2px solid white;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//         }
//       `}</style>

//       <div className="particles" id="particles"></div>

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4 relative">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12 fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
//               Create Your Portfolio
//             </h1>
//             <p className="text-lg text-gray-600">
//               Fill in your details to generate your professional portfolio
//             </p>
//           </div>

//           <div className="space-y-8">
//             {/* Personal Information */}
//             <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <User className="w-6 h-6 text-indigo-600 mr-3" />
//                 <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     value={formData.home_info.name}
//                     onChange={(e) => handleInputChange('home_info', 'name', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Personal Quote</label>
//                   <input
//                     type="text"
//                     value={formData.home_info.quote}
//                     onChange={(e) => handleInputChange('home_info', 'quote', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="Your inspiring quote"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <Mail className="w-6 h-6 text-indigo-600 mr-3" />
//                 <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     value={formData.contact_info.email}
//                     onChange={(e) => handleInputChange('contact_info', 'email', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="your@email.com"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                   <input
//                     type="tel"
//                     value={formData.contact_info.phone}
//                     onChange={(e) => handleInputChange('contact_info', 'phone', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="+1 234 567 8900"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                   <input
//                     type="text"
//                     value={formData.contact_info.location}
//                     onChange={(e) => handleInputChange('contact_info', 'location', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="City, Country"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
//                   <input
//                     type="url"
//                     value={formData.contact_info.linkedin}
//                     onChange={(e) => handleInputChange('contact_info', 'linkedin', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="https://linkedin.com/in/username"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
//                   <input
//                     type="url"
//                     value={formData.contact_info.github}
//                     onChange={(e) => handleInputChange('contact_info', 'github', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="https://github.com/username"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
//                   <input
//                     type="url"
//                     value={formData.contact_info.instagram}
//                     onChange={(e) => handleInputChange('contact_info', 'instagram', e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                     placeholder="https://instagram.com/username"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Projects */}
//             <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={addProject}
//                   className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add Project
//                 </button>
//               </div>
              
//               {formData.projects_info.map((project, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold text-gray-700">Project {index + 1}</h3>
//                     {formData.projects_info.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeProject(index)}
//                         className="text-red-500 hover:text-red-700 transition-colors"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     )}
//                   </div>
                  
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
//                       <input
//                         type="text"
//                         value={project.title}
//                         onChange={(e) => handleInputChange('projects_info', 'title', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Project name"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
//                       <input
//                         type="url"
//                         value={project.githubUrl}
//                         onChange={(e) => handleInputChange('projects_info', 'githubUrl', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://github.com/..."
//                       />
//                     </div>
                    
//                     <div className="md:col-span-2">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                       <textarea
//                         value={project.description}
//                         onChange={(e) => handleInputChange('projects_info', 'description', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         rows="3"
//                         placeholder="Describe your project..."
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Live URL</label>
//                       <input
//                         type="url"
//                         value={project.liveUrl}
//                         onChange={(e) => handleInputChange('projects_info', 'liveUrl', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://yourproject.com"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Programming Languages */}
//             <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Code className="w-6 h-6 text-indigo-600 mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">Programming Languages</h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => addSkill('language')}
//                   className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add Language
//                 </button>
//               </div>
              
//               {formData.languages_skills_info.map((skill, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold text-gray-700">Language {index + 1}</h3>
//                     {formData.languages_skills_info.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeSkill('language', index)}
//                         className="text-red-500 hover:text-red-700 transition-colors"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     )}
//                   </div>
                  
//                   <div className="grid md:grid-cols-3 gap-4 items-end">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Language Name</label>
//                       <input
//                         type="text"
//                         value={skill.name}
//                         onChange={(e) => handleInputChange('languages_skills_info', 'name', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="e.g., Python"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Icon URL</label>
//                       <input
//                         type="url"
//                         value={skill.icon}
//                         onChange={(e) => handleInputChange('languages_skills_info', 'icon', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://cdn.jsdelivr.net/..."
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Skill Level: {skill.level}%
//                       </label>
//                       <input
//                         type="range"
//                         min="0"
//                         max="100"
//                         value={skill.level}
//                         onChange={(e) => handleInputChange('languages_skills_info', 'level', parseInt(e.target.value), index)}
//                         className="w-full skill-slider"
//                         style={{ '--value': `${skill.level}%` }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Frameworks */}
//             <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Code className="w-6 h-6 text-indigo-600 mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">Frameworks & Technologies</h2>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => addSkill('framework')}
//                   className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add Framework
//                 </button>
//               </div>
              
//               {formData.frameworks_skills_info.map((skill, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold text-gray-700">Framework {index + 1}</h3>
//                     {formData.frameworks_skills_info.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeSkill('framework', index)}
//                         className="text-red-500 hover:text-red-700 transition-colors"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     )}
//                   </div>
                  
//                   <div className="grid md:grid-cols-3 gap-4 items-end">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Framework Name</label>
//                       <input
//                         type="text"
//                         value={skill.name}
//                         onChange={(e) => handleInputChange('frameworks_skills_info', 'name', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="e.g., React"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Icon URL</label>
//                       <input
//                         type="url"
//                         value={skill.icon}
//                         onChange={(e) => handleInputChange('frameworks_skills_info', 'icon', e.target.value, index)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://cdn.jsdelivr.net/..."
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Skill Level: {skill.level}%
//                       </label>
//                       <input
//                         type="range"
//                         min="0"
//                         max="100"
//                         value={skill.level}
//                         onChange={(e) => handleInputChange('frameworks_skills_info', 'level', parseInt(e.target.value), index)}
//                         className="w-full skill-slider"
//                         style={{ '--value': `${skill.level}%` }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center pt-8">
//               <button
//                 onClick={handleSubmit}
//                 className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//               >
//                 Generate Portfolio
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-1/4 left-20 w-16 h-16 bg-indigo-600/10 rounded-full"></div>
//         <div className="absolute top-1/3 right-24 w-24 h-24 bg-indigo-400/10 rounded-full"></div>
//         <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-indigo-600/10 rounded-full"></div>
//         <div className="absolute bottom-1/3 right-40 w-12 h-12 bg-indigo-400/10 rounded-full"></div>
//       </div>
//     </>
//   );
// };

// export default PortfolioForm;







import React, { useState, useEffect } from 'react';
import { Plus, Trash2, User, Mail, Phone, MapPin, Github, Linkedin, Instagram, Code, Briefcase } from 'lucide-react';
const PortfolioForm = () => {
  const [userId, setUserId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    contact_info: {
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      instagram: '',
      location: ''
    },
    home_info: {
      name: '',
      quote: ''
    },
    projects_info: [
      {
        title: '',
        description: '',
        githubUrl: '',
        liveUrl: '',
        imageUrl: ''
      }
    ],
    languages_skills_info: [
      {
        name: '',
        icon: '',
        level: 50
      }
    ],
    frameworks_skills_info: [
      {
        name: '',
        icon: '',
        level: 50
      }
    ]
  });

  // Particle animation effect (same as home)
  useEffect(() => {
    const particles = document.getElementById('particles');
    const particleCount = 20;

    if (particles) {
      particles.innerHTML = '';
    }

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 8 + 3;
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const left = Math.random() * 100;
      const duration = Math.random() * 25 + 15;
      const delay = Math.random() * 5;
      const color = Math.random() > 0.5 ? '#4f46e5' : '#818cf8';

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.backgroundColor = color;
      particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      particles.appendChild(particle);
    }
  }, []);

//unplad image to backend for cloudinary purpose
  const uploadToCloudinary = async (file) => {
  // Convert file to base64
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        });

    try {
        const base64Image = await toBase64(file);

        const response = await fetch("http://localhost:3000/json/image", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
        });

        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload image");
        }
                                                                
        const data = await response.json();
        console.log(data.url);
        return data.url;
        
         // Cloudinary hosted URL
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
};


  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      const newData = { ...prev };
      
      if (index !== null) {
        newData[section][index][field] = value;
      } else if (section === 'contact_info' || section === 'home_info') {
        newData[section][field] = value;
      }
      
      return newData;
    });
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects_info: [...prev.projects_info, {
        title: '',
        description: '',
        githubUrl: '',
        liveUrl: '',
        imageUrl: ''
      }]
    }));
  };

  const removeProject = (index) => {
    setFormData(prev => ({
      ...prev,
      projects_info: prev.projects_info.filter((_, i) => i !== index)
    }));
  };

  const addSkill = (type) => {
    const skillType = type === 'language' ? 'languages_skills_info' : 'frameworks_skills_info';
    setFormData(prev => ({
      ...prev,
      [skillType]: [...prev[skillType], {
        name: '',
        icon: '',
        level: 50
      }]
    }));
  };

  const removeSkill = (type, index) => {
    const skillType = type === 'language' ? 'languages_skills_info' : 'frameworks_skills_info';
    setFormData(prev => ({
      ...prev,
      [skillType]: prev[skillType].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/json/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setUserId(result.userId); // Backend returns the generated userId
      localStorage.setItem('portfolioUserId', result.userId); 

        alert('Portfolio created successfully!');
        console.log('Success:', result);
        
        // Optional: Reset form or redirect
        // setFormData({ /* reset to initial state */ });
    window.location.href = `/deploy`;
      } else {
        throw new Error(result.message || 'Failed to create portfolio');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Error creating portfolio: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: particleAnimation linear infinite;
        }

        @keyframes particleAnimation {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-1000px) rotate(720deg); }
        }

        .gradient-text {
          background: linear-gradient(90deg, #4f46e5, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .form-section {
          animation: slideUp 0.6s forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .form-section:nth-child(1) { animation-delay: 0.1s; }
        .form-section:nth-child(2) { animation-delay: 0.2s; }
        .form-section:nth-child(3) { animation-delay: 0.3s; }
        .form-section:nth-child(4) { animation-delay: 0.4s; }
        .form-section:nth-child(5) { animation-delay: 0.5s; }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-slider {
          background: linear-gradient(90deg, #e2e8f0 0%, #e2e8f0 var(--value), #f1f5f9 var(--value), #f1f5f9 100%);
        }

        .skill-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .skill-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="particles" id="particles"></div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Create Your Portfolio
            </h1>
            <p className="text-lg text-gray-600">
              Fill in your details to generate your professional portfolio
            </p>
          </div>

          <div className="space-y-8">
            {/* Personal Information */}
            <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.home_info.name}
                    onChange={(e) => handleInputChange('home_info', 'name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Personal Quote</label>
                  <input
                    type="text"
                    value={formData.home_info.quote}
                    onChange={(e) => handleInputChange('home_info', 'quote', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Your inspiring quote"
                  />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Profile Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                        const file = e.target.files[0];
                        if (!file) return;

                        try {
                            const imageUrl = await uploadToCloudinary(file); // your function
                            handleInputChange('home_info', 'profileImage', imageUrl); // store in formData
                            alert('Image uploaded successfully!');
                        } catch (err) {
                            console.error('Image upload failed:', err);
                            alert('Failed to upload image');
                        }
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.contact_info.email}
                    onChange={(e) => handleInputChange('contact_info', 'email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.contact_info.phone}
                    onChange={(e) => handleInputChange('contact_info', 'phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.contact_info.location}
                    onChange={(e) => handleInputChange('contact_info', 'location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="City, Country"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                  <input
                    type="url"
                    value={formData.contact_info.linkedin}
                    onChange={(e) => handleInputChange('contact_info', 'linkedin', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                  <input
                    type="url"
                    value={formData.contact_info.github}
                    onChange={(e) => handleInputChange('contact_info', 'github', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="https://github.com/username"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                  <input
                    type="url"
                    value={formData.contact_info.instagram}
                    onChange={(e) => handleInputChange('contact_info', 'instagram', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="https://instagram.com/username"
                  />
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Briefcase className="w-6 h-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                </div>
                <button
                  type="button"
                  onClick={addProject}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </button>
              </div>
              
              {formData.projects_info.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Project {index + 1}</h3>
                    {formData.projects_info.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleInputChange('projects_info', 'title', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Project name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                      <input
                        type="url"
                        value={project.githubUrl}
                        onChange={(e) => handleInputChange('projects_info', 'githubUrl', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="https://github.com/..."
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleInputChange('projects_info', 'description', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        rows="3"
                        placeholder="Describe your project..."
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Live URL</label>
                      <input
                        type="url"
                        value={project.liveUrl}
                        onChange={(e) => handleInputChange('projects_info', 'liveUrl', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="https://yourproject.com"
                      />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Project Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            try {
                                const imageUrl = await uploadToCloudinary(file); // your existing function
                                const updatedProjects = [...formData.projects_info];
                                updatedProjects[index].imageUrl = imageUrl;
                                setFormData({ ...formData, projects_info: updatedProjects });
                                alert("Project image uploaded successfully!");
                            } catch (err) {
                                console.error("Image upload failed:", err);
                                alert("Failed to upload project image");
                            }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                        {project.imageUrl && (
                            <img
                            src={project.imageUrl}
                            alt="Project Preview"
                            className="mt-2 h-24 rounded shadow border object-cover"
                            />
                        )}
                    </div>


                  </div>
                </div>
              ))}
            </div>

            {/* Programming Languages */}
            <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Code className="w-6 h-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Programming Languages</h2>
                </div>
                <button
                  type="button"
                  onClick={() => addSkill('language')}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Language
                </button>
              </div>
              
              {formData.languages_skills_info.map((skill, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Language {index + 1}</h3>
                    {formData.languages_skills_info.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSkill('language', index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language Name</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleInputChange('languages_skills_info', 'name', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="e.g., Python"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Icon URL</label>
                      <input
                        type="url"
                        value={skill.icon}
                        onChange={(e) => handleInputChange('languages_skills_info', 'icon', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="https://cdn.jsdelivr.net/..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Skill Level: {skill.level}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => handleInputChange('languages_skills_info', 'level', parseInt(e.target.value), index)}
                        className="w-full skill-slider"
                        style={{ '--value': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Frameworks */}
            <div className="form-section bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Code className="w-6 h-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Frameworks & Technologies</h2>
                </div>
                <button
                  type="button"
                  onClick={() => addSkill('framework')}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Framework
                </button>
              </div>
              
              {formData.frameworks_skills_info.map((skill, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Framework {index + 1}</h3>
                    {formData.frameworks_skills_info.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSkill('framework', index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Framework Name</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleInputChange('frameworks_skills_info', 'name', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="e.g., React"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Icon URL</label>
                      <input
                        type="url"
                        value={skill.icon}
                        onChange={(e) => handleInputChange('frameworks_skills_info', 'icon', e.target.value, index)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="https://cdn.jsdelivr.net/..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Skill Level: {skill.level}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => handleInputChange('frameworks_skills_info', 'level', parseInt(e.target.value), index)}
                        className="w-full skill-slider"
                        style={{ '--value': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button

                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`inline-flex items-center px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Portfolio...
                  </>
                ) : (
                  'Generate Portfolio'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-20 w-16 h-16 bg-indigo-600/10 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-24 h-24 bg-indigo-400/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-indigo-600/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-40 w-12 h-12 bg-indigo-400/10 rounded-full"></div>
      </div>
    </>
  );
};

export default PortfolioForm;