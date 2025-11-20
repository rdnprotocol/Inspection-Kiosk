import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded authentication for demo purposes
    if (password === 'admin123') {
      sessionStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Нууц үг буруу байна');
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-10 bg-slate-50">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-kiosk border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-gov-blue">
            <Lock size={40} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gov-dark mb-8">Админ нэвтрэх</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-slate-700 mb-2">Нууц үг</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-300 text-xl focus:border-gov-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              placeholder="Нууц үгээ оруулна уу"
              autoFocus
            />
          </div>
          
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center font-medium">
              {error}
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full bg-gov-blue text-white py-4 rounded-xl text-xl font-bold hover:bg-gov-dark active:scale-[0.98] transition-all"
          >
            Нэвтрэх
          </button>

          <button 
            type="button"
            onClick={() => navigate('/')}
            className="w-full text-slate-500 py-2 text-lg hover:text-slate-800 transition-colors"
          >
            Киоск горим руу буцах
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;