
import React from 'react';
import { HeartPulse, Stethoscope, Microscope, Ambulance, Pill, ClipboardList, Phone, UserCircle } from 'lucide-react';
import { Doctor, Medicine, Service } from './types';

export const COLORS = {
  primary: '#E9D5FF', // Soft Lavender
  accent: '#4C1D95',  // Deep Plum
  secondary: '#FFFFFF',
  background: '#F9FAFB'
};

export const DOCTORS: Doctor[] = [
  { id: 1, name: "Dr. Sarah Mitchell", specialization: "Cardiology", availability: "Mon - Wed", experience: "12 Years", image: "https://picsum.photos/seed/doc1/400/400" },
  { id: 2, name: "Dr. James Wilson", specialization: "Neurology", availability: "Tue - Thu", experience: "15 Years", image: "https://picsum.photos/seed/doc2/400/400" },
  { id: 3, name: "Dr. Elena Rodriguez", specialization: "Pediatrics", availability: "Mon - Fri", experience: "8 Years", image: "https://picsum.photos/seed/doc3/400/400" },
  { id: 4, name: "Dr. Michael Chen", specialization: "Orthopedics", availability: "Sat - Sun", experience: "10 Years", image: "https://picsum.photos/seed/doc4/400/400" },
  { id: 5, name: "Dr. Amara Okoro", specialization: "Dermatology", availability: "Wed - Fri", experience: "7 Years", image: "https://picsum.photos/seed/doc5/400/400" },
];

export const MEDICINES: Medicine[] = [
  { id: 1, name: "Paracetamol", category: "Analgesic", stock: 1500, expiry: "2025-12-10" },
  { id: 2, name: "Amoxicillin", category: "Antibiotic", stock: 850, expiry: "2024-08-15" },
  { id: 3, name: "Metformin", category: "Antidiabetic", stock: 420, expiry: "2026-03-22" },
  { id: 4, name: "Atorvastatin", category: "Lipid-lowering", stock: 310, expiry: "2025-01-11" },
  { id: 5, name: "Ibuprofen", category: "NSAID", stock: 1200, expiry: "2026-11-30" },
];

export const SERVICES: Service[] = [
  { id: 1, title: "Emergency Care", description: "24/7 emergency response with state-of-the-art trauma facilities.", icon: "Ambulance" },
  { id: 2, title: "General Surgery", description: "Advanced laparoscopic and robotic surgical procedures.", icon: "Stethoscope" },
  { id: 3, title: "Cardiology", description: "Comprehensive heart health diagnostics and treatment plans.", icon: "HeartPulse" },
  { id: 4, title: "Diagnostics", description: "Precision imaging and laboratory testing services.", icon: "Microscope" },
  { id: 5, title: "Pharmacy", description: "Fully stocked pharmacy with professional prescription consultation.", icon: "Pill" },
  { id: 6, title: "Intensive Care", description: "Specialized ICU and neonatal care with dedicated nursing staff.", icon: "ClipboardList" },
];

export const iconMap: Record<string, React.ReactNode> = {
  Ambulance: <Ambulance size={32} />,
  Stethoscope: <Stethoscope size={32} />,
  HeartPulse: <HeartPulse size={32} />,
  Microscope: <Microscope size={32} />,
  Pill: <Pill size={32} />,
  ClipboardList: <ClipboardList size={32} />,
  Phone: <Phone size={20} />,
  UserCircle: <UserCircle size={20} />
};
