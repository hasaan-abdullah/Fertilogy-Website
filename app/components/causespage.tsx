"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Causeslogos from '../../public/assests/causeslogo.svg';
import whatispcos from '../../public/assests/whatispcos.svg';
import whatisnewinpcos from '../../public/assests/whatisnewinpcos.svg';
import whatcausespcos from '../../public/assests/whatcausespcos.svg';
import howispcosdiagnosed from '../../public/assests/howispcosdiagnosed.svg';
import symptomsofpcos from '../../public/assests/symptomsofpcos.svg';
import keypointspcos from '../../public/assests/keypointspcos.svg';
import { Button } from '@/components/ui/button';

type Topic = {
    image: StaticImageData;
    alt: string;
    title: string;
    content: string;
};

type ModalProps = {
    show: boolean;
    onClose: () => void;
    content: Topic;
};

const topics: Topic[] = [
    {
        image: whatispcos,
        alt: 'What is PCOS?',
        title: 'What is PCOS?',
        content: 'Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder among women of reproductive age. It is characterized by irregular menstrual periods, excess hair growth, acne, and obesity. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.',
    },
    {
        image: whatisnewinpcos,
        alt: 'What\'s new in PCOS?',
        title: 'What\'s new in PCOS?',
        content: 'Recent research in PCOS focuses on understanding the genetic basis of the syndrome, new treatment options including lifestyle interventions, medications, and the role of diet and exercise in managing symptoms. Innovations in fertility treatments and new insights into the metabolic implications of PCOS are also areas of ongoing study.',
    },
    {
        image: whatcausespcos,
        alt: 'What causes PCOS?',
        title: 'What causes PCOS?',
        content: 'The exact cause of PCOS is unknown. Factors that might play a role include excess insulin, low-grade inflammation, heredity, and excess androgen. These factors can lead to hormonal imbalances, affecting the normal functioning of the ovaries and leading to symptoms of PCOS.',
    },
    {
        image: howispcosdiagnosed,
        alt: 'How is PCOS diagnosed?',
        title: 'How is PCOS diagnosed?',
        content: 'PCOS is diagnosed based on a combination of clinical signs and symptoms, physical examinations, blood tests to measure hormone levels, and ultrasound imaging to check for the presence of ovarian cysts. There is no single test for PCOS, so healthcare providers use a range of criteria to diagnose the condition.',
    },
    {
        image: symptomsofpcos,
        alt: 'What are the symptoms of PCOS?',
        title: 'What are the symptoms of PCOS?',
        content: 'Symptoms of PCOS can vary widely but often include irregular menstrual cycles, excessive hair growth (hirsutism), acne, obesity, and infertility. Women with PCOS may also experience thinning hair on the scalp, darkening of the skin, and the development of skin tags.',
    },
    {
        image: keypointspcos,
        alt: 'Key points for PCOS',
        title: 'Key points for PCOS',
        content: 'Key points to remember about PCOS include the importance of early diagnosis and treatment to manage symptoms and prevent long-term complications. Lifestyle changes, such as diet and exercise, play a crucial role in managing PCOS. Regular medical checkups and monitoring are essential for women with PCOS.',
    }
];

const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mx-24">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
                <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
                <p className="mb-4">{content.content}</p>
                <div className="flex justify-center">
                    <Button onClick={onClose} className="bg-[#AE5472] w-24 h-10 rounded-full text-white">
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Causespage = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<Topic | null>(null);

    const handleReadMore = (content: Topic) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='relative flex flex-col items-center cursor-pointer h-auto'>
            <div className='flex mt-20'>
                <Image src={Causeslogos} alt='CausesLogo' width={656} height={327}></Image>
                <div className='font-bold flex justify-center items-center text-center text-5xl font-sans'>
                    Causes, Symptoms and Diagnosis
                </div>
            </div>
            <h1 className='flex text-center items-center justify-center text-lg mt-2 mb-4'>
                You will find information on known causes of PCOS, how a diagnosis is made and help on how to manage PCOS symptoms.
            </h1>

            <div className='grid grid-cols-3 gap-x-16 gap-y-16 p-6'>
                {topics.map((topic, index) => (
                    <div key={index} className='relative flex flex-col'>
                        <Image src={topic.image} alt={topic.alt} width={372} height={221} className='rounded-t-lg'></Image>
                        <div className='absolute bottom-10 inset-x-0 bg-[#FFFFFF] flex items-center justify-center h-12 rounded-b-lg'>
                            <span className='font-bold text-black'>{topic.title}</span>
                        </div>
                        <div className='mt-auto w-full flex justify-center '>
                            <Button
                                onClick={() => handleReadMore(topic)}
                                className='bg-[#AE5472] w-56 h-10 rounded-full text-white'
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {modalContent && (
                <Modal show={showModal} onClose={handleCloseModal} content={modalContent} />
            )}
        </div>
    );
};

export default Causespage;
