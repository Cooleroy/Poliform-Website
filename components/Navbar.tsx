
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, User, LogOut, Settings, Package, LayoutDashboard, ShieldCheck } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  cartCount: number;
  isLoggedIn: boolean;
  user: UserType | null;
  onCartClick: () => void;
  onHomeClick: () => void;
  onProductsClick: () => void;
  onLifestyleClick: () => void;
  onNewsClick: () => void;
  onProjectsClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onSettingsClick: () => void;
  onOrdersClick: () => void;
  onAdminClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  isLoggedIn,
  user,
  onCartClick,
  onHomeClick,
  onProductsClick,
  onLifestyleClick,
  onNewsClick,
  onProjectsClick,
  onLoginClick,
  onLogoutClick,
  onSettingsClick,
  onOrdersClick,
  onAdminClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const userMenuRef = useRef<HTMLDivElement>(null);
  const mobileUserMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Click outside listener for user menu
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideDesktop = userMenuRef.current && !userMenuRef.current.contains(target);
      const isOutsideMobile = mobileUserMenuRef.current && !mobileUserMenuRef.current.contains(target);

      if (isOutsideDesktop && isOutsideMobile) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setIsUserMenuOpen(!isUserMenuOpen);
    } else {
      onLoginClick();
    }
  };

  const renderUserDropdown = () => (
    <div className="absolute right-0 mt-4 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fade-in origin-top-right z-[60]">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
           <p className="text-sm font-bold text-dark truncate">{user?.name || 'User'}</p>
           {user?.role === 'superadmin' && <ShieldCheck size={14} className="text-blue-600" />}
        </div>
        <p className="text-xs text-gray-500 truncate">{user?.email || 'user@example.com'}</p>
      </div>
      <div className="py-1">
        {user?.role === 'superadmin' && (
          <button 
            onClick={() => {
              onAdminClick();
              setIsUserMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 flex items-center gap-2 transition-colors font-medium"
          >
            <LayoutDashboard size={16} /> Admin Dashboard
          </button>
        )}
        <button 
          onClick={() => {
            onOrdersClick();
            setIsUserMenuOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
        >
          <Package size={16} /> My Orders
        </button>
        <button 
          onClick={() => {
            onSettingsClick();
            setIsUserMenuOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
        >
          <Settings size={16} /> Settings
        </button>
      </div>
      <div className="py-1 border-t border-gray-100">
        <button 
          onClick={() => {
            onLogoutClick();
            setIsUserMenuOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-12 py-6 ${
        isScrolled ? 'bg-[#F5F0EB]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="z-50">
          <button 
            onClick={onHomeClick}
            className="text-2xl font-bold tracking-tight text-dark hover:opacity-80 transition-opacity"
          >
            Poliform
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <button 
            onClick={onProductsClick}
            className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors uppercase tracking-wide"
          >
            Product
          </button>
          <button 
            onClick={onLifestyleClick}
            className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors uppercase tracking-wide"
          >
            Lifestyle
          </button>
          <button 
            onClick={onNewsClick}
            className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors uppercase tracking-wide"
          >
            News
          </button>
          <button 
            onClick={onProjectsClick}
            className="text-sm font-medium text-gray-800 hover:text-gray-500 transition-colors uppercase tracking-wide"
          >
            Projects
          </button>
          
          <div className="flex items-center space-x-4 border-l border-gray-300 pl-8 ml-2 h-6">
            {/* User Icon Desktop */}
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={handleUserIconClick}
                className="relative p-2 text-gray-800 hover:text-gray-500 transition-colors"
              >
                <User size={20} />
                {isLoggedIn && (
                  <span className={`absolute top-1 right-1 h-2 w-2 rounded-full border-2 border-[#F5F0EB] ${user?.role === 'superadmin' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
                )}
              </button>

              {/* User Dropdown Desktop */}
              {isLoggedIn && isUserMenuOpen && renderUserDropdown()}
            </div>

            {/* Cart Icon */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-800 hover:text-gray-500 transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button & Icons */}
        <div className="md:hidden z-50 flex items-center gap-4">
          
          {/* User Icon Mobile */}
          <div className="relative" ref={mobileUserMenuRef}>
            <button 
              onClick={handleUserIconClick}
              className="relative p-2 text-dark hover:text-gray-500 transition-colors"
            >
               <User size={24} />
               {isLoggedIn && (
                  <span className={`absolute top-2 right-1 h-2 w-2 rounded-full border-2 border-[#F5F0EB] ${user?.role === 'superadmin' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
               )}
            </button>
            {/* User Dropdown Mobile */}
            {isLoggedIn && isUserMenuOpen && renderUserDropdown()}
          </div>
          
          <button 
            onClick={onCartClick}
            className="relative p-2 text-dark hover:text-gray-500 transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-dark focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#F5F0EB] flex flex-col justify-center items-center z-40 animate-fade-in">
            <div className="flex flex-col space-y-8 text-center">
              {isLoggedIn && (
                <div className="mb-4 text-center">
                  <p className="text-lg font-bold flex items-center justify-center gap-2">
                    {user?.name} 
                    {user?.role === 'superadmin' && <ShieldCheck size={16} className="text-blue-600" />}
                  </p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              )}
              <button onClick={() => handleNavClick(onProductsClick)} className="text-2xl font-medium text-dark">Product</button>
              <button onClick={() => handleNavClick(onLifestyleClick)} className="text-2xl font-medium text-dark">Lifestyle</button>
              <button onClick={() => handleNavClick(onNewsClick)} className="text-2xl font-medium text-dark">News</button>
              <button onClick={() => handleNavClick(onProjectsClick)} className="text-2xl font-medium text-dark">Projects</button>
              
              {isLoggedIn && (
                 <>
                   {user?.role === 'superadmin' && (
                      <button onClick={() => handleNavClick(onAdminClick)} className="text-xl font-medium text-blue-600 mt-4">Admin Dashboard</button>
                   )}
                   <button onClick={() => handleNavClick(onOrdersClick)} className="text-xl font-medium text-gray-600 mt-2">My Orders</button>
                   <button onClick={() => handleNavClick(onSettingsClick)} className="text-xl font-medium text-gray-600 mt-2">Settings</button>
                   <button onClick={() => handleNavClick(onLogoutClick)} className="text-2xl font-medium text-red-500 mt-4">Sign Out</button>
                 </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
