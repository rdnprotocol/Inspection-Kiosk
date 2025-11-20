import React, { useEffect, useState } from 'react';
import BackButton from '../components/ui/BackButton';
import { scheduleService } from '../lib/scheduleService';
import { ScheduleItem } from '../types';
import { CalendarDays } from 'lucide-react';

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    setSchedule(scheduleService.getAll());
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('mn-MN', { month: 'long', day: 'numeric', weekday: 'long' });
  };

  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-20">
      <BackButton />
      
      <div className="flex items-center mb-10">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-gov-blue mr-6">
          <CalendarDays size={32} />
        </div>
        <div>
           <h2 className="text-4xl font-bold text-gov-dark">Комиссын хуваарь</h2>
           <p className="text-xl text-slate-500">Энэ долоо хоногийн хяналт шалгалтын хуваарь</p>
        </div>
      </div>

      {schedule.length === 0 ? (
        <div className="text-center text-slate-500 text-2xl mt-20 bg-white p-10 rounded-3xl border border-slate-200">
          Одоогоор хуваарь гараагүй байна.
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] shadow-kiosk overflow-hidden border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gov-blue text-white">
              <tr>
                <th className="p-6 text-xl font-bold w-1/6 border-r border-blue-800">Огноо / Цаг</th>
                <th className="p-6 text-xl font-bold w-1/4 border-r border-blue-800">Шалгуулагч объект</th>
                <th className="p-6 text-xl font-bold w-1/6 border-r border-blue-800">Дүүрэг</th>
                <th className="p-6 text-xl font-bold w-1/6 border-r border-blue-800">Төрөл</th>
                <th className="p-6 text-xl font-bold">Бүрэлдэхүүн</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {schedule.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50 transition-colors odd:bg-slate-50">
                  <td className="p-6 border-r border-slate-200">
                    <div className="font-bold text-lg">{formatDate(item.date)}</div>
                    <div className="text-gov-blue font-bold text-2xl">{item.time}</div>
                  </td>
                  <td className="p-6 text-xl font-medium border-r border-slate-200">
                    {item.target}
                  </td>
                  <td className="p-6 text-lg border-r border-slate-200">
                    {item.district}
                  </td>
                  <td className="p-6 border-r border-slate-200">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-gov-blue font-bold">
                      {item.type}
                    </span>
                  </td>
                  <td className="p-6 text-lg text-slate-600">
                    {item.team}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl text-yellow-800 text-lg">
         <strong>Санамж:</strong> Хуваарьт өөрчлөлт орсон тохиолдолд тухай бүр шинэчлэгдэх болно.
      </div>
    </div>
  );
};

export default Schedule;