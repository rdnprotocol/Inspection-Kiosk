import React from 'react';
import BackButton from '../components/ui/BackButton';
import { LEADERSHIP, APP_CONFIG } from '../constants';
import { ShieldCheck, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-20">
      <BackButton />
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gov-dark mb-10">Бидний тухай</h2>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-gov-blue mr-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Эрхэм зорилго</h3>
            </div>
            <p className="text-2xl text-slate-600 leading-relaxed">
              Хүний эрүүл, аюулгүй орчинд амьдрах, ажиллах нөхцөлийг бүрдүүлэх,
              чанартай бүтээгдэхүүн үйлчилгээгээр хангуулах эрхийг хамгаалахад оршино.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
             <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-gov-blue mr-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Алсын хараа</h3>
            </div>
            <p className="text-2xl text-slate-600 leading-relaxed">
              Хяналт шалгалтын үйл ажиллагааг олон улсын жишигт нийцүүлэн,
              эрсдэлд суурилсан хяналтын тогтолцоог төлөвшүүлнэ.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <h3 className="text-3xl font-bold text-gov-dark mb-8 flex items-center">
          <Users className="mr-4" /> Удирдлагын баг
        </h3>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          {LEADERSHIP.map((person, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
               <div className="h-64 bg-slate-200 w-full flex items-center justify-center">
                  {/* Placeholder for image, normally <img src={person.image} /> */}
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
               </div>
               <div className="p-8">
                 <h4 className="text-2xl font-bold text-slate-900 mb-2">{person.name}</h4>
                 <p className="text-xl text-gov-blue font-medium">{person.role}</p>
               </div>
            </div>
          ))}
          
          {/* Additional Info Card */}
           <div className="bg-gov-light rounded-3xl p-8 flex flex-col justify-center border border-blue-100">
             <h4 className="text-2xl font-bold text-gov-blue mb-4">Бүтэц зохион байгуулалт</h4>
             <p className="text-xl text-slate-600 mb-6">
               Тус газар нь 6 хэлтэс, 9 дүүргийн хяналтын хэлтэстэйгээр үйл ажиллагаа явуулж байна.
             </p>
             <button className="bg-white text-gov-blue px-6 py-3 rounded-xl font-bold shadow-sm self-start active:scale-95 transition-transform">
               Дэлгэрэнгүй үзэх
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;