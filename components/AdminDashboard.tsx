
import React, { useState } from 'react';
import { LayoutDashboard, Package, Plus, Trash2, DollarSign, TrendingUp, ArrowLeft, Search, X, Upload, ShoppingBag, Users } from 'lucide-react';
import { Product, Order } from '../types';

interface AdminDashboardProps {
  orders: Order[];
  products: Product[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onDeleteProduct: (id: number) => void;
  onBack: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ orders, products, onAddProduct, onDeleteProduct, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products'>('overview');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Stats Calculations
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const totalProducts = products.length;

  // Form State
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
    size: 'normal' as 'large' | 'normal'
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({
        name: newProduct.name,
        category: newProduct.category,
        price: Number(newProduct.price),
        description: newProduct.description,
        image: newProduct.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
        size: newProduct.size
    });
    setIsAddModalOpen(false);
    setNewProduct({ name: '', category: '', price: '', description: '', image: '', size: 'normal' });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProduct({ ...newProduct, image: imageUrl });
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Internal Tool</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark">Admin Dashboard</h1>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-200">
             <button 
               onClick={() => setActiveTab('overview')}
               className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all ${activeTab === 'overview' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
             >
                <LayoutDashboard size={18} /> Overview
             </button>
             <button 
               onClick={() => setActiveTab('products')}
               className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all ${activeTab === 'products' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
             >
                <Package size={18} /> Products
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fade-in">
             {/* Metrics Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                   <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                         <DollarSign size={24} />
                      </div>
                      <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
                         <TrendingUp size={12} /> +12%
                      </span>
                   </div>
                   <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Total Revenue</p>
                   <h3 className="text-3xl font-bold text-dark">${totalRevenue.toLocaleString()}</h3>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                   <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                         <ShoppingBag size={24} />
                      </div>
                      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-1">
                         <TrendingUp size={12} /> +5%
                      </span>
                   </div>
                   <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Total Orders</p>
                   <h3 className="text-3xl font-bold text-dark">{totalOrders}</h3>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                   <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                         <Users size={24} />
                      </div>
                   </div>
                   <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Avg. Order Value</p>
                   <h3 className="text-3xl font-bold text-dark">${avgOrderValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h3>
                </div>
             </div>

             {/* Recent Orders Table */}
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100">
                   <h3 className="text-xl font-bold">Recent Orders</h3>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full">
                      <thead className="bg-gray-50">
                         <tr>
                            <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Order ID</th>
                            <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
                            <th className="px-8 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
                            <th className="px-8 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-500">Total</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                         {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                               <td className="px-8 py-4 font-medium">#{order.id}</td>
                               <td className="px-8 py-4 text-gray-500">{order.date}</td>
                               <td className="px-8 py-4">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                     order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                     order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                     'bg-blue-100 text-blue-800'
                                  }`}>
                                     {order.status}
                                  </span>
                               </td>
                               <td className="px-8 py-4 text-right font-bold">${order.total.toLocaleString()}</td>
                            </tr>
                         ))}
                         {orders.length === 0 && (
                            <tr>
                               <td colSpan={4} className="px-8 py-12 text-center text-gray-500">No orders found</td>
                            </tr>
                         )}
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'products' && (
           <div className="space-y-8 animate-fade-in">
              {/* Actions Toolbar */}
              <div className="flex flex-col md:flex-row justify-between gap-4">
                 <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white rounded-xl shadow-sm border-none outline-none focus:ring-1 focus:ring-black transition-all"
                    />
                 </div>
                 <button 
                   onClick={() => setIsAddModalOpen(true)}
                   className="bg-black text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                 >
                    <Plus size={18} /> Add Product
                 </button>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                       <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-800">
                             ${product.price.toLocaleString()}
                          </div>
                       </div>
                       <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                             <div>
                                <h3 className="font-bold text-dark">{product.name}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
                             </div>
                             <button 
                               onClick={() => onDeleteProduct(product.id)}
                               className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded"
                             >
                                <Trash2 size={18} />
                             </button>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10">
                             {product.description}
                          </p>
                          <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
                             <span>ID: {product.id}</span>
                             <span className="capitalize">{product.size} Size</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
         <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div 
               className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
               onClick={() => setIsAddModalOpen(false)} 
            />
            <div className="relative w-full max-w-2xl bg-[#F5F0EB] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
               <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                     <h2 className="text-2xl font-bold text-dark">Add New Product</h2>
                     <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-black/5 rounded-full">
                        <X size={20} />
                     </button>
                  </div>

                  <form onSubmit={handleAddSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Product Name</label>
                           <input
                              required
                              type="text"
                              value={newProduct.name}
                              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                              className="w-full bg-white p-4 rounded-xl outline-none focus:ring-1 focus:ring-black shadow-sm"
                              placeholder="e.g. Modern Sofa"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Category</label>
                           <input
                              required
                              type="text"
                              value={newProduct.category}
                              onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                              className="w-full bg-white p-4 rounded-xl outline-none focus:ring-1 focus:ring-black shadow-sm"
                              placeholder="e.g. Living Room"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Price ($)</label>
                           <input
                              required
                              type="number"
                              value={newProduct.price}
                              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                              className="w-full bg-white p-4 rounded-xl outline-none focus:ring-1 focus:ring-black shadow-sm"
                              placeholder="0.00"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Display Size</label>
                           <select
                              value={newProduct.size}
                              onChange={(e) => setNewProduct({...newProduct, size: e.target.value as 'large' | 'normal'})}
                              className="w-full bg-white p-4 rounded-xl outline-none focus:ring-1 focus:ring-black shadow-sm appearance-none"
                           >
                              <option value="normal">Normal</option>
                              <option value="large">Large</option>
                           </select>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">IMAGE URL</label>
                        
                        <div className="flex flex-col gap-3">
                           {/* URL Input */}
                           <div className="relative">
                              <input
                                 type="url"
                                 value={newProduct.image}
                                 onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                                 className="w-full bg-white p-4 rounded-xl outline-none focus:ring-1 focus:ring-black shadow-sm text-sm"
                                 placeholder="https://..."
                              />
                           </div>
                           <p className="text-[10px] text-gray-400">Leave empty for a random placeholder image.</p>

                           {/* File Upload Box */}
                           <div className="relative border-2 border-dashed border-blue-200 bg-white rounded-xl p-6 text-center hover:border-blue-400 transition-colors group cursor-pointer">
                              <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                              <div className="flex flex-col items-center gap-2">
                                 <div className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                                    <Upload className="text-blue-400 group-hover:text-blue-600 transition-colors" size={20} />
                                 </div>
                                 <div>
                                    <p className="text-sm font-bold text-gray-600 group-hover:text-black transition-colors">Click to upload image</p>
                                    <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        {newProduct.image && (
                           <div className="mt-4 relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                              <img src={newProduct.image} alt="Preview" className="w-full h-full object-cover" />
                              <button 
                                 type="button"
                                 onClick={() => setNewProduct({...newProduct, image: ''})}
                                 className="absolute top-3 right-3 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                              >
                                 <X size={16} />
                              </button>
                              <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-bold uppercase">
                                 Image Preview
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Description</label>
                        <textarea
                           required
                           rows={4}
                           value={newProduct.description}
                           onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                           className="w-full bg-white p-4 rounded-xl outline-none focus:ring-1 focus:ring-black shadow-sm resize-none"
                           placeholder="Describe the product..."
                        />
                     </div>

                     <div className="pt-4">
                        <button
                           type="submit"
                           className="w-full bg-black text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-lg flex justify-center items-center gap-2"
                        >
                           <Plus size={18} /> Create Product
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};
