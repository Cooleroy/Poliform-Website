
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Search, Phone, Clock, Navigation } from 'lucide-react';

interface StoreLocatorPageProps {
  onBack: () => void;
}

const STORES = [
  {
    id: 1,
    city: "Milan",
    name: "Poliform Milano",
    address: "Piazza Cavour 2, 20121 Milano, Italy",
    phone: "+39 02 1234 5678",
    hours: "Mon-Sat: 10:00 - 19:00",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    city: "New York",
    name: "Poliform New York",
    address: "112 Madison Avenue, New York, NY 10016, USA",
    phone: "+1 212 123 4567",
    hours: "Mon-Sat: 10:00 - 18:00",
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    city: "London",
    name: "Poliform London",
    address: "278 King's Road, London SW3 5AW, UK",
    phone: "+44 20 7123 4567",
    hours: "Mon-Sat: 10:00 - 18:00",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    city: "Paris",
    name: "Poliform Paris",
    address: "33 Rue du Bac, 75007 Paris, France",
    phone: "+33 1 45 67 89 10",
    hours: "Mon-Sat: 10:30 - 19:00",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    city: "Tokyo",
    name: "Poliform Tokyo",
    address: "5-2-6 Minami-Aoyama, Minato-ku, Tokyo 107-0062, Japan",
    phone: "+81 3 1234 5678",
    hours: "Mon-Sun: 11:00 - 20:00",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
  }
];

export const StoreLocatorPage: React.FC<StoreLocatorPageProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState(STORES[0]);

  const filteredStores = STORES.filter(store => 
    store.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGetDirections = (e: React.MouseEvent, address: string) => {
    e.stopPropagation();
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex flex-col">
        
        {/* Header & Search */}
        <div className="mb-12">
           <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-8">
             <ArrowLeft size={16} /> Back to Home
           </button>
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                 <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark mb-2">Store Locator</h1>
                 <p className="text-gray-500">Find a Poliform flagship store or authorized dealer near you.</p>
              </div>
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                 <input 
                   type="text" 
                   placeholder="Search by city..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-sm border-none outline-none focus:ring-1 focus:ring-black transition-all"
                 />
              </div>
           </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[600px] h-auto relative overflow-hidden">
           
           {/* List */}
           <div className="lg:col-span-4 lg:overflow-y-auto pr-2 space-y-4 lg:max-h-full pb-8 lg:pb-0">
              {filteredStores.length === 0 ? (
                 <div className="text-center py-12 text-gray-500">
                    No stores found matching your search.
                 </div>
              ) : (
                 filteredStores.map((store) => (
                   <div 
                      key={store.id} 
                      onClick={() => setSelectedStore(store)}
                      className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border-2 group ${
                        selectedStore.id === store.id ? 'border-black' : 'border-transparent hover:border-gray-200'
                      }`}
                   >
                      <div className="flex gap-4 mb-4">
                         <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-dark">{store.city}</h3>
                            <p className="text-sm text-gray-600">{store.name}</p>
                         </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-500">
                         <div className="flex items-start gap-2">
                            <MapPin size={16} className="mt-1 flex-shrink-0" />
                            <span>{store.address}</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>{store.phone}</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{store.hours}</span>
                         </div>
                      </div>
                      <button 
                        onClick={(e) => handleGetDirections(e, store.address)}
                        className="w-full mt-4 bg-gray-100 text-dark py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                         Get Directions <Navigation size={14} />
                      </button>
                   </div>
                 ))
              )}
           </div>

           {/* Google Map Embed */}
           <div className="lg:col-span-8 bg-gray-200 rounded-2xl overflow-hidden relative hidden lg:block h-[400px] lg:h-full shadow-inner">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedStore.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Store Location"
                className="w-full h-full"
              ></iframe>
              
              {/* Loading / Placeholder visual (optional overlay if needed, but iframe covers it) */}
              <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-2xl"></div>
           </div>

        </div>

      </div>
    </div>
  );
};
