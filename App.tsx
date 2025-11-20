import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import KioskWrapper from './components/KioskWrapper';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Inspection from './pages/Inspection';
import Complaints from './pages/Complaints';
import News from './pages/News';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import NewsEditor from './pages/admin/NewsEditor';

const App: React.FC = () => {
  return (
    <HashRouter>
      <KioskWrapper>
        <div className="min-h-screen bg-slate-50 font-sans">
          <Header />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/inspection" element={<Inspection />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/news/new" element={<NewsEditor />} />
              <Route path="/admin/news/edit/:id" element={<NewsEditor />} />
            </Routes>
          </main>
        </div>
      </KioskWrapper>
    </HashRouter>
  );
};

export default App;