"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import managementtreatmentmain from '../../public/assests/managementreatmentmain.svg';
import weightstigma from '../../public/assests/weightstigmamain.svg';
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
        image: weightstigma,
        alt: 'What is weight stigma?',
        title: 'What is weight stigma?',
        content: 'Weight stigma refers to the discrimination or stereotyping based on a person\'s weight. It can occur in various settings, including healthcare, workplaces, and social situations. Addressing weight stigma involves promoting body acceptance, creating supportive environments, and challenging harmful stereotypes and behaviors.',
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


const WeightManagement = () => {
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
            <div className='flex gap-x-12 mt-2'>
                <Image src={managementtreatmentmain} alt='CausesLogo' width={656} height={327}></Image>
                <div className='font-bold flex justify-center items-center text-center text-4xl font-sans'>
                    Weight Stigma
                </div>
            </div>
            <h1 className='flex text-center items-center justify-center text-base mt-8 mb-4 font-semibold'>
                Addressing weight stigma is essential to create a supportive environment. We promote body acceptance to create a supportive environment.
            </h1>

            <div className='relative flex flex-col'>
                <Image src={weightstigma} alt='Whatispcos' width={372} height={221} className='rounded-t-lg'></Image>
                <div className='absolute bottom-10 inset-x-0 bg-[#FFFFFF] flex items-center justify-center h-12 rounded-b-lg'>
                    <span className='font-bold text-black'>What is weight stigma?</span>
                </div>
                <div className='mt-4 w-full flex justify-center'>
                    <Button
                        onClick={() => handleReadMore(topics[0])}
                        className='bg-[#AE5472] w-56 h-10 rounded-full text-white'
                    >
                        Read More
                    </Button>
                </div>
            </div>

            {modalContent && (
                <Modal show={showModal} onClose={handleCloseModal} content={modalContent} />
            )}
        </div>
    );
};

export default WeightManagement;
