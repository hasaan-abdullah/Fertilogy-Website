"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Overall from '../components/Overall';
import { Header } from '../components/Header';
import { Button } from '@/components/ui/button';

const Overallheader = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/Login'); // Adjust the path as needed
  };

  return (
    <div>
      <Overall />
      <Header />
      <div className='text-right mt-6 mr-24'>
        <Button
          onClick={handleLoginClick}
          className='bg-[#fbe8f3] text-black font-bold text-lg border border-black/[0.09] hover:bg-[#eb7bb5] rounded-full shadow-md px-6 py-3'
        >
          Log in →
        </Button>
      </div>
    </div>
  );
};

export default Overallheader;
