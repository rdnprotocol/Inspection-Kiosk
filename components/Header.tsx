import React, { useState, useEffect } from 'react';
import { Home, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP_CONFIG } from '../constants';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [time, setTime] = useState(new Date());
  const isHome = location.pathname === '/';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('mn-MN', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('mn-MN', { month: 'long', day: 'numeric', weekday: 'long' });
  };

  return (
    <header className="h-24 bg-white shadow-md flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center space-x-6">
        {!isHome && (
          <button 
            onClick={() => navigate('/')}
            className="bg-gov-blue text-white p-4 rounded-2xl active:scale-95 transition-transform shadow-lg flex items-center gap-3"
          >
            <Home size={32} />
            <span className="text-xl font-bold">Эхлэл</span>
          </button>
        )}
        <div className="flex flex-col justify-center h-full pl-4">
          <h1 className="text-2xl font-bold text-gov-blue uppercase tracking-wide">
            {APP_CONFIG.agencyName}
          </h1>
          <span className="text-slate-500 text-lg">Иргэдэд үйлчлэх цахим киоск</span>
        </div>
      </div>

      <div className="flex items-center bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200">
        <Clock className="text-gov-blue mr-4" size={28} />
        <div className="text-right">
          <div className="text-3xl font-bold text-slate-800 leading-none">
            {formatTime(time)}
          </div>
          <div className="text-sm text-slate-500 font-medium uppercase mt-1">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;