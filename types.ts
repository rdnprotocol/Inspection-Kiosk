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

export interface ScheduleItem {
  id: string;
  date: string;
  time: string;
  target: string; // The object/company being inspected
  district: string;
  type: string; // Type of inspection
  team: string; // Team members
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