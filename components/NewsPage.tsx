
import React from 'react';
import { ArrowRight, Calendar, MapPin, ArrowLeft } from 'lucide-react';

interface NewsPageProps {
  onBack: () => void;
}

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Poliform at Salone del Mobile 2024",
    category: "Events",
    date: "April 16-21, 2024",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1600&auto=format&fit=crop",
    summary: "Experience our latest collection 'Time, Light, Space' at the world's most prestigious design fair. A journey through architectural landscapes and sensory experiences."
  },
  {
    id: 2,
    title: "New Flagship Store Opening in Tokyo",
    category: "Corporate",
    date: "March 10, 2024",
    location: "Aoyama, Tokyo",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    summary: "Poliform strengthens its presence in Japan with a new monobrand store in the heart of Aoyama, designed to showcase the complete lifestyle collection."
  },
  {
    id: 3,
    title: "Sustainability Report 2023",
    category: "Sustainability",
    date: "Feb 28, 2024",
    location: "Global",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop",
    summary: "Our commitment to the environment continues. Read about our new solar energy initiatives and sustainable material sourcing protocols."
  },
  {
    id: 4,
    title: "The Sound of Design: Acoustic Panels",
    category: "Product Launch",
    date: "Jan 15, 2024",
    location: "Online",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1600&auto=format&fit=crop",
    summary: "Introducing our new line of acoustic wall paneling that merges sound dampening technology with exquisite Italian aesthetics."
  }
];

export const NewsPage: React.FC<NewsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Back Button */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-20">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-dark mb-6">News & Events</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          Keep up to date with the latest from the world of Poliform, from international design fairs to store openings and product launches.
        </p>
      </div>

      {/* Featured News */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-24">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group cursor-pointer">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
             alt="Featured News" 
             className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
           
           <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-white">
              <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-widest">
                <span className="bg-white text-black px-3 py-1 rounded-sm">Featured</span>
                <span>Press Release</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Poliform receives the Wallpaper* Design Award 2024 for Best Domestic Design</h2>
              <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-gray-300 transition-colors">
                 Read Full Story <ArrowRight size={18} />
              </button>
           </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
           {NEWS_ITEMS.map((item) => (
             <div key={item.id} className="group cursor-pointer flex flex-col">
               {/* Image Container */}
               <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-8">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded text-xs font-bold uppercase tracking-wide text-black">
                    {item.category}
                 </div>
               </div>

               {/* Content */}
               <div className="flex-1">
                 <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 border-b border-gray-300 pb-4">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {item.date}</span>
                    <span className="flex items-center gap-2"><MapPin size={14} /> {item.location}</span>
                 </div>
                 
                 <h3 className="text-3xl font-bold mb-4 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                 <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                   {item.summary}
                 </p>
                 
                 <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-black pb-1 transition-all">
                   Discover More <ArrowRight size={16} />
                 </span>
               </div>
             </div>
           ))}
        </div>
      </div>
      
      {/* Press Contact Section */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-32">
        <div className="bg-white rounded-2xl p-12 md:p-20 text-center">
           <h3 className="text-4xl font-bold mb-6">Press Area</h3>
           <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
             For high-resolution images, press kits, and interview requests, please contact our dedicated press office.
           </p>
           <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                Contact Press Office
              </button>
              <button className="bg-transparent border border-black text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Download Press Kit
              </button>
           </div>
        </div>
      </div>

    </div>
  );
};
