
import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface CollectionProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const Collection: React.FC<CollectionProps> = ({ products, onProductClick }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-bold max-w-md">Explore Our Proudly Collection</h2>
        <div className="text-right mt-6 md:mt-0">
            {products.length > visibleCount && (
              <button 
                onClick={handleViewMore}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity bg-black text-white px-4 py-2 rounded"
              >
                  View More <ArrowRight size={14} />
              </button>
            )}
            <p className="text-xs text-gray-500 mt-4 max-w-xs ml-auto">
                Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <div 
            key={product.id} 
            onClick={() => onProductClick(product)}
            className={`group relative rounded-xl overflow-hidden shadow-md cursor-pointer ${product.size === 'large' ? 'md:row-span-1' : ''} h-[400px]`}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
              <div>
                <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">{product.category}</p>
                <span className="text-white font-medium text-xl tracking-wide">{product.name}</span>
                <p className="text-white/80 text-sm mt-1">${product.price.toLocaleString()}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
