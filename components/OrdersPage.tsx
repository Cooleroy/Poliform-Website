
import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Order, Product } from '../types';
import { TrackOrderModal } from './TrackOrderModal';

interface OrdersPageProps {
  orders: Order[];
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export const OrdersPage: React.FC<OrdersPageProps> = ({ orders, onAddToCart, onBack }) => {
  const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle size={16} />;
      case 'Shipped': return <Truck size={16} />;
      case 'Processing': return <Clock size={16} />;
      default: return <Package size={16} />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Back Button */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-16">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Your Account</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-dark mb-6">My Orders</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          Track your current orders and review your purchase history.
        </p>
      </div>

      {/* Orders List */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6 text-gray-400">
              <ShoppingBag size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">No orders yet</h3>
            <p className="text-gray-500 mb-8">Start exploring our collection to create your dream space.</p>
            <button 
              onClick={onBack}
              className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                
                {/* Order Header */}
                <div className="bg-gray-50/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Order Placed</p>
                      <p className="font-medium text-dark">{order.date}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Order ID</p>
                      <p className="font-medium text-dark">#{order.id}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Total Amount</p>
                      <p className="font-medium text-dark">${order.total.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6 md:p-8">
                  <div className="space-y-6">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-6 items-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-dark mb-1">{item.product.name}</h4>
                          <p className="text-sm text-gray-500 mb-1">{item.product.category}</p>
                          <p className="text-sm font-medium text-dark">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right flex flex-col items-end gap-2">
                          <p className="font-bold text-lg">${item.product.price.toLocaleString()}</p>
                          <button 
                             onClick={() => onAddToCart(item.product)}
                             className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                          >
                             Buy Again
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                    <button 
                      onClick={() => setTrackingOrder(order)}
                      className="text-sm font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors flex items-center gap-2"
                    >
                       Track Order <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      <TrackOrderModal 
        isOpen={!!trackingOrder}
        onClose={() => setTrackingOrder(null)}
        order={trackingOrder}
      />
    </div>
  );
};
