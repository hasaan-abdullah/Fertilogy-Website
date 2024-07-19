'use client';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import pcoslogo from '../../public/assests/pcoslogo.svg';
import { IoHomeSharp } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import background from '../../public/assests/background.svg';

const Login = () => {
    const Router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === 'user@example.com' && password === 'password') {
            sessionStorage.setItem('user', JSON.stringify({ email }));
            Router.push('/dashboard'); // Redirect to a dashboard page or another authenticated route
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center">
                <Image src={background} alt='Background' layout="fill" objectFit="cover" objectPosition="center" />
            </div>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='flex flex-col border border-black w-[600px] h-[500px] bg-[#F7ECF1] bg-opacity-100 relative z-10'>
                    <div className='flex flex-row'>
                        <Image src={pcoslogo} alt='logo' className='w-[100px] h-[100px] ml-[5px] mt-[10px]' />
                        <div className='mt-[60px] text-2xl font-bold text-[#6D273F]'>Your PCOS Wellness Companion</div>
                        <Link href={'/ '}>
                            <IoHomeSharp className='mt-[60px] h-[30px] w-[30px] ml-[50px]' />
                        </Link>
                    </div>
                    <div className='flex text-center text-xl font-bold items-center mt-[20px] justify-center'>Login Page</div>
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    <div className="flex flex-col gap-1.5 align-middle ml-[50px] mt-[20px] w-[500px]">
                        <Label>Email Address</Label>
                        <Input type="email" id="email" placeholder="Enter your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1.5 align-middle ml-[50px] mt-[20px] w-[500px]">
                        <Label>Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Link href={'/'} className='flex text-blue-600 underline ml-[380px] text-sm mt-[5px]'>Forgot Password?</Link>
                    </div>
                    <div className='flex flex-col gap-y-3 items-center justify-center'>
                        <Button onClick={handleLogin} className='w-[200px] mt-[35px] bg-[#6D273F] bg-opacity-90'>🔓Login</Button>
                        <div className='flex flex-row gap-x-3'>
                            <div className='text-sm'>Do not have an account?</div>
                            <Link href={'/signup'} className='text-blue-600 underline text-sm'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
