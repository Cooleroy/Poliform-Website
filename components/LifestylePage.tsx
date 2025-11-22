
import React from 'react';
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react';

interface LifestylePageProps {
  onBack: () => void;
}

const ARTICLES = [
  {
    id: 1,
    title: "The Art of Slow Living",
    category: "Philosophy",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
    excerpt: "In a world that moves faster than ever, our homes become the sanctuary where time slows down. Discover how to curate spaces that breathe."
  },
  {
    id: 2,
    title: "Sustainable Luxury",
    category: "Materials",
    date: "Sep 28, 2024",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Luxury is no longer just about aesthetics; it's about the story behind the materials. Exploring the beauty of reclaimed wood and natural stone."
  },
  {
    id: 3,
    title: "Lighting as Architecture",
    category: "Design",
    date: "Sep 15, 2024",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1600&auto=format&fit=crop",
    excerpt: "How light shapes volume and mood. A deep dive into designing with shadows and illumination to create emotional depth in your interiors."
  }
];

export const LifestylePage: React.FC<LifestylePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in">
      
      {/* Back Button */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Poliform Magazine</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-dark leading-tight">Stories of <br/><span className="text-gray-500 font-serif italic">Living & Design</span></h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Exploring the intersection of contemporary architecture, timeless aesthetics, and the way we inhabit our spaces today.
          </p>
        </div>

        <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
           <img 
             src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop" 
             alt="Lifestyle Hero" 
             className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
           <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs uppercase font-bold mb-4 inline-block">Featured Story</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">The Modern Kitchen: <br/>Heart of the Home</h2>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline mt-4">
                Read Article <ArrowRight size={16} />
              </button>
           </div>
        </div>
      </div>

      {/* Latest Articles Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
         <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h3 className="text-3xl font-bold">Latest Journals</h3>
            <button className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-gray-600 transition-colors">
               View Archive <ArrowRight size={14} />
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {ARTICLES.map((article) => (
              <article key={article.id} className="group cursor-pointer flex flex-col h-full">
                 <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                       {article.category}
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Clock size={12} /> 5 min read</span>
                    <span className="flex items-center gap-1"><User size={12} /> Editorial Team</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">{article.title}</h3>
                 <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                 </p>
                 <div className="mt-auto">
                    <span className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 group-hover:border-gray-400 group-hover:text-gray-600 transition-all">Read More</span>
                 </div>
              </article>
            ))}
         </div>
      </div>

      {/* Quote / Break Section */}
      <div className="bg-white mt-32 py-32 px-6 md:px-12">
         <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-5xl font-serif italic text-gray-800 leading-tight mb-8">
               "Design is not just about what it looks like and feels like. Design is how it works."
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">— Steve Jobs</p>
         </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-8">
               <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop" className="w-full rounded-xl" alt="Interior 1"/>
               <div className="bg-stone/20 p-12 rounded-xl text-center flex flex-col justify-center items-center min-h-[300px]">
                  <h4 className="text-2xl font-bold mb-4">Join our Newsletter</h4>
                  <p className="text-gray-600 mb-6 max-w-sm">Subscribe to receive updates on new collections, design trends, and exclusive events.</p>
                  <div className="flex w-full max-w-xs border-b border-black pb-2">
                     <input type="email" placeholder="Your email address" className="bg-transparent w-full outline-none placeholder-gray-500 text-sm"/>
                     <button className="uppercase text-xs font-bold">Subscribe</button>
                  </div>
               </div>
            </div>
            <div className="space-y-4 md:space-y-8 pt-0 md:pt-16">
               <div className="bg-black text-white p-12 rounded-xl flex flex-col justify-center min-h-[300px]">
                   <h4 className="text-3xl font-bold mb-4">Visit Our Showrooms</h4>
                   <p className="text-gray-400 mb-8 leading-relaxed">Experience the quality of our materials and the comfort of our designs in person. Find the nearest flagship store.</p>
                   <button className="self-start bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                      Find a Store
                   </button>
               </div>
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" className="w-full rounded-xl" alt="Interior 2"/>
            </div>
         </div>
      </div>

    </div>
  );
};
