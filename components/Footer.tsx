
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onPricesPaymentsClick?: () => void;
  onShippingClick?: () => void;
  onReturnsClick?: () => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
  onStoryClick?: () => void;
  onStoreLocatorClick?: () => void;
  onSustainabilityClick?: () => void;
  onCareersClick?: () => void;
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onPricesPaymentsClick, 
  onShippingClick, 
  onReturnsClick, 
  onTermsClick,
  onPrivacyClick,
  onStoryClick,
  onStoreLocatorClick,
  onSustainabilityClick,
  onCareersClick,
  onContactClick
}) => {
  return (
    <footer className="bg-dark text-white pt-20 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Top CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
           <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Engage with Us in Conversation.</h2>
              <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-8">
                In a global world based on communication, a brand must look beyond its borders, open up to new experiences, and dare to be different. Meeting the brightest minds of one's time is the most effective way to nurture creativity.
              </p>
           </div>
           <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop" 
                alt="Footer Interior" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
           </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
           <div>
              <h4 className="font-semibold mb-6 text-white">About</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li onClick={onStoryClick} className="hover:text-white cursor-pointer transition-colors">Our Story</li>
                 <li onClick={onStoreLocatorClick} className="hover:text-white cursor-pointer transition-colors">Store Locator</li>
                 <li onClick={onSustainabilityClick} className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
                 <li onClick={onCareersClick} className="hover:text-white cursor-pointer transition-colors">Careers</li>
                 <li onClick={onContactClick} className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
           </div>

           <div>
              <h4 className="font-semibold mb-6 text-white">Customer Service</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li 
                   onClick={onPricesPaymentsClick}
                   className="hover:text-white cursor-pointer transition-colors"
                 >
                   Prices and Payments
                 </li>
                 <li 
                   onClick={onShippingClick}
                   className="hover:text-white cursor-pointer transition-colors"
                 >
                   Shipping
                 </li>
                 <li 
                   onClick={onReturnsClick}
                   className="hover:text-white cursor-pointer transition-colors"
                 >
                   Return Policy
                 </li>
                 <li 
                   onClick={onTermsClick}
                   className="hover:text-white cursor-pointer transition-colors"
                 >
                   Terms of Service
                 </li>
                 <li 
                   onClick={onPrivacyClick}
                   className="hover:text-white cursor-pointer transition-colors"
                 >
                   Privacy Policy
                 </li>
              </ul>
           </div>

           <div>
              <h4 className="font-semibold mb-6 text-white">Social Media</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li className="hover:text-white cursor-pointer flex items-center gap-2 transition-colors"><Instagram size={16}/> Instagram</li>
                 <li className="hover:text-white cursor-pointer flex items-center gap-2 transition-colors"><Facebook size={16}/> Facebook</li>
                 <li className="hover:text-white cursor-pointer flex items-center gap-2 transition-colors"><Linkedin size={16}/> Linkedin</li>
              </ul>
           </div>
           
           <div className="flex flex-col justify-end items-end">
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Poliform</h1>
           </div>
        </div>

        <div className="border-t border-gray-900 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
           <p>&copy; 2024 Poliform Inspired. All Rights Reserved.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <span 
                onClick={onPrivacyClick}
                className="hover:text-gray-400 cursor-pointer transition-colors"
             >
                Privacy
             </span>
             <span className="hover:text-gray-400 cursor-pointer transition-colors">Cookies</span>
           </div>
        </div>

      </div>
    </footer>
  );
};
