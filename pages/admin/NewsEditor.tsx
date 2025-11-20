import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { newsService } from '../../lib/newsService';
import { NewsItem } from '../../types';
import { ArrowLeft, Save } from 'lucide-react';

const NewsEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState<NewsItem>({
    id: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Мэдээ',
    summary: '',
    imageUrl: ''
  });

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }

    if (id) {
      const existing = newsService.getById(id);
      if (existing) {
        setFormData(existing);
      }
    } else {
      // New item
      setFormData(prev => ({...prev, id: Date.now().toString()}));
    }
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newsService.save(formData);
    navigate('/admin/dashboard');
  };

  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto bg-slate-50 pb-20">
      <div className="flex items-center gap-6 mb-10">
        <button 
          onClick={() => navigate('/admin/dashboard')}
          className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-gov-blue transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-3xl font-bold text-gov-dark">
          {id ? 'Мэдээ засах' : 'Шинэ мэдээ нэмэх'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200 space-y-8">
        
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2">
            <label className="block text-lg font-bold text-slate-700 mb-3">Гарчиг</label>
            <input
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-4 text-xl border border-slate-300 rounded-xl focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none"
              placeholder="Мэдээний гарчиг..."
            />
          </div>

          <div>
            <label className="block text-lg font-bold text-slate-700 mb-3">Огноо</label>
            <input
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 text-xl border border-slate-300 rounded-xl focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none"
            />
          </div>

          <div>
             <label className="block text-lg font-bold text-slate-700 mb-3">Ангилал</label>
             <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-4 text-xl border border-slate-300 rounded-xl focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none bg-white"
             >
                <option value="Мэдээ">Мэдээ</option>
                <option value="Шалгалт">Шалгалт</option>
                <option value="Зөвлөмж">Зөвлөмж</option>
                <option value="Тайлан">Тайлан</option>
                <option value="Бусад">Бусад</option>
             </select>
          </div>

          <div className="col-span-2">
            <label className="block text-lg font-bold text-slate-700 mb-3">Зургийн холбоос (URL)</label>
            <input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-4 text-xl border border-slate-300 rounded-xl focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none font-mono text-sm"
              placeholder="https://example.com/image.jpg"
            />
            {formData.imageUrl && (
              <div className="mt-4 h-48 w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-lg font-bold text-slate-700 mb-3">Товч агуулга</label>
            <textarea
              required
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 text-xl border border-slate-300 rounded-xl focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none resize-none"
              placeholder="Мэдээний агуулга бичнэ үү..."
            />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
           <button 
             type="button"
             onClick={() => navigate('/admin/dashboard')}
             className="px-8 py-4 text-lg font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
           >
             Болих
           </button>
           <button 
             type="submit"
             className="px-8 py-4 text-lg font-bold text-white bg-gov-blue rounded-xl hover:bg-gov-dark shadow-lg flex items-center"
           >
             <Save className="mr-2" />
             Хадгалах
           </button>
        </div>

      </form>
    </div>
  );
};

export default NewsEditor;