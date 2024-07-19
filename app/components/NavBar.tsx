'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='fixed top-0 w-full flex justify-between items-center py-4 px-8 bg-[#F7ECF1] shadow-md z-50'>
      <div className='flex flex-wrap gap-x-8 md:gap-x-16'>
        {[
          { path: '/', label: 'Home' },
          {
            path: '/explore', label: 'Explore', dropdown: true, items: [
              { path: '/causes', label: 'Causes, Symptoms, and Diagnosis' },
              { path: '/periods', label: 'Menstrual Cycle' },
              { path: '/fertilityissues', label: 'Fertility Issues' },
              { path: '/managementandtreatment', label: 'Management and Treatment' },
              { path: '/weightmanagement', label: 'Weight Management' },
              { path: '/hairandskin', label: 'Hair and Skin' }
            ]
          },
          { path: '/symptomschecker', label: 'Symptom Checker' },
          { path: '/fertilityai', label: 'Fertilogy AI' },
          { path: '/healthcaresupport', label: 'Healthcare Support' },
          { path: '/privacypolicy', label: 'Privacy Policy' }
        ].map(link => (
          link.dropdown ? (
            <div key={link.path} className='relative'>
              <button
                onClick={handleDropdownToggle}
                className={`relative text-lg font-bold text-gray-700 transition-colors duration-300 ${pathname === link.path ? 'text-[#AE5472] after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[#AE5472]' : 'hover:text-[#AE5472]'}`}>
                {link.label}
              </button>
              {dropdownOpen && (
                <div className='absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg transition-opacity duration-300 opacity-100 z-10'>
                  {link.items.map(item => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#AE5472] transition-colors duration-200'>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.path}
              href={link.path}
              className={`relative text-lg font-bold text-gray-700 transition-colors duration-300 ${pathname === link.path ? 'text-[#AE5472] after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[#AE5472]' : 'hover:text-[#AE5472]'}`}>
              {link.label}
            </Link>
          )
        ))}
      </div>
      <div className='flex space-x-4 md:space-x-16'>
        <Button
          onClick={() => router.push('/signup')}
          className='bg-[#AE5472] text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105'>
          SIGN UP
        </Button>
        <Button
          onClick={() => router.push('/login')}
          className='bg-[#AE5472] text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105'>
          LOG IN
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
