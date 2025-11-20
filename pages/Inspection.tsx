import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import BackButton from '../components/ui/BackButton';
import { STATS_DATA, MONTHLY_INSPECTIONS } from '../constants';

const COLORS = ['#003A8C', '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#91D5FF'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200">
        <p className="text-lg font-bold text-slate-800">{label}</p>
        <p className="text-lg text-gov-blue">{`${payload[0].value} шалгалт`}</p>
      </div>
    );
  }
  return null;
};

const Inspection: React.FC = () => {
  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-20">
      <BackButton />
      
      <div className="flex justify-between items-end mb-10">
         <div>
            <h2 className="text-4xl font-bold text-gov-dark mb-2">Хяналт шалгалтын мэдээлэл</h2>
            <p className="text-xl text-slate-500">2024 оны жилийн эцсийн статистик мэдээ</p>
         </div>
         <div className="bg-green-100 text-green-800 px-6 py-2 rounded-full text-lg font-bold">
            Нийт шалгалт: 1,254
         </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mb-10">
        {/* Sector Chart */}
        <div className="bg-white p-8 rounded-[2rem] shadow-kiosk h-[500px] flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Салбарын ангилалаар</h3>
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={STATS_DATA}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={160}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {STATS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-white p-8 rounded-[2rem] shadow-kiosk h-[500px] flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Сүүлийн 6 сарын гүйцэтгэл</h3>
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={MONTHLY_INSPECTIONS}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 16}} />
                <YAxis tick={{fontSize: 16}} />
                <Tooltip cursor={{fill: '#f0f9ff'}} content={<CustomTooltip />} />
                <Legend wrapperStyle={{fontSize: '18px', paddingTop: '20px'}} />
                <Bar name="Гүйцэтгэл" dataKey="completed" fill="#003A8C" radius={[10, 10, 0, 0]} />
                <Bar name="Төлөвлөгөө" dataKey="planned" fill="#E6F7FF" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border-l-8 border-green-500 shadow-sm">
           <h4 className="text-xl text-slate-500 mb-2">Зөрчилгүй</h4>
           <p className="text-5xl font-bold text-slate-800">856</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border-l-8 border-orange-400 shadow-sm">
           <h4 className="text-xl text-slate-500 mb-2">Хугацаатай албан шаардлага</h4>
           <p className="text-5xl font-bold text-slate-800">320</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border-l-8 border-red-500 shadow-sm">
           <h4 className="text-xl text-slate-500 mb-2">Үйл ажиллагаа зогсоосон</h4>
           <p className="text-5xl font-bold text-slate-800">78</p>
        </div>
      </div>
    </div>
  );
};

export default Inspection;