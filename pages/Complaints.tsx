import React from 'react';
import BackButton from '../components/ui/BackButton';
import { APPLICATION_STEPS } from '../constants';
import { Smartphone, AlertCircle } from 'lucide-react';

const Complaints: React.FC = () => {
  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-20">
      <BackButton />
      
      <div className="grid grid-cols-12 gap-12">
        {/* Left: Steps */}
        <div className="col-span-7">
          <h2 className="text-4xl font-bold text-gov-dark mb-8">Өргөдөл, гомдол гаргах</h2>
          
          <div className="space-y-6">
            {APPLICATION_STEPS.map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-3xl shadow-sm flex items-start border border-slate-100">
                 <div className="w-16 h-16 rounded-full bg-gov-blue text-white flex items-center justify-center text-3xl font-bold flex-shrink-0 mr-6">
                   {item.step}
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
                   <p className="text-xl text-slate-600">{item.description}</p>
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-200 p-8 rounded-3xl flex items-start">
             <AlertCircle className="text-orange-500 w-12 h-12 mr-6 flex-shrink-0" />
             <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-2">Анхаарах</h3>
                <p className="text-xl text-orange-700">
                  Нэргүй, хаяггүй, гарын үсэггүй, эсхүл тодорхой нэр хаягтай боловч 
                  холбогдох утасны дугааргүй өргөдөл, гомдлыг хүлээн авах боломжгүйг анхаарна уу.
                </p>
             </div>
          </div>
        </div>

        {/* Right: Digital Channels */}
        <div className="col-span-5 space-y-8">
          <div className="bg-gov-dark text-white p-10 rounded-[3rem] shadow-kiosk text-center">
             <div className="inline-block p-4 bg-white rounded-3xl mb-6">
                {/* Simulated QR Code */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://e-mongolia.mn" 
                  alt="QR Code" 
                  className="w-48 h-48"
                />
             </div>
             <h3 className="text-3xl font-bold mb-4">E-Mongolia</h3>
             <p className="text-xl text-blue-100 mb-8">Төрийн үйлчилгээний нэгдсэн системээр дамжуулан гомдол гаргах</p>
             <button className="bg-blue-500 w-full py-4 rounded-2xl text-xl font-bold active:scale-95 transition-transform">
               Заавар харах
             </button>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-kiosk border border-slate-200">
             <div className="flex items-center mb-6">
                <Smartphone size={48} className="text-gov-blue mr-4" />
                <h3 className="text-3xl font-bold text-slate-800">Hotula App</h3>
             </div>
             <p className="text-xl text-slate-600 mb-8">
               Гар утсаараа зураг авч, байршлын хамт илгээх боломжтой.
             </p>
             <button className="w-full border-2 border-gov-blue text-gov-blue py-4 rounded-2xl text-xl font-bold active:bg-blue-50 transition-colors">
               Апп татах QR код харах
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;