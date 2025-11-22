
import React from 'react';
import { ArrowLeft, Briefcase, MapPin, ArrowRight } from 'lucide-react';

interface CareersPageProps {
  onBack: () => void;
}

const JOBS = [
  {
    id: 1,
    title: "Senior Interior Designer",
    department: "Design",
    location: "Milan, Italy",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Showroom Manager",
    department: "Sales",
    location: "New York, USA",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Product Development Specialist",
    department: "R&D",
    location: "Inverigo, Italy",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "London, UK",
    type: "Full-time"
  }
];

export const CareersPage: React.FC<CareersPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Join the Team</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-dark mb-8">Careers at Poliform</h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
           We are always looking for talented individuals who share our passion for design, innovation, and excellence. Be part of a global family.
        </p>
      </div>

      {/* Hero */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-24">
         <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
              alt="Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 p-12 text-white">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Work With Us</h2>
               <p className="max-w-xl text-lg">
                  Experience a dynamic work environment where creativity allows us to constantly reach new goals.
               </p>
            </div>
         </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
         <h3 className="text-3xl font-bold mb-12 border-b border-gray-300 pb-4">Open Positions</h3>
         
         <div className="space-y-4">
            {JOBS.map((job) => (
               <div key={job.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-black cursor-pointer group flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                     <h4 className="text-xl font-bold text-dark mb-2 group-hover:text-black">{job.title}</h4>
                     <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold uppercase">{job.type}</span>
                     </div>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-black group-hover:gap-3 transition-all">
                     Apply Now <ArrowRight size={16} />
                  </button>
               </div>
            ))}
         </div>

         <div className="mt-20 bg-stone/20 p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a role for you?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
               We are always interested in meeting new talent. Send us your CV and portfolio, and we will keep you in mind for future opportunities.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
               Send Spontaneous Application
            </button>
         </div>

      </div>
    </div>
  );
};
