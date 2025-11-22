
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, ArrowRight, Smartphone, QrCode, ChevronDown, Package, Clock } from 'lucide-react';
import { Product, User } from '../types';

interface CheckoutPageProps {
  cart: Product[];
  user: User | null;
  onBack: () => void;
  onPlaceOrder: (orderDetails: any) => void;
}

const COUNTRY_STATES: Record<string, string[]> = {
  "India": [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
    "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
    "Lakshadweep", "Puducherry"
  ],
  "United States": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ],
  "Canada": [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", 
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"
  ],
  "United Kingdom": [
    "England", "Scotland", "Wales", "Northern Ireland"
  ],
  "Australia": [
    "New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", 
    "Western Australia", "Australian Capital Territory", "Northern Territory"
  ],
  "Germany": [
    "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"
  ],
  "France": [
    "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire",
    "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy",
    "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"
  ],
  "Italy": [
    "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna",
    "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche", "Molise",
    "Piedmont", "Sardinia", "Sicily", "Tuscany", "Trentino-Alto Adige",
    "Umbria", "Valle d'Aosta", "Veneto"
  ],
  "Spain": [
    "Andalusia", "Aragon", "Asturias", "Balearic Islands", "Basque Country",
    "Canary Islands", "Cantabria", "Castile and León", "Castilla-La Mancha",
    "Catalonia", "Extremadura", "Galicia", "La Rioja", "Madrid", "Murcia",
    "Navarre", "Valencia"
  ],
  "Japan": [
    "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima",
    "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa",
    "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto",
    "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata",
    "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga",
    "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori",
    "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"
  ],
  "China": [
    "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi",
    "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan",
    "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Ningxia",
    "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan",
    "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang"
  ],
  "Singapore": [
    "Central Region", "East Region", "North Region", "North-East Region", "West Region"
  ],
  "United Arab Emirates": [
    "Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"
  ]
};

const COUNTRIES = [
  "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", 
  "France", "Italy", "Spain", "Japan", "China", "Singapore", "United Arab Emirates"
];

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

const SHIPPING_OPTIONS: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Standard Delivery',
    price: 0,
    duration: '5-7 business days',
    description: 'Curbside delivery. Signature required.'
  },
  {
    id: 'express',
    name: 'Express Delivery',
    price: 150,
    duration: '2-3 business days',
    description: 'Priority shipping for urgent needs.'
  },
  {
    id: 'white-glove',
    name: 'Premium White Glove',
    price: 350,
    duration: 'Scheduled',
    description: 'Room of choice delivery, unpacking, assembly, and debris removal.'
  }
];

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, user, onBack, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'India',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    upiId: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'qrcode'>('card');
  const [selectedShippingId, setSelectedShippingId] = useState<string>(SHIPPING_OPTIONS[0].id);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (user) {
      const names = user.name ? user.name.split(' ') : [''];
      setFormData(prev => ({
        ...prev,
        firstName: names[0] || '',
        lastName: names.slice(1).join(' ') || '',
        email: user.email || ''
      }));
    }
  }, [user]);

  const selectedShipping = SHIPPING_OPTIONS.find(s => s.id === selectedShippingId) || SHIPPING_OPTIONS[0];
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = selectedShipping.price;
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'country') {
      // Reset state when country changes
      setFormData(prev => ({ ...prev, country: value, state: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      onPlaceOrder({ 
        ...formData, 
        paymentMethod, 
        shippingMethod: selectedShipping,
        total: total 
      });
      setIsProcessing(false);
    }, 2000);
  };

  const availableStates = COUNTRY_STATES[formData.country] || [];

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <button onClick={onBack} className="text-black underline hover:text-gray-600">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in bg-[#F5F0EB]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors mb-4">
            <ArrowLeft size={16} /> Back to Shop
          </button>
          <h1 className="text-4xl md:text-6xl font-bold text-dark">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Forms */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Contact & Shipping */}
              <section>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">1</span>
                  Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                    <input 
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text" 
                      className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                    <input 
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text" 
                      className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email" 
                      className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Address</label>
                    <input 
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      type="text" 
                      className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none" 
                    />
                  </div>
                  
                  {/* City & State Row */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">City</label>
                    <input 
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      type="text" 
                      className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">State / Province</label>
                    {availableStates.length > 0 ? (
                      <div className="relative">
                        <select
                          required
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full bg-white border-none p-4 pr-10 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none appearance-none text-gray-700"
                        >
                          <option value="" disabled>Select State</option>
                          {availableStates.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                      </div>
                    ) : (
                      <input 
                        required
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        type="text" 
                        className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none"
                        placeholder="Enter State"
                      />
                    )}
                  </div>

                  {/* ZIP & Country Row */}
                  <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">ZIP Code</label>
                      <input 
                        required
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        type="text" 
                        className="w-full bg-white border-none p-4 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none" 
                      />
                  </div>
                  <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Country</label>
                      <div className="relative">
                        <select
                          required
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-white border-none p-4 pr-10 rounded-xl shadow-sm focus:ring-1 focus:ring-black outline-none appearance-none text-gray-700"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                      </div>
                  </div>

                </div>
              </section>

              {/* Shipping Method */}
              <section>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">2</span>
                  Shipping Method
                </h2>
                
                <div className="space-y-4">
                  {SHIPPING_OPTIONS.map((option) => (
                    <label 
                      key={option.id} 
                      className={`flex items-center justify-between p-6 bg-white rounded-xl border-2 cursor-pointer transition-all ${
                        selectedShippingId === option.id 
                          ? 'border-black shadow-md' 
                          : 'border-transparent hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                         <input 
                           type="radio" 
                           name="shippingMethod" 
                           value={option.id} 
                           checked={selectedShippingId === option.id}
                           onChange={() => setSelectedShippingId(option.id)}
                           className="mt-1 w-5 h-5 text-black focus:ring-black"
                         />
                         <div>
                           <h4 className="font-bold text-dark">{option.name}</h4>
                           <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                           <div className="flex items-center gap-2 mt-2 text-xs font-medium text-gray-600">
                              <Clock size={12} /> {option.duration}
                           </div>
                         </div>
                      </div>
                      <div className="text-right">
                         <span className="font-bold text-lg">
                           {option.price === 0 ? 'Free' : `$${option.price}`}
                         </span>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">3</span>
                  Payment Details
                </h2>

                {/* Payment Method Selector */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-black bg-black text-white shadow-md' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}
                  >
                    <CreditCard size={24} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                     className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === 'upi' ? 'border-black bg-black text-white shadow-md' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}
                  >
                    <Smartphone size={24} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">UPI</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('qrcode')}
                     className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === 'qrcode' ? 'border-black bg-black text-white shadow-md' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}
                  >
                    <QrCode size={24} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">QR Code</span>
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                  
                  {paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Cardholder Name</label>
                        <input 
                          required={paymentMethod === 'card'}
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          type="text" 
                          placeholder="As shown on card"
                          className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-1 focus:ring-black outline-none transition-colors" 
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Card Number</label>
                        <input 
                          required={paymentMethod === 'card'}
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          type="text" 
                          placeholder="0000 0000 0000 0000"
                          className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-1 focus:ring-black outline-none transition-colors" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Expiry Date</label>
                        <input 
                          required={paymentMethod === 'card'}
                          name="expDate"
                          value={formData.expDate}
                          onChange={handleInputChange}
                          type="text" 
                          placeholder="MM/YY"
                          className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-1 focus:ring-black outline-none transition-colors" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">CVV</label>
                        <input 
                          required={paymentMethod === 'card'}
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          type="text" 
                          placeholder="123"
                          className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-1 focus:ring-black outline-none transition-colors" 
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">UPI ID / VPA</label>
                          <div className="relative">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              required={paymentMethod === 'upi'}
                              name="upiId"
                              value={formData.upiId}
                              onChange={handleInputChange}
                              type="text"
                              placeholder="username@bank"
                              className="w-full bg-gray-50 border-none pl-12 pr-4 py-4 rounded-xl focus:ring-1 focus:ring-black outline-none transition-colors"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-2">Enter your Virtual Payment Address (VPA) to receive a payment request on your UPI app.</p>
                      </div>
                      <div className="flex gap-2 overflow-x-auto py-2">
                         <div className="h-8 px-3 flex items-center bg-gray-100 rounded border border-gray-200 text-xs font-bold text-gray-600">Google Pay</div>
                         <div className="h-8 px-3 flex items-center bg-gray-100 rounded border border-gray-200 text-xs font-bold text-gray-600">PhonePe</div>
                         <div className="h-8 px-3 flex items-center bg-gray-100 rounded border border-gray-200 text-xs font-bold text-gray-600">Paytm</div>
                         <div className="h-8 px-3 flex items-center bg-gray-100 rounded border border-gray-200 text-xs font-bold text-gray-600">BHIM</div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'qrcode' && (
                    <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
                        <div className="w-56 h-56 bg-white rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 p-2">
                            <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PoliformPayment-${total}`} 
                              alt="Payment QR Code" 
                              className="w-full h-full object-contain mix-blend-multiply opacity-90" 
                            />
                        </div>
                        <p className="font-bold text-dark text-lg mb-2">Scan to Pay ${total.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 text-center max-w-xs leading-relaxed">
                          Open your preferred UPI or Banking app and scan this code to complete the payment instantly.
                        </p>
                    </div>
                  )}

                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <ShieldCheck size={18} className="text-green-600" />
                  <span>Your payment details are processed securely.</span>
                </div>
              </section>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-black text-white py-5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform active:scale-[0.99] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
              >
                {isProcessing ? (
                  <>Processing Order...</>
                ) : (
                  <>Confirm Order <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-bold mb-8 border-b border-gray-100 pb-4">Order Summary</h3>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-dark">{item.name}</h4>
                        <span className="font-medium text-sm">${item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{item.category}</p>
                      <p className="text-xs text-gray-400 mt-1">Qty: 1</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping ({selectedShipping.name})</span>
                  <span>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-dark">Total</span>
                  <span className="text-xl font-bold text-dark">${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                <Package size={20} className="mt-1 text-black" />
                <div>
                  <p className="text-sm font-bold text-dark">{selectedShipping.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{selectedShipping.duration}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
