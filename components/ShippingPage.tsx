
import React from 'react';
import { ArrowLeft, Truck, Clock, Globe, Package, MapPin } from 'lucide-react';

interface ShippingPageProps {
  onBack: () => void;
}

export const ShippingPage: React.FC<ShippingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Customer Service</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark mb-6">Shipping & Delivery</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          We are committed to ensuring your pieces arrive safely and on time. Explore our delivery options and shipping policies below.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-bold text-lg mb-4">Contents</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer transition-colors">Delivery Options</li>
                <li className="hover:text-black cursor-pointer transition-colors">Processing Times</li>
                <li className="hover:text-black cursor-pointer transition-colors">Order Tracking</li>
                <li className="hover:text-black cursor-pointer transition-colors">International Shipping</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16">
            
            {/* Delivery Options */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Truck size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Delivery Options</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Methods & Costs</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Standard */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Standard Delivery</h4>
                    <span className="bg-gray-100 text-xs font-bold px-2 py-1 rounded uppercase">Free</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Our standard service delivers your items to the curbside of your address. Requires signature upon delivery.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <Clock size={14} /> 5-7 Business Days
                  </div>
                </div>

                {/* Express */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Express Delivery</h4>
                    <span className="bg-gray-100 text-xs font-bold px-2 py-1 rounded uppercase">$150.00</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Expedited shipping for urgent requirements. Priority handling in our warehouse.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <Clock size={14} /> 2-3 Business Days
                  </div>
                </div>

                {/* White Glove */}
                <div className="border border-black bg-gray-50 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">Recommended</div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Premium White Glove</h4>
                    <span className="bg-white border border-gray-200 text-xs font-bold px-2 py-1 rounded uppercase">$350.00</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    A comprehensive service including room-of-choice delivery, unpacking, assembly of furniture, and removal of all packaging materials.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <Clock size={14} /> Scheduled Appointment
                  </div>
                </div>

              </div>
            </section>

            {/* Processing Times */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Package size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Processing Times</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Warehouse Operations</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Orders are processed Monday through Friday, excluding holidays. Orders placed before 2 PM EST are typically processed the same business day.
                </p>
                <p>
                  For larger furniture items, please allow an additional 24-48 hours for our logistics team to prepare your shipment for safe transport. Customized or made-to-order items have specific lead times indicated on the product page.
                </p>
              </div>
            </section>

            {/* Tracking */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Order Tracking</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Stay Updated</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p>
                  Once your order has been dispatched, you will receive a confirmation email containing your tracking number and a link to the carrier's website.
                </p>
                <p className="mt-4">
                  Registered users can also track the status of their orders in real-time via the 
                  <span className="font-bold text-black"> My Orders</span> section of their account dashboard.
                </p>
              </div>
            </section>

            {/* International */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">International Shipping</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Global Reach</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We ship to over 50 countries worldwide. International shipping costs are calculated at checkout based on the destination and the total weight of the order.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Please Note:</strong> International orders may be subject to import duties and taxes, which are levied once a shipment reaches your country. These additional charges must be borne by you; we have no control over these charges and cannot predict what they may be.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
