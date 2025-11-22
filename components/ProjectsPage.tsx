
import React, { useState } from 'react';
import { ArrowRight, MapPin, ArrowLeft } from 'lucide-react';

interface ProjectsPageProps {
  onBack: () => void;
}

type Category = 'All' | 'Residential' | 'Commercial' | 'Hospitality';

const PROJECTS = [
  {
    id: 1,
    title: "Penthouse Central Park",
    location: "New York, USA",
    year: "2023",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    description: "A dialogue between the skyline and the interior, featuring bespoke Poliform systems throughout the living and night areas."
  },
  {
    id: 2,
    title: "Villa on the Riviera",
    location: "Cannes, France",
    year: "2022",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    description: "Light-filled spaces opening onto the Mediterranean. A complete interior design project focusing on natural materials and continuity."
  },
  {
    id: 3,
    title: "The Grand Hotel",
    location: "Milan, Italy",
    year: "2023",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1600&auto=format&fit=crop",
    description: "Redefining luxury hospitality with common areas and suites furnished to create an atmosphere of sophisticated comfort."
  },
  {
    id: 4,
    title: "Tech Headquarters",
    location: "Silicon Valley, USA",
    year: "2024",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    description: "Executive offices and lounge areas designed to foster collaboration while maintaining an elegant corporate identity."
  },
  {
    id: 5,
    title: "Seaside Retreat",
    location: "Kyoto, Japan",
    year: "2022",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    description: "A minimalist approach respecting traditional Japanese aesthetics while introducing contemporary Italian design elements."
  },
  {
    id: 6,
    title: "Luxury Boutique",
    location: "Paris, France",
    year: "2023",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1600&auto=format&fit=crop",
    description: "A retail space that serves as a gallery for high-end fashion, utilizing custom shelving and display units."
  }
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Back Button */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-300 pb-8">
          <div>
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Architectural Portfolio</span>
             <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-dark">Our Projects</h1>
          </div>
          <p className="text-lg text-gray-500 max-w-md mt-6 md:mt-0 text-right md:text-left">
            From private residences to large-scale contract projects, exploring the versatility of the Poliform collection worldwide.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
           {(['All', 'Residential', 'Commercial', 'Hospitality'] as Category[]).map((cat) => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`text-sm font-bold uppercase tracking-widest transition-all pb-1 border-b-2 ${
                 activeCategory === cat 
                   ? 'border-black text-black' 
                   : 'border-transparent text-gray-400 hover:text-gray-600'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
           {filteredProjects.map((project, index) => (
             <div 
                key={project.id} 
                className={`group cursor-pointer flex flex-col ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
             >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                  
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                     <span className="bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide">{project.category}</span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                   <div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-gray-600 transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 uppercase tracking-wider">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{project.year}</span>
                      </div>
                   </div>
                   <div className="border border-gray-300 rounded-full p-3 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                      <ArrowRight size={20} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                   </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed max-w-lg">
                   {project.description}
                </p>
             </div>
           ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-40">
         <div className="bg-dark text-white rounded-2xl p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Start Your Project</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                 Whether you are an architect, interior designer, or private client, our team is ready to assist you in realizing your vision.
              </p>
              <button className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                 Contact Our Design Team
              </button>
            </div>
         </div>
      </div>

    </div>
  );
};
