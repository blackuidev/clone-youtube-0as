import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import NotFound from './pages/NotFound';
import VideoPlayerPage from './pages/VideoPlayerPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Header toggleSidebar={toggleSidebar} />
          <div className="flex flex-1 pt-16"> { /* Add padding-top to account for fixed header */}
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/watch/:id" element={<VideoPlayerPage />} />
                <Route path="/results" element={<SearchResultsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                { /* Protected Routes Example */}
                <Route path="/dashboard" element={<ProtectedRoute><p>User Dashboard (Protected)</p></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
