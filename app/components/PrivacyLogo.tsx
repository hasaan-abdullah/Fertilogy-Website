import Image from 'next/image';
import React from 'react';
import pcoslogo from '../../public/assests/pcoslogo.svg'; // Note: ensure the path is correct

const PrivacyLogo = () => {
    return (
        <div className='relative flex items-center h-[170px] bg-[#F7ECF1] px-48'>
            <div className='absolute left-1/2 transform -translate-x-1/2'>
                <div className='text-center'>
                    <div className='text-4xl font-bold'>Privacy Policy</div>
                    <div className='text-xl font-light italic mt-2 '>
                        Your Privacy, Our Priority: Safeguarding Your Health Information
                    </div>
                </div>
            </div>
            <div className='flex-1'></div> {/* This empty flex item pushes the logo to the right */}
            <div>
                <Image src={pcoslogo} alt='logo' width={150} height={150} />
            </div>
        </div>
    );
}

export default PrivacyLogo;
