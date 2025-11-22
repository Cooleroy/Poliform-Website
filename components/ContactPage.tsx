
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Send } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-dark mb-6">Contact Us</h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
               <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Whether you have a question about our products, need assistance with a project, or just want to say hello, our team is ready to answer all your questions.
               </p>

               <div className="space-y-8">
                  <div className="flex items-start gap-6">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-black">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                        <p className="text-gray-500 leading-relaxed">
                           Via Montesanto 28<br/>
                           22044 Inverigo (CO)<br/>
                           Italy
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-black">
                        <Phone size={20} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                        <p className="text-gray-500">
                           +39 031 6951
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm CET</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-black">
                        <Mail size={20} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <p className="text-gray-500">
                           info@poliform.it
                        </p>
                     </div>
                  </div>
               </div>

               {/* Map Image */}
               <div className="mt-12 rounded-2xl overflow-hidden h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1600&auto=format&fit=crop" 
                    alt="Map" 
                    className="w-full h-full object-cover opacity-80 grayscale"
                  />
               </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
               <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
               
               {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                     <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <Send size={32} />
                     </div>
                     <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                     <p className="text-gray-500">Thank you for contacting us. We will get back to you shortly.</p>
                     <button 
                       onClick={() => setIsSubmitted(false)}
                       className="mt-8 text-sm font-bold underline hover:text-gray-600"
                     >
                        Send another message
                     </button>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Name</label>
                           <input type="text" required className="w-full bg-gray-50 border border-transparent focus:border-black p-4 rounded-xl outline-none transition-colors" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                           <input type="email" required className="w-full bg-gray-50 border border-transparent focus:border-black p-4 rounded-xl outline-none transition-colors" placeholder="name@example.com" />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Subject</label>
                        <select className="w-full bg-gray-50 border border-transparent focus:border-black p-4 rounded-xl outline-none transition-colors appearance-none">
                           <option>General Inquiry</option>
                           <option>Product Information</option>
                           <option>Project Assistance</option>
                           <option>Press</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                        <textarea required rows={6} className="w-full bg-gray-50 border border-transparent focus:border-black p-4 rounded-xl outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                     </div>

                     <button type="submit" className="w-full bg-black text-white py-5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform active:scale-[0.99] flex justify-center items-center gap-2">
                        Send Message <Send size={18} />
                     </button>
                  </form>
               )}
            </div>

         </div>
      </div>
    </div>
  );
};
