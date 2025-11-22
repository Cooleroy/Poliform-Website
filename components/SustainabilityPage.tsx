
import React from 'react';
import { ArrowLeft, Leaf, Recycle, Zap, Droplet } from 'lucide-react';

interface SustainabilityPageProps {
  onBack: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-700 mb-4 block">Our Responsibility</span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-dark mb-8">Sustainability</h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
           We believe that true luxury lies in respect for the environment. Our commitment to sustainability is woven into every step of our production process.
        </p>
      </div>

      {/* Hero */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-24">
         <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b73?q=80&w=2000&auto=format&fit=crop" 
              alt="Nature" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-12 left-12 text-white">
               <h2 className="text-4xl font-bold">Design for a Better Future</h2>
            </div>
         </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-600">
               <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <Leaf size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Eco-Design</h3>
               <p className="text-gray-600 leading-relaxed">
                  Our products are designed to last. Timeless aesthetics combined with durable construction ensure that our furniture transcends trends and minimizes waste through longevity.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-600">
               <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <Recycle size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Responsible Sourcing</h3>
               <p className="text-gray-600 leading-relaxed">
                  We exclusively use wood from certified forests managed according to strict environmental and social standards. Our materials are tracked from origin to finished product.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-600">
               <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <Zap size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Green Energy</h3>
               <p className="text-gray-600 leading-relaxed">
                  Our production facilities are powered by 100% renewable energy sources. We have significantly reduced our carbon footprint through photovoltaic systems and energy-efficient machinery.
               </p>
            </div>
         </div>

         <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
             <div className="md:w-1/2 relative min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop" 
                  alt="Sustainable Materials" 
                  className="w-full h-full object-cover absolute inset-0"
                />
             </div>
             <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 text-green-700 font-bold uppercase tracking-wider text-sm">
                   <Droplet size={18} /> Zero Waste Initiative
                </div>
                <h3 className="text-3xl font-bold mb-6">Reduction & Recycling</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                   We have implemented a closed-loop system for our production waste. Sawdust and wood scraps are collected and repurposed as thermal energy to heat our factories during winter, or recycled into new particleboard panels.
                </p>
                <button className="self-start border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-green-700 hover:border-green-700 transition-colors">
                   Read our 2023 Sustainability Report
                </button>
             </div>
         </div>

      </div>
    </div>
  );
};
