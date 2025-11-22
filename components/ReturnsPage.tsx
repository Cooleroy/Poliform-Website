
import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle, AlertTriangle, Clock, Box } from 'lucide-react';

interface ReturnsPageProps {
  onBack: () => void;
}

export const ReturnsPage: React.FC<ReturnsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Customer Service</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark mb-6">Returns & Refunds</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          We want you to love your purchase. If something isn't quite right, you have 30 days to return your items. Review our simple process below.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-bold text-lg mb-4">Contents</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer transition-colors">Policy Overview</li>
                <li className="hover:text-black cursor-pointer transition-colors">How to Return</li>
                <li className="hover:text-black cursor-pointer transition-colors">Refund Timeline</li>
                <li className="hover:text-black cursor-pointer transition-colors">Exceptions</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16">
            
            {/* Policy Overview */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <RefreshCw size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Policy Overview</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">30-Day Guarantee</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We accept returns for most items within 30 days of delivery. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
                </p>
                <p>
                  You will also need the receipt or proof of purchase. Items sent back to us without first requesting a return will not be accepted.
                </p>
              </div>
            </section>

            {/* How to Return */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Box size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">How to Return</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Step-by-Step Process</p>
                </div>
              </div>

              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-dark flex-shrink-0">1</div>
                    <div>
                       <h4 className="font-bold text-lg mb-2">Initiate Return</h4>
                       <p className="text-sm text-gray-600">
                          Log in to your account, go to 'My Orders', select the item you wish to return, and click 'Request Return'. Alternatively, contact our support team.
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-dark flex-shrink-0">2</div>
                    <div>
                       <h4 className="font-bold text-lg mb-2">Pack Item</h4>
                       <p className="text-sm text-gray-600">
                          Securely pack the item in its original packaging. Include the return form inside the box.
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-dark flex-shrink-0">3</div>
                    <div>
                       <h4 className="font-bold text-lg mb-2">Ship It</h4>
                       <p className="text-sm text-gray-600">
                          Attach the prepaid shipping label provided via email and drop the package off at the designated carrier location.
                       </p>
                    </div>
                 </div>
              </div>
            </section>

            {/* Refund Timeline */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Refund Timeline</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Processing</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p>
                  We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days.
                </p>
                <p className="mt-4 text-sm bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
                  Please remember it can take some time for your bank or credit card company to process and post the refund too.
                </p>
              </div>
            </section>

            {/* Exceptions */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Exceptions</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Non-Returnable Items</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Certain types of items cannot be returned, such as:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                   <li>Custom products (such as special orders or personalized items)</li>
                   <li>Items marked as "Final Sale"</li>
                   <li>Gift cards</li>
                   <li>Hazardous materials, flammable liquids, or gases</li>
                </ul>
                <p>
                  Please get in touch if you have questions or concerns about your specific item.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
