import { NewsItem } from '../types';
import { NEWS_DATA } from '../constants';

const STORAGE_KEY = 'kiosk_news_data';

export const newsService = {
  getAll: (): NewsItem[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Seed initial data if empty
        localStorage.setItem(STORAGE_KEY, JSON.stringify(NEWS_DATA));
        return NEWS_DATA;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error loading news", e);
      return NEWS_DATA;
    }
  },

  getById: (id: string): NewsItem | undefined => {
    const all = newsService.getAll();
    return all.find((item) => item.id === id);
  },

  save: (item: NewsItem): void => {
    const all = newsService.getAll();
    const index = all.findIndex((i) => i.id === item.id);
    
    let updatedList;
    if (index >= 0) {
      // Update existing
      updatedList = [...all];
      updatedList[index] = item;
    } else {
      // Add new (prepend)
      updatedList = [item, ...all];
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  },

  delete: (id: string): void => {
    const all = newsService.getAll();
    const updatedList = all.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  }
};