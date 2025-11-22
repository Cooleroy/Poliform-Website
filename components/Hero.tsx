import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-24 pb-12">
      <div className="relative w-full max-w-[1800px] h-[80vh] rounded-2xl overflow-hidden shadow-2xl group">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop"
          alt="Modern Living Room"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 drop-shadow-lg">
            Contemporary
          </h2>
          
          <div className="max-w-lg backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20 mt-8 md:mt-0 md:absolute md:bottom-16 md:left-16 md:text-left text-center">
            <p className="text-sm md:text-base mb-6 text-gray-100 leading-relaxed">
              Crafting spaces that harmonize modern aesthetics with timeless elegance, 
              our contemporary interior designs breathe life into every room, 
              redefining the essence of chic living.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
              View More <ArrowRight size={16} />
            </button>
          </div>

           {/* Play button / interactive element in center */}
           <div className="hidden md:flex absolute bottom-16 right-16 items-center gap-4">
              <div className="w-32 h-20 rounded-lg overflow-hidden border-2 border-white/50 hover:border-white transition-colors cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="preview" />
              </div>
              <span className="text-xs tracking-widest uppercase rotate-90 origin-left translate-y-8 text-white/80">Scroll</span>
           </div>
        </div>
      </div>
    </section>
  );
};