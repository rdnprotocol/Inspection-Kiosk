import React, { useState, useEffect } from 'react';
import BackButton from '../components/ui/BackButton';
import { newsService } from '../lib/newsService';
import { NewsItem } from '../types';
import { Calendar } from 'lucide-react';

const News: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Load data from storage service on mount
    setNewsList(newsService.getAll());
  }, []);

  return (
    <div className="p-10 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pb-20">
      <BackButton />
      <h2 className="text-4xl font-bold text-gov-dark mb-10">Мэдээ, мэдээлэл</h2>

      {newsList.length === 0 ? (
        <div className="text-center text-slate-500 text-2xl mt-20">
          Мэдээлэл байхгүй байна.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-10">
          {newsList.map((news) => (
            <div key={news.id} className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-slate-100 flex flex-col active:scale-[0.99] transition-transform">
              <div className="h-64 bg-slate-200 relative">
                <img 
                  src={news.imageUrl || 'https://picsum.photos/800/400'} 
                  alt={news.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=No+Image';
                  }}
                />
                <div className="absolute top-6 left-6 bg-gov-blue text-white px-4 py-2 rounded-lg text-lg font-bold">
                  {news.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-500 mb-4 text-lg">
                  <Calendar size={20} className="mr-2" />
                  {news.date}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
                  {news.title}
                </h3>
                <p className="text-xl text-slate-600 line-clamp-3">
                  {news.summary}
                </p>
                <div className="mt-auto pt-6">
                  <span className="text-gov-blue text-lg font-bold">Дэлгэрэнгүй унших &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;