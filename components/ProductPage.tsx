import React from 'react';
import { ArrowRight, Star, Shield, Truck, ArrowLeft } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onBack: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ 
  product, 
  relatedProducts, 
  onAddToCart, 
  onProductClick,
  onBack
}) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in">
      {/* Breadcrumb & Back */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8 flex items-center text-sm text-gray-500">
        <button onClick={onBack} className="flex items-center hover:text-black transition-colors mr-4">
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-black font-medium">{product.name}</span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Product Image */}
          <div className="lg:col-span-7">
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square relative shadow-sm group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8 border-b border-gray-200 pb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-dark">{product.name}</h1>
              <div className="flex items-center justify-between mb-6">
                <p className="text-3xl font-medium text-gray-800">${product.price.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <span className="text-gray-400 ml-2">(12 Reviews)</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {product.description}
                <br/><br/>
                Defined by rigorous lines and essential aesthetics, this piece represents the perfect synthesis of functionality and style.
              </p>

              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-black text-white py-5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform active:scale-[0.98] shadow-lg"
              >
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Truck className="text-gray-400 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Free Premium Shipping</h4>
                  <p className="text-sm text-gray-500">White glove delivery service included on all orders.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="text-gray-400 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">5-Year Warranty</h4>
                  <p className="text-sm text-gray-500">Comprehensive coverage against manufacturing defects.</p>
                </div>
              </div>
            </div>

            {/* Dimensions Accordion (Static for now) */}
            <div className="mt-12 pt-8 border-t border-gray-200">
               <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Dimensions & Details</h3>
               <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600">
                  <p><span className="font-semibold text-black">Width:</span> 240 cm</p>
                  <p><span className="font-semibold text-black">Depth:</span> 100 cm</p>
                  <p><span className="font-semibold text-black">Height:</span> 74 cm</p>
                  <p><span className="font-semibold text-black">Material:</span> Premium Fabric</p>
               </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 mb-20">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">You May Also Like</h2>
            <button onClick={onBack} className="text-sm font-semibold hover:underline flex items-center gap-2">
              View Collection <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <div 
                key={item.id}
                onClick={() => onProductClick(item)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                <p className="font-medium">${item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};