
import React from 'react';
import { ArrowLeft, Lock, Eye, Database, Cookie, Shield } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Legal</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark mb-6">Privacy Policy</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          Your privacy is critically important to us. This policy details how we collect, use, and protect your personal information.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-bold text-lg mb-4">Contents</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer transition-colors">Privacy Commitment</li>
                <li className="hover:text-black cursor-pointer transition-colors">Information We Collect</li>
                <li className="hover:text-black cursor-pointer transition-colors">How We Use Data</li>
                <li className="hover:text-black cursor-pointer transition-colors">Cookie Policy</li>
                <li className="hover:text-black cursor-pointer transition-colors">Your Rights</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16">
            
            {/* Privacy Commitment */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Lock size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Privacy Commitment</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Our Promise</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  At Poliform Inspired, we are committed to protecting your personal data and respecting your privacy. We implement high-standard security measures to ensure your information is safe and handled in compliance with applicable data protection laws (GDPR, CCPA).
                </p>
                <p>
                  We will never sell your personal data to third parties. Any data sharing is strictly limited to trusted partners necessary for providing our services (e.g., payment processors, shipping carriers).
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Database size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Data Points</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We collect information that you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                   <li><strong>Personal Identification:</strong> Name, email address, phone number.</li>
                   <li><strong>Shipping & Billing:</strong> Physical address, payment information (processed securely via third parties).</li>
                   <li><strong>Account Credentials:</strong> Encrypted passwords.</li>
                   <li><strong>Communications:</strong> Records of your interactions with our customer support.</li>
                </ul>
              </div>
            </section>

            {/* How We Use Data */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Eye size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">How We Use Data</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Purpose</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                   <li>Process and fulfill your orders, including sending emails to confirm your order status and shipment.</li>
                   <li>Communicate with you about products, services, offers, promotions, and events.</li>
                   <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                   <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
                </ul>
              </div>
            </section>

            {/* Cookie Policy */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Cookie size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Cookie Policy</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Tracking Technologies</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service (e.g., the shopping cart).
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Control</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  You have the right to access, update, or delete the personal information we hold about you. You can manage your account settings directly within the "Settings" section of your profile.
                </p>
                <p>
                  If you wish to exercise any of these rights or have questions about our privacy practices, please contact our Data Protection Officer at privacy@poliform-inspired.com.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
