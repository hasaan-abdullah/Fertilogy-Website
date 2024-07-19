'use client';
import Image from 'next/image';
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import or from '../../public/assests/or.svg';
import googleicon from '../../public/assests/signupgoogle.svg';
import facebookicon from '../../public/assests/signupfacebook.svg';
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import background from '../../public/assests/background.svg'; // Make sure this path is correct
 
const Signup = () => {
    const Router = useRouter();
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center">
                <Image src={background} alt='Background' layout="fill" objectFit="cover" objectPosition="center" />
            </div>
            <div className="flex items-center justify-center min-h-screen relative z-10">
                <div className='flex border border-black rounded w-[1100px] h-[680px] bg-[#F7ECF1] bg-opacity-100'>
                    <div>
                        <div className='flex text-center font-bold text-3xl ml-[360px] mt-[30px] text-[#AE5472]'>Sign Up For A Healthier You!</div>
                        <div className='ml-[310px] mt-[20px] italic text-lg font-semibold'>One step more towards Your PCOS Wellness Companion</div>
                        <div>
                            <div className='flex flex-row'>
                                <div className="flex flex-col gap-1.5 align-middle ml-[70px] mt-[20px] w-[440px]">
                                    <Input type="email" id="firstName" placeholder="First Name" />
                                </div>
                                <div className="flex flex-col gap-1.5 align-middle ml-[70px] mt-[20px] w-[440px]">
                                    <Input type="email" id="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 align-middle ml-[70px] mt-[20px] w-[950px]">
                                <Input type="email" id="email" placeholder="Enter your Email Address" />
                            </div>
                            <div className="flex flex-col gap-1.5 align-middle ml-[70px] mt-[20px] w-[950px]">
                                <Input type="password" id="password" placeholder="Enter your password" />
                            </div>
                            <div className="flex flex-col gap-1.5 align-middle ml-[70px] mt-[20px] w-[950px]">
                                <Input type="password" id="confirmPassword" placeholder="Confirm your password" />
                            </div>
                            <div className='flex items-center justify-center w-[320px] h-[27px] text-sm ml-[400px] mt-7'>
                                <Image src={or} alt='or'></Image>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-x-10 ml-[100px] mt-[20px]'>
                                <Image src={googleicon} alt='google signup'></Image>
                                <Image src={facebookicon} alt='facebook signup'></Image>
                            </div>
                            <div className='flex flex-col gap-y-5 ml-[70px] mt-[20px]'>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="pcosDiagnosed" />
                                    <label
                                        htmlFor="pcosDiagnosed"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I have been diagnosed with PCOS.
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I have read and agree to the Terms and Conditions.
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="newsletter" />
                                    <label
                                        htmlFor="newsletter"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Yes, I want to receive newsletters and updates.
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center mt-3 ml-[100px] gap-2'>
                                <Button onClick={() => Router.push('/signup')} > 🔐Create</Button>
                                <div className='flex flex-row gap-x-2'>
                                    <div>Already have an account?</div>
                                    <Link href={'/Login'} className='text-blue-600'>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Signup;