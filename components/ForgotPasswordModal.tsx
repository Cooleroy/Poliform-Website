
import React, { useState } from 'react';
import { X, ArrowRight, Mail, CheckCircle, ArrowLeft } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose, onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-md bg-[#F5F0EB] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:bg-black/5 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          
          {!isSent ? (
            <>
              <div className="text-center mb-8">
                <button 
                  onClick={onBackToLogin}
                  className="absolute top-4 left-4 text-gray-500 hover:text-black flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <h2 className="text-3xl font-bold mb-2 text-dark mt-4">Reset Password</h2>
                <p className="text-gray-500 text-sm">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Link...
                    </span>
                  ) : (
                    <>
                      Send Reset Link <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-dark">Check Your Email</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We've sent a password reset link to <br/><span className="font-bold text-black">{email}</span>.
              </p>
              <button 
                onClick={onBackToLogin}
                className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Back to Login
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
