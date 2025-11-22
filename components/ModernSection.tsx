import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ModernSection: React.FC = () => {
  const metrics = [
    { label: 'Products', value: '500+' },
    { label: 'Projects', value: '20+' },
    { label: 'Satisfied Customers', value: '50+' },
    { label: 'Top 1 in Paris', value: '1st' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Image with overlays */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-2xl overflow-hidden h-[600px] w-full">
             <img 
               src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
               alt="Minimalist Sofa" 
               className="w-full h-full object-cover"
             />
             
             {/* Floating Badge 1 */}
             <div className="absolute top-8 left-8 bg-[#F5F0EB] px-4 py-2 rounded-full shadow-lg">
                <span className="text-xs font-semibold uppercase tracking-wider">Gorgeous Interior</span>
             </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Upper Card Block */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
             <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium mb-4">Aesthetic</span>
             <h3 className="text-4xl font-bold mb-4 leading-tight">Into a gallery <br/> of elegance</h3>
             <p className="text-gray-500 text-sm">Aesthetic furniture where every piece tells a story of style.</p>
          </div>

          {/* Middle Text Block */}
          <div>
            <h2 className="text-5xl font-bold mb-6">Modern <br/> Minimalist</h2>
            
            {/* Small Image Card */}
            <div className="relative rounded-xl overflow-hidden h-48 w-full mb-6 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop" 
                alt="Detail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                 <p className="text-sm font-medium">Best Furniture</p>
                 <p className="text-xs opacity-80">Indulge in the artistry of everyday living</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 text-black">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-stone pt-12">
        {metrics.map((metric, idx) => (
          <div key={idx} className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};