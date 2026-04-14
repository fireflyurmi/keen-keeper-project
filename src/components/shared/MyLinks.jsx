"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiHome, HiClock } from 'react-icons/hi';
import { FaChartLine } from 'react-icons/fa6';

const iconMap = {
  home: HiHome,
  clock: HiClock,
  chart: FaChartLine,
};

export default function MyLink({ href, children, iconName }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const Icon = iconMap[iconName];

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
        isActive
          ? 'bg-[#244d3f] text-white'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {Icon && <Icon className="text-lg" />}
      <span className="hidden sm:inline">{children}</span>
    </Link>
  );
}