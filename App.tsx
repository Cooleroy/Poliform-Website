
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModernSection } from './components/ModernSection';
import { TimelessSection } from './components/TimelessSection';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductPage } from './components/ProductPage';
import { ProductsPage } from './components/ProductsPage';
import { LifestylePage } from './components/LifestylePage';
import { NewsPage } from './components/NewsPage';
import { ProjectsPage } from './components/ProjectsPage';
import { OrdersPage } from './components/OrdersPage';
import { CheckoutPage } from './components/CheckoutPage';
import { PricesPaymentsPage } from './components/PricesPaymentsPage';
import { ShippingPage } from './components/ShippingPage';
import { ReturnsPage } from './components/ReturnsPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { StoryPage } from './components/StoryPage';
import { StoreLocatorPage } from './components/StoreLocatorPage';
import { SustainabilityPage } from './components/SustainabilityPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import { LoginModal } from './components/LoginModal';
import { ForgotPasswordModal } from './components/ForgotPasswordModal';
import { SettingsModal } from './components/SettingsModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Product, User, Order } from './types';

const INITIAL_PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: 'Mondrian', 
    category: 'Sofa System',
    price: 5200,
    description: 'A sofa system with a light, minimal aesthetic. Mondrian allows for maximum compositional freedom, with a suspended base structure that creates an airy feel.',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1600&auto=format&fit=crop',
    size: 'large'
  },
  { 
    id: 2, 
    name: 'Artex', 
    category: 'Kitchen',
    price: 12500,
    description: 'Artex creates a connection between the kitchen and the living area. With spacious surfaces and rigorous lines, it represents a contemporary take on the traditional kitchen.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop',
    size: 'normal'
  },
  { 
    id: 3, 
    name: 'Nirnia', 
    category: 'Armchair',
    price: 3400,
    description: 'Nirnia is an armchair that blends classic inspiration with modern comfort. The wraparound backrest provides a sense of intimacy and protection.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1600&auto=format&fit=crop',
    size: 'large' 
  },
  { 
    id: 4, 
    name: 'Brera', 
    category: 'Lounge Sofa',
    price: 4800,
    description: 'Brera is a sofa that evokes the artistic charm of the Milanese district. It features a strong architectural profile softened by generous cushions.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop',
    size: 'large' 
  },
  { 
    id: 5, 
    name: 'Alea Pro', 
    category: 'Kitchen System',
    price: 14200,
    description: 'Alea Pro restyles one of Poliform’s most iconic models. It features more defined edges and new finishes to highlight its architectural capacity.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop',
    size: 'normal' 
  },
  { 
    id: 6, 
    name: 'Nirnia Lounge', 
    category: 'Occasional Chair',
    price: 2800,
    description: 'A lower, more relaxed version of the Nirnia chair, perfect for reading corners or lounge areas where comfort is paramount.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1600&auto=format&fit=crop',
    size: 'normal' 
  },
];

const INITIAL_MOCK_ORDERS: Order[] = [
  {
    id: "240512-89",
    date: "May 12, 2024",
    status: "Delivered",
    total: 5200,
    items: [
      { product: INITIAL_PRODUCTS[0], quantity: 1 }
    ]
  },
  {
    id: "240601-42",
    date: "June 01, 2024",
    status: "Processing",
    total: 6200,
    items: [
      { product: INITIAL_PRODUCTS[3], quantity: 1 },
      { product: INITIAL_PRODUCTS[5], quantity: 1 }
    ]
  }
];

type ViewState = 'home' | 'product' | 'shop' | 'lifestyle' | 'news' | 'projects' | 'orders' | 'checkout' | 'prices-payments' | 'shipping' | 'returns' | 'terms' | 'privacy' | 'story' | 'store-locator' | 'sustainability' | 'careers' | 'contact' | 'admin';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<Product[]>(() => {
      const saved = localStorage.getItem('poliform-cart');
      return saved ? JSON.parse(saved) : [];
  });
  
  const [orders, setOrders] = useState<Order[]>(() => {
      const saved = localStorage.getItem('poliform-orders');
      return saved ? JSON.parse(saved) : INITIAL_MOCK_ORDERS;
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [pendingCheckout, setPendingCheckout] = useState(false);

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('poliform-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('poliform-orders', JSON.stringify(orders));
  }, [orders]);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
     setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddProduct = (newProductData: Omit<Product, 'id'>) => {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    const newProduct: Product = { ...newProductData, id: newId };
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const navigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShop = () => {
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLifestyle = () => {
    setCurrentView('lifestyle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToNews = () => {
    setCurrentView('news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProjects = () => {
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const navigateToOrders = () => {
    setCurrentView('orders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPricesPayments = () => {
    setCurrentView('prices-payments');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShipping = () => {
    setCurrentView('shipping');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToReturns = () => {
    setCurrentView('returns');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    setCurrentView('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacy = () => {
    setCurrentView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToStory = () => {
    setCurrentView('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToStoreLocator = () => {
    setCurrentView('store-locator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSustainability = () => {
    setCurrentView('sustainability');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCareers = () => {
    setCurrentView('careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCheckout = () => {
    if (!isLoggedIn) {
      setPendingCheckout(true);
      setIsLoginModalOpen(true);
    } else {
      setCurrentView('checkout');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToAdmin = () => {
    setCurrentView('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Checkout Logic
  const handlePlaceOrder = (orderDetails: any) => {
    // Create new order
    const newOrder: Order = {
      id: `${new Date().getFullYear().toString().slice(-2)}${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Processing',
      items: cart.map(p => ({ product: p, quantity: 1 })),
      total: orderDetails.total // Use the total calculated in checkout (includes shipping)
    };

    // Add to orders list
    setOrders([newOrder, ...orders]);

    // Clear cart
    setCart([]);

    // Navigate to orders page
    navigateToOrders();
  };

  // Auth Handlers
  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    if (pendingCheckout) {
      setPendingCheckout(false);
      setCurrentView('checkout');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    if (currentView === 'orders' || currentView === 'checkout' || currentView === 'admin') {
      navigateHome();
    }
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <div className="min-h-screen bg-[#F5F0EB] font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      <Navbar 
        cartCount={cart.length} 
        isLoggedIn={isLoggedIn}
        user={user}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={navigateHome}
        onProductsClick={navigateToShop}
        onLifestyleClick={navigateToLifestyle}
        onNewsClick={navigateToNews}
        onProjectsClick={navigateToProjects}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogoutClick={handleLogout}
        onSettingsClick={() => setIsSettingsModalOpen(true)}
        onOrdersClick={navigateToOrders}
        onAdminClick={navigateToAdmin}
      />
      
      <main>
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <ModernSection />
            <TimelessSection />
            <div id="collection-section">
              <Collection 
                products={products} 
                onProductClick={handleProductClick} 
              />
            </div>
          </div>
        )}

        {currentView === 'shop' && (
          <ProductsPage 
            products={products}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onBack={navigateHome}
          />
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductPage 
            product={selectedProduct}
            relatedProducts={products.filter(p => p.id !== selectedProduct.id).slice(0, 3)}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
            onBack={navigateHome}
          />
        )}

        {currentView === 'lifestyle' && (
          <LifestylePage onBack={navigateHome} />
        )}

        {currentView === 'news' && (
          <NewsPage onBack={navigateHome} />
        )}

        {currentView === 'projects' && (
          <ProjectsPage onBack={navigateHome} />
        )}

        {currentView === 'orders' && (
          <OrdersPage 
             orders={orders} 
             onAddToCart={handleAddToCart}
             onBack={navigateHome}
          />
        )}

        {currentView === 'admin' && (
          <AdminDashboard 
            orders={orders} 
            products={products}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
            onBack={navigateHome}
          />
        )}

        {currentView === 'prices-payments' && (
          <PricesPaymentsPage onBack={navigateHome} />
        )}

        {currentView === 'shipping' && (
          <ShippingPage onBack={navigateHome} />
        )}

        {currentView === 'returns' && (
          <ReturnsPage onBack={navigateHome} />
        )}

        {currentView === 'terms' && (
          <TermsPage onBack={navigateHome} />
        )}

        {currentView === 'privacy' && (
          <PrivacyPage onBack={navigateHome} />
        )}

        {currentView === 'story' && (
          <StoryPage onBack={navigateHome} />
        )}

        {currentView === 'store-locator' && (
          <StoreLocatorPage onBack={navigateHome} />
        )}

        {currentView === 'sustainability' && (
          <SustainabilityPage onBack={navigateHome} />
        )}

        {currentView === 'careers' && (
          <CareersPage onBack={navigateHome} />
        )}

        {currentView === 'contact' && (
          <ContactPage onBack={navigateHome} />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage 
            cart={cart} 
            user={user}
            onBack={navigateHome}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
      </main>
      
      <Footer 
        onPricesPaymentsClick={navigateToPricesPayments} 
        onShippingClick={navigateToShipping}
        onReturnsClick={navigateToReturns}
        onTermsClick={navigateToTerms}
        onPrivacyClick={navigateToPrivacy}
        onStoryClick={navigateToStory}
        onStoreLocatorClick={navigateToStoreLocator}
        onSustainabilityClick={navigateToSustainability}
        onCareersClick={navigateToCareers}
        onContactClick={navigateToContact}
      />
      
      <CartDrawer 
        cart={cart} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onRemove={handleRemoveFromCart}
        onCheckout={navigateToCheckout}
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          setPendingCheckout(false);
        }}
        onLogin={handleLogin}
        onForgotPassword={() => {
          setIsLoginModalOpen(false);
          setIsForgotPasswordModalOpen(true);
        }}
      />

      <ForgotPasswordModal
        isOpen={isForgotPasswordModalOpen}
        onClose={() => setIsForgotPasswordModalOpen(false)}
        onBackToLogin={() => {
          setIsForgotPasswordModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        user={user}
        onUpdateUser={handleUpdateUser}
      />
    </div>
  );
};

export default App;
