'use client';
import React from 'react';
import Navbar from '../components/NavBar';
import Image from 'next/image';
import doctor from '../../public/assests/doctor.svg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import firstdoc from '../../public/assests/firstdoc.svg';
import seconddoc from '../../public/assests/seconddoc.svg';
import thirddoc from '../../public/assests/thirddoc.svg';
import fourdoc from '../../public/assests/fourthdoc.svg';
import fifthdoc from '../../public/assests/fifthdoc.svg';
import sixthdoc from '../../public/assests/sixthdoc.svg';
import seventhdoc from '../../public/assests/seventhdoc.svg';
import eightdoc from '../../public/assests/eightdoc.svg';
import userrr from '../../public/assests/userrr.svg';
import fivestar from '../../public/assests/5star.svg';
import Appheader from '../components/AppHeader';
import Footerline from '../components/footerline';
import Moment from 'react-moment';

const testimonials = [
    {
        name: 'Maheera Khan',
        feedback: 'Amazing service and care! I highly recommend this healthcare provider.',
        rating: 5,
        time: '2023-06-10T12:00:00Z'
    },
    {
        name: 'Aliya Ahmed',
        feedback: 'The doctors were very professional and friendly. Great experience overall!',
        rating: 5,
        time: '2023-06-09T08:00:00Z'
    },
    {
        name: 'Rida Gayaz',
        feedback: 'Excellent care and support from the staff. Highly satisfied with my visit.',
        rating: 5,
        time: '2023-06-08T14:00:00Z'
    }
];

const HealthCareSupport = () => {
    const router = useRouter();
    return (
        <div>
            <div className='bg-[#F7ECF1] w-auto flex flex-row gap-y-4 mx-28'>
                <div className='flex flex-col ml-[260px] mt-[60px] gap-y-3'>
                    <div className='text-3xl font-bold flex items-center text-center'>A Professional and Friendly</div>
                    <div className='text-3xl font-bold flex items-center text-center ml-[100px]'>Care Provider</div>
                    <Button onClick={() => router.push('/')} className='bg-[#AE5472] font-semibold'> Book Your Appointment</Button>
                </div>
                <Image src={doctor} alt='doc' className='ml-[220px]'></Image>
            </div>
            <div className='flex flex-col p-10 items-center justify-center gap-y-2 text-base font-semibold '>
                <div className='text-lg font-bold'>Need a doctor for checkup? 🩺 </div>
                <div className='text-lg font-bold'>📞 Call for an emergency services! </div>
            </div>
            <div>
                <div className='flex flex-col p-10 items-center justify-center gap-y-1 bg-[#F7ECF1] bg-opacity-50 mx-28'>
                    <div className='flex items-center justify-center gap-y-1 text-2xl font-bold'>Professional Care Provider</div>
                    <div className='flex font-light text-lg'>Trusted Care, Proven Results</div>

                    <div className='flex flex-col h-[720px] items-center justify-center gap-y-2'>
                        <div className='flex flex-row gap-x-6'>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={firstdoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr. Shahnaz Bibi</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Obstetrician & Gynaecologist</div>
                            </div>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={seconddoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr. Samra Kashif</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Obstetrician & Gynaecologist</div>

                            </div>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={thirddoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Prof. Dr. Shagufta Tahir</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Urogynaecologist/ Endoscopic Surgeon</div>
                            </div>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={fourdoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr. Imran Ulhaq</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'> Endocrinologist & Internist</div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-6'>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center '>
                                <Image src={fifthdoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr. Zakir Alvi</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Diabetologist & amp</div>
                            </div>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={sixthdoc} alt='riz' className='rrounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr.Wasey Mahmud Jilani</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Diagnostic Radiology</div>
                            </div>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={seventhdoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr. Amer Iqtidar Bhatti</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Consultant Radiologist</div>
                            </div>
                            <div className='flex flex-col w-[270px] h-[320px] items-center justify-center text-center'>
                                <Image src={eightdoc} alt='riz' className='rounded w-[224px] h-[224px]'></Image>
                                <div className='font-semibold '>Dr. Mehwish Fatima</div>
                                <div className='italic text-sm text-[#AE5472] font-semibold'>Obstetrician & Gynaecologist</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='bg-[#7C3A50] w-auto h-[250px] mx-28'>
                    <div className='flex flex-row gap-x-10'>
                        <div className='flex text-3xl font-bold text-white mt-[30px] items-center justify-center ml-[480px]'>Join Our Team Now</div>
                        <div className='bg-white border rounded h-[180px] w-[300px] mt-[40px] flex flex-col gap-y-2 items-center justify-center text-center'>
                            <div className='text-xl font-bold'>We are always ready for a challenge!</div>
                            <div>📞 +92-303-0707123</div>
                            <div>f20csc22@shu.edu.pk 📩</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-col items-center justify-center mt-[30px] space-y-2'>
                    <div className='text-2xl font-bold flex items-center text-center'>Patients Testimonial </div>
                    <div className='text-lg flex items-center text-center'>Real Stories, Real Recovery 🏪 </div>
                </div>
                <div>
                    <div className='flex flex-row mt-[30px] gap-x-12 items-center justify-center'>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className='flex w-[320px] h-[270px] bg-[#E7DEE2] rounded-lg p-4'>
                                <div className='flex flex-col items-center'>
                                    <Image src={userrr} alt='user' className='w-[64px] h-[64px] rounded-full'></Image>
                                    <div className='text-base font-serif mt-2'>{testimonial.name}</div>
                                    <Image src={fivestar} alt='star' className='w-[100px] h-[20px] mt-2'></Image>
                                    <p className='text-center mt-2'>{testimonial.feedback}</p>
                                    <Moment fromNow className='text-sm text-gray-500 mt-2'>{testimonial.time}</Moment>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footerline />
        </div>
    );
};

export default HealthCareSupport;
