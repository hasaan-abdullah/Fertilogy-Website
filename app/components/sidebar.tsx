'use client';
import React from 'react';
import Link from 'next/link';
import { TiHome } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { FaSquareCheck } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";
import { GiHealthCapsule } from "react-icons/gi";
import { MdPrivacyTip } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { MdImageSearch } from "react-icons/md";
import { cn } from '@/lib/utils';  // Make sure you have this utility or remove it if not needed

interface SidebarItem {
  name: string;
  path: string;
  Icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Home', path: '/', Icon: <TiHome className="text-3xl" /> },
  { name: 'Explore', path: '/explore', Icon: <FiSearch className="text-3xl" /> },
  { name: 'Symptom Checker', path: '/symptomschecker', Icon: <FaSquareCheck className="text-3xl" /> },
  { name: 'Fertilogy AI', path: '/fertilityai', Icon: <TbMessageChatbot className="text-3xl" /> },
  { name: 'PCOS Predictor', path: '/pcospredictor', Icon: <MdImageSearch className="text-3xl" /> },
  { name: 'Healthcare Support', path: '/healthcaresupport', Icon: <GiHealthCapsule className="text-3xl" /> },
  { name: 'Privacy Policy', path: '/privacypolicy', Icon: <MdPrivacyTip className="text-3xl" /> },
];

const Sidebar: React.FC = () => {
  const pathName = usePathname();

  return (
    <div className="fixed top-1/2 bg-transparent left-6 -translate-y-1/2 rounded-md py-6 px-6 shadow-lg z-50 ">
      <ul className="flex flex-col items-center space-y-8 text-4xl">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={cn('hover:text-blue-900 hover:translate-x-1 hover:-translate-y-1 transition-all', {
              'text-black': pathName === item.path,
              'text-[#7c1f43]': pathName !== item.path,
            })}
          >
            <Link href={item.path}>
              <div className="flex items-center justify-center w-full h-full" title={item.name}>
                {item.Icon}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
