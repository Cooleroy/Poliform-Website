
import React from 'react';
import { X, Package, Truck, CheckCircle, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Order } from '../types';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  const getStepStatus = (stepIndex: number) => {
    // 0: Order Placed
    // 1: Processing
    // 2: Shipped
    // 3: Delivered

    if (stepIndex === 0) return 'completed'; // Always completed if order exists
    
    if (order.status === 'Processing') {
        return stepIndex <= 1 ? 'completed' : 'pending';
    }
    if (order.status === 'Shipped') {
        return stepIndex <= 2 ? 'completed' : 'pending';
    }
    if (order.status === 'Delivered') {
        return 'completed';
    }
    return 'pending';
  };

  const timelineEvents = [
    { 
      title: 'Order Placed', 
      date: order.date,
      description: 'We have received your order.', 
      icon: Package 
    },
    { 
      title: 'Processing', 
      date: 'May 13, 2024', // Mock date logic
      description: 'Your order is being prepared for shipment.', 
      icon: Clock 
    },
    { 
      title: 'Shipped', 
      date: 'May 15, 2024', 
      description: 'Your order is on the way to the sorting center.', 
      icon: Truck 
    },
    { 
      title: 'Delivered', 
      date: 'May 18, 2024', 
      description: 'Package has been delivered to your address.', 
      icon: MapPin 
    },
  ];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#F5F0EB] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
           
           {/* Header */}
           <div className="flex justify-between items-start mb-8">
              <div>
                 <h2 className="text-2xl font-bold text-dark">Track Order</h2>
                 <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-500 text-sm">Order #{order.id}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className={`text-xs font-bold uppercase ${order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                        {order.status}
                    </span>
                 </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                 <X size={20} />
              </button>
           </div>

           {/* Timeline */}
           <div className="relative pl-4 border-l-2 border-gray-200 space-y-10 my-8 ml-4">
              {timelineEvents.map((event, index) => {
                 const status = getStepStatus(index);
                 const isCompleted = status === 'completed';
                 const Icon = event.icon;
                 
                 return (
                    <div key={index} className="relative pl-8 group">
                       {/* Dot */}
                       <div className={`absolute -left-[21px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 ${
                           isCompleted ? 'border-black bg-black scale-110' : 'border-gray-300 bg-[#F5F0EB]'
                       }`}></div>
                       
                       <div className={`transition-opacity duration-500 ${isCompleted ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                              <h4 className="font-bold text-dark text-lg flex items-center gap-2">
                                 {event.title}
                              </h4>
                              {isCompleted && (
                                  <span className="text-xs text-gray-500 font-medium bg-white px-2 py-1 rounded shadow-sm">
                                      {event.date}
                                  </span>
                              )}
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
                       </div>
                    </div>
                 )
              })}
           </div>
           
           {/* Tracking Info Box */}
           <div className="bg-white p-5 rounded-xl mt-8 shadow-sm border border-stone">
              <div className="flex items-start gap-4">
                 <div className="bg-black text-white p-2 rounded-lg">
                    <Truck size={20} />
                 </div>
                 <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Tracking Number</p>
                    <p className="text-dark font-mono font-medium mb-4 select-all">1Z999AA10123456784</p>
                    
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div 
                            className="bg-black h-full rounded-full transition-all duration-1000" 
                            style={{ 
                                width: order.status === 'Delivered' ? '100%' : order.status === 'Shipped' ? '66%' : '33%' 
                            }} 
                        />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>In Transit</span>
                        <span>Expected: May 24</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Help Text */}
           <div className="mt-6 text-center">
              <button className="text-xs text-gray-500 hover:text-black underline flex items-center justify-center gap-1 mx-auto">
                  <AlertCircle size={12} /> Report a problem with this order
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
