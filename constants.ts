import { Building2, FileText, BarChart3, Newspaper, MapPin, Info, CalendarDays } from 'lucide-react';
import { NavItem, NewsItem, StatData, TeamMember, ApplicationStep } from './types';

export const APP_CONFIG = {
  idleTimeoutMs: 30 * 60 * 1000, // 30 minutes
  agencyName: "Нийслэлийн Хяналт Шалгалтын Газар",
  hotline: "7777-1234"
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', title: 'Бидний тухай', icon: Info, path: '/about' },
  { id: 'inspection', title: 'Хяналт шалгалтын мэдээлэл', icon: BarChart3, path: '/inspection' },
  { id: 'complaints', title: 'Өргөдөл, гомдол', icon: FileText, path: '/complaints' },
  { id: 'news', title: 'Мэдээ, мэдээлэл', icon: Newspaper, path: '/news' },
  { id: 'schedule', title: 'Комиссын хуваарь', icon: CalendarDays, path: '/schedule' },
];

export const STATS_DATA: StatData[] = [
  { name: 'Барилга', value: 45 },
  { name: 'Байгаль орчин', value: 30 },
  { name: 'Хүнс, хөдөө аж ахуй', value: 55 },
  { name: 'Эрүүл мэнд', value: 25 },
  { name: 'Боловсрол', value: 35 },
  { name: 'Дэд бүтэц', value: 20 },
];

export const MONTHLY_INSPECTIONS = [
  { name: '1-р сар', completed: 120, planned: 150 },
  { name: '2-р сар', completed: 132, planned: 150 },
  { name: '3-р сар', completed: 101, planned: 150 },
  { name: '4-р сар', completed: 134, planned: 150 },
  { name: '5-р сар', completed: 190, planned: 200 },
  { name: '6-р сар', completed: 230, planned: 250 },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: 'Нийслэлийн хэмжээнд хүнсний аюулгүй байдлын шалгалт эхэллээ',
    date: '2024-05-15',
    category: 'Шалгалт',
    summary: 'Нийслэлийн 9 дүүргийн хэмжээнд үйл ажиллагаа явуулж буй хүнсний үйлдвэр, худалдааны төвүүдэд урьдчилан сэргийлэх хяналт шалгалт эхэллээ.',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    title: 'Барилгын чанар, аюулгүй байдалд анхаарах зөвлөмж',
    date: '2024-05-10',
    category: 'Зөвлөмж',
    summary: 'Барилга угсралтын ажлын үед хөдөлмөрийн аюулгүй байдлыг хангах, болзошгүй эрсдэлээс урьдчилан сэргийлэх зөвлөмжийг хүргүүлж байна.',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'Иргэдийн өргөдөл гомдлыг шийдвэрлэсэн байдал',
    date: '2024-05-01',
    category: 'Тайлан',
    summary: 'Өнгөрсөн сард иргэдээс ирүүлсэн 150 гаруй өргөдөл, гомдлыг хуулийн хугацаанд шийдвэрлэж, хариуг хүргүүллээ.',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: '4',
    title: 'Байгаль орчны бохирдлыг бууруулах арга хэмжээ',
    date: '2024-04-28',
    category: 'Байгаль орчин',
    summary: 'Туул голын сав газар болон хотын ногоон бүсэд хяналт шалгалт хийж, зөрчил гаргасан аж ахуйн нэгжүүдэд хариуцлага тооцлоо.',
    imageUrl: 'https://picsum.photos/800/400?random=4'
  }
];

export const APPLICATION_STEPS: ApplicationStep[] = [
  { step: 1, title: 'Өргөдөл бичих', description: 'Өргөдлийн маягтыг бөглөх эсвэл чөлөөт хэлбэрээр бичих' },
  { step: 2, title: 'Хавсралт баримт', description: 'Шаардлагатай нотлох баримт, бичиг баримтыг хавсаргах' },
  { step: 3, title: 'Илгээх', description: 'Биечлэн өгөх эсвэл цахимаар (E-Mongolia, Hotula) илгээх' },
  { step: 4, title: 'Шийдвэрлэх', description: 'Хуулийн хугацаанд (30 хоног) шийдвэрлэж хариу өгөх' },
];

export const LEADERSHIP: TeamMember[] = [
  { name: 'Б. Бат-Эрдэнэ', role: 'Газрын дарга', image: 'https://picsum.photos/200/200?random=10' },
  { name: 'Д. Болд', role: 'Дэд дарга', image: 'https://picsum.photos/200/200?random=11' },
];