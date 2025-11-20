import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scheduleService } from '../../lib/scheduleService';
import { ScheduleItem } from '../../types';
import { ArrowLeft, Trash2, Plus, Save } from 'lucide-react';

const ScheduleManager: React.FC = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState<ScheduleItem>({
    id: '',
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    target: '',
    district: '',
    type: 'Төлөвлөгөөт',
    team: ''
  });

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }
    loadSchedule();
  }, [navigate]);

  const loadSchedule = () => {
    setSchedule(scheduleService.getAll());
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Устгахдаа итгэлтэй байна уу?')) {
      scheduleService.delete(id);
      loadSchedule();
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const itemToSave = { ...newItem, id: Date.now().toString() };
    scheduleService.save(itemToSave);
    loadSchedule();
    setNewItem({
      id: '',
      date: new Date().toISOString().split('T')[0],
      time: '09:00',
      target: '',
      district: '',
      type: 'Төлөвлөгөөт',
      team: ''
    });
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto bg-slate-50 pb-20">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-gov-blue transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-3xl font-bold text-gov-dark">Хуваарь засах</h2>
        </div>
        
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-gov-blue text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:bg-gov-dark active:scale-95 transition-transform"
        >
          <Plus size={24} className="mr-2" />
          Хуваарь нэмэх
        </button>
      </div>

      {/* Add Form Modal/Inline */}
      {isEditing && (
        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-blue-100 mb-10 animate-in fade-in slide-in-from-top-4">
           <h3 className="text-xl font-bold mb-6 text-slate-800">Шинэ хуваарь нэмэх</h3>
           <form onSubmit={handleAdd} className="grid grid-cols-3 gap-6">
              <div>
                 <label className="block font-bold text-slate-600 mb-2">Огноо</label>
                 <input required type="date" name="date" value={newItem.date} onChange={handleChange} className="w-full p-3 border rounded-xl" />
              </div>
              <div>
                 <label className="block font-bold text-slate-600 mb-2">Цаг</label>
                 <input required type="time" name="time" value={newItem.time} onChange={handleChange} className="w-full p-3 border rounded-xl" />
              </div>
              <div>
                 <label className="block font-bold text-slate-600 mb-2">Дүүрэг</label>
                 <select name="district" value={newItem.district} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white">
                    <option value="">Сонгох...</option>
                    <option value="Баянзүрх">Баянзүрх</option>
                    <option value="Сүхбаатар">Сүхбаатар</option>
                    <option value="Чингэлтэй">Чингэлтэй</option>
                    <option value="Баянгол">Баянгол</option>
                    <option value="Хан-Уул">Хан-Уул</option>
                    <option value="Сонгинохайрхан">Сонгинохайрхан</option>
                 </select>
              </div>
              <div className="col-span-2">
                 <label className="block font-bold text-slate-600 mb-2">Шалгуулагч объект</label>
                 <input required name="target" value={newItem.target} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Байгууллагын нэр..." />
              </div>
              <div>
                 <label className="block font-bold text-slate-600 mb-2">Төрөл</label>
                 <select name="type" value={newItem.type} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white">
                    <option value="Төлөвлөгөөт">Төлөвлөгөөт</option>
                    <option value="Гүйцэтгэл">Гүйцэтгэл</option>
                    <option value="Урьдчилан сэргийлэх">Урьдчилан сэргийлэх</option>
                    <option value="Иргэний гомдлоор">Иргэний гомдлоор</option>
                 </select>
              </div>
              <div className="col-span-3">
                 <label className="block font-bold text-slate-600 mb-2">Бүрэлдэхүүн</label>
                 <input required name="team" value={newItem.team} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Байцаагч нарын нэрс..." />
              </div>
              
              <div className="col-span-3 flex justify-end gap-4 mt-4">
                 <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 bg-slate-100 rounded-xl font-bold text-slate-600">Болих</button>
                 <button type="submit" className="px-6 py-3 bg-gov-blue text-white rounded-xl font-bold flex items-center">
                   <Save className="mr-2" size={20} /> Хадгалах
                 </button>
              </div>
           </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-6 font-bold">Огноо</th>
              <th className="p-6 font-bold">Объект</th>
              <th className="p-6 font-bold">Дүүрэг</th>
              <th className="p-6 font-bold">Төрөл</th>
              <th className="p-6 font-bold text-right">Үйлдэл</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {schedule.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50">
                <td className="p-6">
                   <div className="font-bold">{item.date}</div>
                   <div className="text-sm text-slate-500">{item.time}</div>
                </td>
                <td className="p-6 font-medium">{item.target}</td>
                <td className="p-6">{item.district}</td>
                <td className="p-6">
                   <span className="px-3 py-1 bg-blue-100 text-gov-blue rounded-full text-sm font-bold">{item.type}</span>
                </td>
                <td className="p-6 text-right">
                   <button onClick={() => handleDelete(item.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100">
                      <Trash2 size={20} />
                   </button>
                </td>
              </tr>
            ))}
            {schedule.length === 0 && (
               <tr><td colSpan={5} className="p-10 text-center text-slate-500">Хуваарь байхгүй байна.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleManager;