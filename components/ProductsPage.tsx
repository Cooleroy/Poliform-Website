
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, ChevronDown, ShoppingBag, ArrowUpRight, Search } from 'lucide-react';
import { Product } from '../types';

interface ProductsPageProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

type SortOption = 'newest' | 'price-asc' | 'price-desc';

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  products, 
  onProductClick, 
  onAddToCart,
  onBack 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [products]);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [products, selectedCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-12">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Catalog</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-dark">Shop Collection</h1>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
             <input 
               type="text" 
               placeholder="Search furniture..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-12 pr-4 py-3 bg-white rounded-full shadow-sm border-none outline-none focus:ring-1 focus:ring-black transition-all text-sm"
             />
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="sticky top-24 z-30 bg-[#F5F0EB]/95 backdrop-blur-sm py-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
            
            {/* Categories (Desktop) */}
            <div className="hidden md:flex items-center gap-8 overflow-x-auto w-full no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                    selectedCategory === cat ? 'text-black border-b-2 border-black pb-1' : 'text-gray-400 hover:text-gray-600 pb-1'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden w-full flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="font-bold text-sm">Filter & Sort</span>
              <Filter size={16} />
            </button>

            {/* Sort Dropdown */}
            <div className="relative hidden md:block min-w-[200px]">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full appearance-none bg-white px-4 py-2 rounded-lg text-sm font-bold cursor-pointer shadow-sm focus:outline-none pr-8"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" size={16} />
              </div>
            </div>
          </div>

          {/* Mobile Filters Expanded */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 bg-white p-6 rounded-xl shadow-lg animate-fade-in space-y-6">
              <div>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-500">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={`px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wide ${
                        selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-500">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as SortOption);
                    setIsFilterOpen(false);
                  }}
                  className="w-full bg-gray-50 px-4 py-3 rounded-lg text-sm"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
             <h3 className="text-2xl font-bold text-gray-400">No products found</h3>
             <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
             <button 
               onClick={() => {
                 setSearchQuery('');
                 setSelectedCategory('All');
               }}
               className="mt-6 text-black underline hover:text-gray-600"
             >
               Clear all filters
             </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100"
                onClick={() => onProductClick(product)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 hover:bg-black hover:text-white">
                     <ArrowUpRight size={20} />
                  </div>
                  {/* Quick Add (Desktop) */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 hover:bg-gray-800 shadow-lg"
                  >
                    <ShoppingBag size={14} /> Add
                  </button>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                      <h3 className="font-bold text-lg text-dark group-hover:text-gray-600 transition-colors">{product.name}</h3>
                    </div>
                    <span className="font-bold text-dark">${product.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-20 text-center text-xs text-gray-400 uppercase tracking-widest">
           Showing {filteredProducts.length} of {products.length} Products
        </div>
      </div>
    </div>
  );
};
