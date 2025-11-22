
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Lock, Mail, User } from 'lucide-react';
import { User as UserType } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
  onForgotPassword: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin, onForgotPassword }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const isAdmin = email.toLowerCase() === 'admin@poliform.com';
      
      // If signing up, use the provided name. If logging in, mock it from email or previous data.
      // If admin, force name to Super Admin
      const userName = isAdmin ? 'Super Admin' : (isSignUp ? name : email.split('@')[0]); 
      
      onLogin({
        name: userName,
        email: email,
        role: isAdmin ? 'superadmin' : 'user'
      });
      
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-md bg-[#F5F0EB] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:bg-black/5 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-dark">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isSignUp ? 'Enter your details to start your journey.' : 'Enter your details to access your account.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {isSignUp && (
              <div className="space-y-2 animate-fade-in">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-transparent focus:border-black pl-12 pr-4 py-4 rounded-xl outline-none transition-all shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
               <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input
                   type="email"
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-white border border-transparent focus:border-black pl-12 pr-4 py-4 rounded-xl outline-none transition-all shadow-sm"
                   placeholder="name@example.com"
                 />
               </div>
            </div>
            
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Password</label>
               <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input
                   type="password"
                   required
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full bg-white border border-transparent focus:border-black pl-12 pr-4 py-4 rounded-xl outline-none transition-all shadow-sm"
                   placeholder="••••••••"
                 />
               </div>
            </div>

            {!isSignUp && (
              <div className="flex justify-between items-center text-xs">
                 <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-gray-600 font-medium">Remember me</span>
                 </label>
                 <button 
                   type="button" 
                   onClick={onForgotPassword}
                   className="text-black font-bold hover:underline"
                 >
                   Forgot Password?
                 </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {isSignUp ? 'Creating...' : 'Signing In...'}
                </span>
              ) : (
                <>
                  {isSignUp ? 'Create Account' : 'Sign In'} <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
             {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
             <button 
                onClick={toggleMode}
                className="text-black font-bold hover:underline ml-1"
             >
               {isSignUp ? 'Sign In' : 'Create Account'}
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};
