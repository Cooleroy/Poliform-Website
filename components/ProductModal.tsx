import React from 'react';
import { X, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-[#F5F0EB] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-stone/50 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-600 mb-4">
              {product.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-2">{product.name}</h2>
            <p className="text-2xl font-medium text-gray-600">${product.price.toLocaleString()}</p>
          </div>

          <div className="prose prose-stone mb-8">
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Crafted with precision and attention to detail, this piece from the Poliform collection represents the pinnacle of modern Italian design.
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs uppercase text-gray-500 mb-1">Dimensions</p>
                <p className="font-medium text-dark">W 240 x D 100 x H 74 cm</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 mb-1">Designer</p>
                <p className="font-medium text-dark">Jean-Marie Massaud</p>
              </div>
            </div>

            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-black text-white py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};