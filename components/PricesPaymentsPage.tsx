
import React from 'react';
import { ArrowLeft, CreditCard, ShieldCheck, FileText, Smartphone, Globe } from 'lucide-react';

interface PricesPaymentsPageProps {
  onBack: () => void;
}

export const PricesPaymentsPage: React.FC<PricesPaymentsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Customer Service</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark mb-6">Prices & Payments</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          Transparency and security are at the core of our transaction process. Find all information regarding our pricing structure and accepted payment methods below.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar / Table of Contents */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-bold text-lg mb-4">Contents</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer transition-colors">Pricing Policy</li>
                <li className="hover:text-black cursor-pointer transition-colors">Payment Methods</li>
                <li className="hover:text-black cursor-pointer transition-colors">Secure Transactions</li>
                <li className="hover:text-black cursor-pointer transition-colors">Taxes & Duties</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16">
            
            {/* Pricing Policy */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Pricing Policy</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Transparency & Currency</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  All prices displayed on the Poliform online store are quoted in the local currency of the shipping destination selected. We strive to ensure that all pricing information is accurate at the time of publication.
                </p>
                <p>
                  Prices are inclusive of VAT for countries within the European Union. For international orders outside these regions, prices may be displayed exclusive of tax, with duties calculated at checkout depending on local regulations. We reserve the right to adjust prices in response to market trends, currency fluctuations, and material costs without prior notice.
                </p>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Payment Methods</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Cards & Digital Wallets</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                We accept a wide range of payment methods to ensure a seamless checkout experience. All payments are processed securely.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-colors">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <CreditCard size={18} /> Credit & Debit Cards
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    We accept all major international credit and debit cards.
                  </p>
                  <div className="flex gap-3 opacity-60">
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">MC</div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-black transition-colors">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Smartphone size={18} /> Digital Payments & UPI
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Quick and secure payments via digital wallets and UPI interfaces.
                  </p>
                  <div className="flex gap-3 opacity-60">
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">GPay</div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">Apple</div>
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold">UPI</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Secure Transactions</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Data Protection</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  The security of your data is our highest priority. Our website uses advanced SSL (Secure Socket Layer) encryption technology to protect your personal and financial information during transmission.
                </p>
                <p>
                  We are fully PCI-DSS compliant and do not store your complete credit card details on our servers. All payment processing is handled by certified third-party payment gateways that adhere to the strictest security standards in the industry.
                </p>
              </div>
            </section>

            {/* Invoices */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Invoices & VAT</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Documentation</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p>
                  A digital invoice is generated for every order and sent to your registered email address upon dispatch. If you require a business invoice with specific VAT details, please ensure you enter your company information and VAT number in the designated fields during checkout.
                </p>
                <p className="mt-4 text-sm bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="font-bold text-black">Note:</span> Post-issuance modifications to invoices are not possible due to fiscal regulations. Please verify your details carefully before confirming your order.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
