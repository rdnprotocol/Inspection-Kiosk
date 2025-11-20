import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { APP_CONFIG } from '../constants';
import { Phone } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 h-[calc(100vh-6rem)] flex flex-col">
      <div className="text-center mb-10 mt-4">
        <h2 className="text-5xl font-bold text-gov-dark mb-4">Сайн байна уу?</h2>
        <p className="text-2xl text-slate-500">Танд ямар мэдээлэл хэрэгтэй байна вэ?</p>
      </div>

      <div className="grid grid-cols-3 gap-8 flex-grow pb-10">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="relative group bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-kiosk hover:shadow-xl active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gov-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <item.icon size={64} className="text-gov-blue" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 leading-tight px-4">
              {item.title}
            </h3>
          </button>
        ))}
        
        {/* Call to action card */}
        <div className="bg-gov-blue rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-kiosk text-white relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full" />
           <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white opacity-5 rounded-full" />
           
           <Phone size={64} className="mb-6 text-blue-200" />
           <h3 className="text-2xl font-medium text-blue-100 mb-2">Шуурхай утас</h3>
           <p className="text-5xl font-bold tracking-wider">{APP_CONFIG.hotline}</p>
           <p className="mt-4 text-blue-200 text-lg">24/7 санал гомдол хүлээн авах</p>
        </div>
      </div>
    </div>
  );
};

export default Home;