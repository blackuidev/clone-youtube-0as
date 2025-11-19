import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import CartPage from './pages/CartPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { Toaster } from '@/components/ui/toaster'; // Assuming a Toaster for notifications

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-var(--header-height,60px)-var(--footer-height,60px))]"> {/* Adjust min-height dynamically */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Example of a protected route */}
          <Route path="/profile" element={<ProtectedRoute><p className="p-8 text-center text-2xl font-bold">Welcome to your protected profile page!</p></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster /> {/* For displaying toasts/notifications */}
    </Router>
  );
}

export default App;
