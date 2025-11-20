import React from 'react';
import BackButton from '../components/ui/BackButton';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { APP_CONFIG } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-20">
      <BackButton />
      <h2 className="text-4xl font-bold text-gov-dark mb-10">Холбоо барих / Байршил</h2>

      <div className="grid grid-cols-12 gap-10 h-[calc(100%-8rem)]">
        {/* Left Info Panel */}
        <div className="col-span-5 space-y-8">
          {/* Contact Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-kiosk border border-slate-200 space-y-8">
             <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-gov-blue mr-6 flex-shrink-0">
                   <MapPin size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-400 uppercase mb-1">Хаяг</h3>
                   <p className="text-2xl font-medium text-slate-800">
                     Улаанбаатар хот, Чингэлтэй дүүрэг, 1-р хороо, Хангарди ордон
                   </p>
                </div>
             </div>

             <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-gov-blue mr-6 flex-shrink-0">
                   <Phone size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-400 uppercase mb-1">Утас</h3>
                   <p className="text-3xl font-bold text-slate-800">{APP_CONFIG.hotline}</p>
                </div>
             </div>

             <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-gov-blue mr-6 flex-shrink-0">
                   <Mail size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-400 uppercase mb-1">И-мэйл</h3>
                   <p className="text-2xl font-medium text-slate-800">info@inspection.gov.mn</p>
                </div>
             </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-gov-blue mr-6 flex-shrink-0">
                   <Globe size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-400 uppercase mb-1">Веб сайт</h3>
                   <p className="text-2xl font-medium text-slate-800">www.inspection.gov.mn</p>
                </div>
             </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gov-dark text-white p-10 rounded-[2.5rem] shadow-kiosk flex items-center">
             <Clock size={48} className="mr-8 text-blue-300" />
             <div>
               <h3 className="text-xl font-bold text-blue-200 uppercase mb-2">Цагийн хуваарь</h3>
               <p className="text-2xl font-medium">Даваа - Баасан: 08:30 - 17:30</p>
               <p className="text-lg text-blue-300 mt-1">Бямба, Ням: Амарна</p>
             </div>
          </div>
        </div>

        {/* Right Map Panel */}
        <div className="col-span-7 bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-kiosk border-4 border-white relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.633217733044!2d106.9156683156383!3d47.91877997920646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969244322c4c75%3A0x687b5cc923434c01!2sKhangardi%20Ordon!5e0!3m2!1sen!2smn!4v1620710328562!5m2!1sen!2smn" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy"
             title="Agency Location"
             className="absolute inset-0 w-full h-full"
           ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;