
import React from 'react';
import { ArrowLeft, FileText, Shield, Users, Scale, AlertCircle } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Legal</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark mb-6">Terms of Service</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          Please read these terms carefully before using our services. By accessing or using our website, you agree to be bound by these terms.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-bold text-lg mb-4">Contents</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="hover:text-black cursor-pointer transition-colors">Acceptance of Terms</li>
                <li className="hover:text-black cursor-pointer transition-colors">Use of Services</li>
                <li className="hover:text-black cursor-pointer transition-colors">User Accounts</li>
                <li className="hover:text-black cursor-pointer transition-colors">Intellectual Property</li>
                <li className="hover:text-black cursor-pointer transition-colors">Limitation of Liability</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16">
            
            {/* Acceptance */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Acceptance of Terms</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Agreement</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  By accessing or using the Poliform Inspired website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                <p>
                  We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.
                </p>
              </div>
            </section>

            {/* Use of Services */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Use of Services</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Permitted Actions</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
                </p>
              </div>
            </section>

            {/* User Accounts */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">User Accounts</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Security & Responsibility</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security.
                </p>
                <p>
                  We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Scale size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Copyright & Trademarks</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                </p>
                <p>
                  The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited. You do not acquire ownership rights to any content, document or other materials viewed through the Site.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-lg">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">Disclaimers</p>
                </div>
              </div>
              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  In no event shall Poliform Inspired, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
