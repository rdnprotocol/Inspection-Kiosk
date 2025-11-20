import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP_CONFIG } from '../constants';

interface KioskWrapperProps {
  children: React.ReactNode;
}

const KioskWrapper: React.FC<KioskWrapperProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Do NOT run timeout logic if on Admin pages or already on Home
    if (location.pathname !== '/' && !location.pathname.startsWith('/admin')) {
      timerRef.current = setTimeout(() => {
        console.log('Idle timeout reached. Returning home.');
        navigate('/');
      }, APP_CONFIG.idleTimeoutMs);
    }
  };

  useEffect(() => {
    // Events to track activity
    const events = ['mousedown', 'mousemove', 'touchstart', 'scroll', 'click', 'keydown'];

    const handleActivity = () => {
      resetTimer();
    };

    // Disable right click ONLY on public pages, allow on Admin
    const handleContextMenu = (e: Event) => {
      if (!location.pathname.startsWith('/admin')) {
        e.preventDefault();
      }
    };

    events.forEach(event => window.addEventListener(event, handleActivity));
    window.addEventListener('contextmenu', handleContextMenu);

    // Initial timer start
    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(event => window.removeEventListener(event, handleActivity));
      window.removeEventListener('contextmenu', handleContextMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 overflow-hidden select-none">
      {children}
    </div>
  );
};

export default KioskWrapper;