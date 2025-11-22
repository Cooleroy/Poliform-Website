import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TimelessSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg group">
           <img 
             src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
             alt="Timeless Interior"
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
           <div className="flex items-center space-x-2 text-gray-500 text-sm font-medium uppercase tracking-widest">
              <span>Elegance</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>Timeless</span>
           </div>
           
           <h2 className="text-5xl md:text-6xl font-bold leading-tight">
             Modern Style <br/> Timeless Charm
           </h2>

           <p className="text-gray-600 leading-relaxed max-w-md">
             Discover Poliform's 2024 preview, featuring sofas, chairs, and armchairs embodying diverse lifestyle concepts, alongside striking tables, coffee tables, and sideboards.
           </p>

           <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all inline-flex items-center gap-2">
              About Us <ArrowRight size={16} />
           </button>
        </div>

      </div>
    </section>
  );
};