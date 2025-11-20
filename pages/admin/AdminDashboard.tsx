import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newsService } from '../../lib/newsService';
import { NewsItem } from '../../types';
import { Plus, Edit, Trash2, LogOut, ArrowLeft, CalendarDays, Newspaper } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }
    loadNews();
  }, [navigate]);

  const loadNews = () => {
    setNewsList(newsService.getAll());
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Та энэ мэдээг устгахдаа итгэлтэй байна уу?')) {
      newsService.delete(id);
      loadNews();
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto bg-slate-50">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="p-3 bg-white rounded-full shadow-sm hover:bg-slate-100">
                <ArrowLeft className="text-slate-600" />
            </button>
            <h2 className="text-3xl font-bold text-gov-dark">Админ самбар</h2>
        </div>
        <button 
          onClick={handleLogout}
          className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold flex items-center hover:bg-slate-50"
        >
          <LogOut className="mr-2" size={20} />
          Гарах
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
         <button 
           onClick={() => navigate('/admin/schedule')}
           className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 flex items-center hover:shadow-md transition-all text-left"
         >
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mr-6">
               <CalendarDays size={32} />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-800">Хуваарь засах</h3>
               <p className="text-slate-500">Комиссын долоо хоногийн хуваарь шинэчлэх</p>
            </div>
         </button>

         <button 
           className="bg-gov-blue text-white p-8 rounded-[2rem] shadow-md flex items-center cursor-default"
         >
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mr-6">
               <Newspaper size={32} />
            </div>
            <div>
               <h3 className="text-2xl font-bold">Мэдээ засах</h3>
               <p className="text-blue-200">Доорх жагсаалтаас сонгоно уу</p>
            </div>
         </button>
      </div>

      <div className="flex justify-between items-center mb-6">
         <h3 className="text-2xl font-bold text-gov-dark">Мэдээний жагсаалт</h3>
         <button 
            onClick={() => navigate('/admin/news/new')}
            className="px-6 py-3 bg-gov-blue text-white rounded-xl font-bold flex items-center shadow-lg hover:bg-gov-dark active:scale-95 transition-all"
          >
            <Plus className="mr-2" size={24} />
            Мэдээ нэмэх
          </button>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-6 text-slate-500 font-bold text-lg">Зураг</th>
              <th className="p-6 text-slate-500 font-bold text-lg">Гарчиг</th>
              <th className="p-6 text-slate-500 font-bold text-lg">Огноо</th>
              <th className="p-6 text-slate-500 font-bold text-lg">Ангилал</th>
              <th className="p-6 text-slate-500 font-bold text-lg text-right">Үйлдэл</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {newsList.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                <td className="p-6">
                  <img 
                    src={item.imageUrl || 'https://placehold.co/100x60'} 
                    alt="" 
                    className="w-20 h-14 object-cover rounded-lg bg-slate-200"
                  />
                </td>
                <td className="p-6">
                  <p className="text-xl font-bold text-slate-800 line-clamp-1">{item.title}</p>
                  <p className="text-slate-500 line-clamp-1">{item.summary}</p>
                </td>
                <td className="p-6 text-lg text-slate-600 whitespace-nowrap">{item.date}</td>
                <td className="p-6">
                  <span className="px-4 py-1 bg-blue-100 text-gov-blue rounded-full text-sm font-bold">
                    {item.category}
                  </span>
                </td>
                <td className="p-6 text-right space-x-4">
                  <button 
                    onClick={() => navigate(`/admin/news/edit/${item.id}`)}
                    className="p-3 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    <Edit size={24} />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-3 text-red-600 hover:bg-red-100 rounded-xl transition-colors"
                  >
                    <Trash2 size={24} />
                  </button>
                </td>
              </tr>
            ))}
            {newsList.length === 0 && (
              <tr>
                <td colSpan={5} className="p-10 text-center text-slate-500 text-xl">
                  Мэдээлэл байхгүй байна.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;