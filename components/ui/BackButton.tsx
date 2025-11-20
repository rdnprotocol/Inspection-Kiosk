import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(-1)}
      className="flex items-center text-slate-500 mb-8 active:text-gov-blue transition-colors"
    >
      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-4">
        <ArrowLeft size={24} />
      </div>
      <span className="text-xl font-medium">Буцах</span>
    </button>
  );
};

export default BackButton;