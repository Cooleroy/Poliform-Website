
import React, { useState, useEffect } from 'react';
import { X, User, Lock, Bell, Save, Check } from 'lucide-react';
import { User as UserType } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserType | null;
  onUpdateUser: (user: UserType) => void;
}

type Tab = 'profile' | 'security' | 'notifications';

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, user, onUpdateUser }) => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    orders: true,
    promotions: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user, isOpen]);

  if (!isOpen || !user) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      onUpdateUser({ ...user, name, email });
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#F5F0EB] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-[600px] animate-fade-in-up">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:bg-black/5 rounded-full transition-colors md:hidden"
        >
          <X size={20} />
        </button>

        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white/50 border-b md:border-b-0 md:border-r border-gray-200 p-6 flex flex-col flex-shrink-0">
          <h2 className="text-xl font-bold mb-4 md:mb-8 pl-2">Settings</h2>
          <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex-shrink-0 w-auto md:w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'profile' ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:bg-white/80'
              }`}
            >
              <User size={18} /> Profile
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`flex-shrink-0 w-auto md:w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'security' ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:bg-white/80'
              }`}
            >
              <Lock size={18} /> Security
            </button>
            <button 
              onClick={() => setActiveTab('notifications')}
              className={`flex-shrink-0 w-auto md:w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'notifications' ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:bg-white/80'
              }`}
            >
              <Bell size={18} /> Notifications
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-[#F5F0EB]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold capitalize">{activeTab} Settings</h3>
            <button onClick={onClose} className="hidden md:block p-2 text-gray-500 hover:bg-black/5 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSave} className="max-w-lg space-y-8 animate-fade-in">
            
            {activeTab === 'profile' && (
              <>
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-20 h-20 rounded-full bg-stone text-dark flex items-center justify-center text-3xl font-bold shadow-inner">
                      {name.charAt(0).toUpperCase()}
                   </div>
                   <div>
                      <button type="button" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                        Change Photo
                      </button>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                   <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="w-full bg-white border border-transparent focus:border-black px-4 py-3 rounded-xl outline-none transition-all shadow-sm"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                   <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full bg-white border border-transparent focus:border-black px-4 py-3 rounded-xl outline-none transition-all shadow-sm"
                   />
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Current Password</label>
                   <input
                     type="password"
                     value={currentPassword}
                     onChange={(e) => setCurrentPassword(e.target.value)}
                     className="w-full bg-white border border-transparent focus:border-black px-4 py-3 rounded-xl outline-none transition-all shadow-sm"
                     placeholder="••••••••"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-500">New Password</label>
                   <input
                     type="password"
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     className="w-full bg-white border border-transparent focus:border-black px-4 py-3 rounded-xl outline-none transition-all shadow-sm"
                     placeholder="Leave blank to keep current"
                   />
                </div>
                <div className="bg-white/50 p-4 rounded-xl border border-white">
                   <h4 className="font-bold text-sm mb-2">Two-Factor Authentication</h4>
                   <p className="text-xs text-gray-500 mb-4">Add an extra layer of security to your account.</p>
                   <button type="button" className="text-xs font-bold uppercase border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors">
                     Enable 2FA
                   </button>
                </div>
              </>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                 <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div>
                       <p className="font-bold text-sm text-dark">Email Notifications</p>
                       <p className="text-xs text-gray-500">Receive updates about your account activity.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => toggleNotification('email')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${notifications.email ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                       <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${notifications.email ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                 </div>
                 
                 <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div>
                       <p className="font-bold text-sm text-dark">Order Updates</p>
                       <p className="text-xs text-gray-500">Get notified when your order status changes.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => toggleNotification('orders')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${notifications.orders ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                       <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${notifications.orders ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                 </div>

                 <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div>
                       <p className="font-bold text-sm text-dark">Promotions & News</p>
                       <p className="text-xs text-gray-500">Receive exclusive offers and design trends.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => toggleNotification('promotions')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${notifications.promotions ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                       <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${notifications.promotions ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                 </div>
              </div>
            )}
            
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSaving}
                className="w-full bg-black text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg"
              >
                {isSaving ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </span>
                ) : showSuccess ? (
                   <span className="flex items-center gap-2 text-green-400">
                     <Check size={18} /> Saved
                   </span>
                ) : (
                  <>
                    <Save size={18} /> Save Changes
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
