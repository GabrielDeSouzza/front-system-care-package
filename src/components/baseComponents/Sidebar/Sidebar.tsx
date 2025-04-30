'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CalendarDays,
  Home,
  LogOut,
  Menu,
  Package,
  Scroll,
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { label: 'Início', icon: <Home size={20} />, href: '/dashboard' },
  { label: 'Sair', icon: <LogOut size={20} />, href: '/logout' },
  { label: 'Itens', icon: <Scroll size={20} />, href: '/carePackageItem' },
  {
    label: 'Datas',
    icon: <CalendarDays size={20} />,
    href: '/carePackageSchedule',
  },
  {
    label: 'Tipos de Pacote',
    icon: <Package size={20} />,
    href: '/typeCarePackage',
  },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <button
        className="p-3 text-white fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      <motion.aside
        animate={{ width: isOpen ? 240 : 60 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="h-screen bg-blue-900 text-white shadow-md p-4 pt-16 fixed top-0 left-0 overflow-hidden"
      >
        <nav className="flex flex-col gap-4">
          {menuItems.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition-colors"
            >
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </motion.aside>

      <main
        className={`transition-all duration-300 p-8 bg-gray-100 w-screen h-screen ${
          isOpen ? ' pl-[245px]' : 'pl-[65px]'
        }`}
      >
        <div className="w-full h-full">{children}</div>
      </main>
    </div>
  );
}
