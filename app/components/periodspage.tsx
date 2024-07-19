"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import periodslogo from '../../public/assests/periodslogo.svg';
import menstrualcycle from '../../public/assests/menstrualcycle.svg';
import treatmentirregularperiod from '../../public/assests/treatmentirregularperiod.svg';
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
        image: menstrualcycle,
        alt: 'What is a menstrual cycle?',
        title: 'What is a menstrual cycle?',
        content: 'The menstrual cycle is the monthly series of changes a woman’s body goes through in preparation for the possibility of pregnancy. Each month, one of the ovaries releases an egg — a process called ovulation. At the same time, hormonal changes prepare the uterus for pregnancy. If ovulation takes place and the egg isn’t fertilized, the lining of the uterus sheds through the vagina. This is a menstrual period.',
    },
    {
        image: treatmentirregularperiod,
        alt: 'Treatments for irregular periods',
        title: 'Treatments for irregular periods',
        content: 'Treatments for irregular periods vary depending on the underlying cause. Common treatments include lifestyle changes like weight management and exercise, as well as medical treatments such as hormonal contraceptives (birth control pills) to regulate the menstrual cycle. In some cases, treating an underlying condition like PCOS or thyroid disorders is necessary to restore regular menstrual cycles.',
    }
];

const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
                <h2 className="text-2xl font-bold mb-4 text-center">{content.title}</h2>
                <p className="mb-4 text-center">{content.content}</p>
                <div className="flex justify-center">
                    <Button onClick={onClose} className="bg-[#AE5472] w-24 h-10 rounded-full text-white">
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Periodspage = () => {
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
        <div className='flex flex-col h-auto'>
            <div className='flex flex-row mx-28 mt-2'>
                <Image src={periodslogo} alt='periodslogo' width={657} height={271}></Image>
                <div className='font-bold flex justify-center items-center text-4xl font-sans ml-56 mt-12'>
                    Menstrual Cycle
                </div>
            </div>
            <h1 className='flex text-center items-center justify-center text-xl mt-2 mb-4 p-6'>
                You will find information on the causes of irregular periods and the lifestyle and medical treatments that are available to regulate irregular periods.
            </h1>

            <div className='relative flex flex-col items-center cursor-pointer h-auto'>
                <div className='grid grid-cols-2 gap-x-36 gap-y-16 p-6'>
                    {topics.map((topic, index) => (
                        <div key={index} className='relative flex flex-col'>
                            <Image src={topic.image} alt={topic.alt} width={488} height={247} className='rounded-t-lg'></Image>
                            <div className='absolute bottom-10 inset-x-0 bg-[#FFFFFF] flex items-center justify-center h-12 rounded-b-lg'>
                                <span className='font-bold text-black'>{topic.title}</span>
                            </div>
                            <div className='mt-4 w-full flex justify-center'>
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
            </div>

            {modalContent && (
                <Modal show={showModal} onClose={handleCloseModal} content={modalContent} />
            )}
        </div>
    );
};

export default Periodspage;
