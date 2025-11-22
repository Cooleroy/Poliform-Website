
import React from 'react';
import { ArrowLeft, Clock, PenTool, Award } from 'lucide-react';

interface StoryPageProps {
  onBack: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">About Us</span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-dark mb-8">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-serif italic">
          "Poliform is not just a company; it is a family, a vision, and a relentless pursuit of beauty in everyday living."
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-24">
        <div className="w-full h-[60vh] rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2000&auto=format&fit=crop" 
            alt="Poliform Interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* Section 1: Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8">
                <Clock size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">A Heritage of Excellence</h2>
              <div className="prose prose-stone text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Founded in 1970, Poliform evolved from an artisan shop established in 1942. This heritage of craftsmanship is the foundation upon which we have built a global brand synonymous with luxury and quality.
                </p>
                <p>
                  From the heart of the Brianza district in Italy, we have maintained our roots while embracing innovation. Every piece of furniture that leaves our factory carries with it decades of knowledge, passed down through generations of master craftsmen.
                </p>
              </div>
           </div>
           <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1600&auto=format&fit=crop" 
                alt="Heritage" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Section 2: Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
           <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                alt="Philosophy" 
                className="w-full h-full object-cover"
              />
           </div>
           <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8">
                <PenTool size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Design Philosophy</h2>
              <div className="prose prose-stone text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Our philosophy is centered on the concept of the "Poliform House"—a stylistic project that connects every room in the home through a coherent and recognizable design language.
                </p>
                <p>
                  We collaborate with world-renowned designers and architects to create products that are timeless, functional, and aesthetically pure. We believe that design should improve the quality of life, creating spaces that are as comfortable as they are beautiful.
                </p>
              </div>
           </div>
        </div>

        {/* Section 3: Quality */}
        <div className="bg-white p-12 md:p-20 rounded-2xl shadow-sm text-center">
           <div className="w-20 h-20 bg-stone mx-auto rounded-full flex items-center justify-center mb-8 text-dark">
              <Award size={40} />
           </div>
           <h2 className="text-4xl font-bold mb-8">Uncompromising Quality</h2>
           <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
             Quality is not just a standard; it is a mindset. From the selection of raw materials to the final finishing touches, we enforce rigorous quality controls to ensure that every product meets our exacting standards. We source the finest woods, stones, fabrics, and leathers, treating them with respect to highlight their natural beauty.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="border-l-2 border-black pl-6">
                 <h4 className="font-bold text-xl mb-2">Made in Italy</h4>
                 <p className="text-sm text-gray-500">100% of our production takes place in Italy, ensuring authentic craftsmanship.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                 <h4 className="font-bold text-xl mb-2">Technological Innovation</h4>
                 <p className="text-sm text-gray-500">Advanced industrial processes combined with manual skill.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                 <h4 className="font-bold text-xl mb-2">Global Presence</h4>
                 <p className="text-sm text-gray-500">Represented in over 85 countries with flagship stores worldwide.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
