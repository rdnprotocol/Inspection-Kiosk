import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
  path: string;
  color?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  category: string;
}

export interface StatData {
  name: string;
  value: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ApplicationStep {
  step: number;
  title: string;
  description: string;
}