import { ScheduleItem } from '../types';

const STORAGE_KEY = 'kiosk_schedule_data';

const INITIAL_DATA: ScheduleItem[] = [
  {
    id: '1',
    date: '2024-05-20',
    time: '10:00',
    target: 'Нарантуул зах',
    district: 'Баянзүрх',
    type: 'Төлөвлөгөөт',
    team: '1-р баг'
  },
  {
    id: '2',
    date: '2024-05-21',
    time: '14:00',
    target: 'Сургууль №1',
    district: 'Сүхбаатар',
    type: 'Гүйцэтгэл',
    team: '2-р баг'
  }
];

export const scheduleService = {
  getAll: (): ScheduleItem[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
        return INITIAL_DATA;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error loading schedule", e);
      return INITIAL_DATA;
    }
  },

  save: (item: ScheduleItem): void => {
    const all = scheduleService.getAll();
    const index = all.findIndex((i) => i.id === item.id);
    
    let updatedList;
    if (index >= 0) {
      updatedList = [...all];
      updatedList[index] = item;
    } else {
      updatedList = [...all, item];
    }
    
    // Sort by date and time
    updatedList.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA.getTime() - dateB.getTime();
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  },

  delete: (id: string): void => {
    const all = scheduleService.getAll();
    const updatedList = all.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  }
};