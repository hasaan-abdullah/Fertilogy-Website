"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import hairskinaffect from '../../public/assests/hairandskinaffect.svg';
import laserhair from '../../public/assests/laserhairremove.svg';
import mainskinandhair from '../../public/assests/hairandskinstartmain.svg';
import hirsutism from '../../public/assests/hirsutism.svg';
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
        image: hairskinaffect,
        alt: 'How does PCOS affect hair and skin?',
        title: 'How does PCOS affect hair and skin?',
        content: 'Polycystic Ovary Syndrome (PCOS) can have various impacts on hair and skin due to hormonal imbalances. These may include increased hair growth on the face and body (hirsutism), hair thinning on the scalp, and skin issues such as acne and darkening of the skin. These symptoms occur due to higher levels of androgens (male hormones) in the body.',
    },
    {
        image: hirsutism,
        alt: 'Treatment of excess body hair (hirsutism)',
        title: 'Treatment of excess body hair (hirsutism)',
        content: 'Hirsutism, or excess body hair, can be managed through various treatments. These include lifestyle changes, weight loss, and medications such as oral contraceptives and anti-androgens that help to reduce hair growth. Other options include hair removal techniques such as shaving, waxing, plucking, and laser hair removal.',
    },
    {
        image: laserhair,
        alt: 'PCOS and laser hair removal',
        title: 'PCOS and laser hair removal',
        content: 'Laser hair removal is a popular option for managing unwanted hair growth in women with PCOS. It works by targeting the hair follicles with laser light, which inhibits future hair growth. While effective, multiple sessions are often needed, and maintenance treatments may be necessary. It is important to consult with a healthcare provider to ensure this treatment is suitable.',
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

const HairandSkin = () => {
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
            <div className='flex gap-x-8 mt-2'>
                <Image src={mainskinandhair} alt='CausesLogo' width={656} height={327}></Image>
                <div className='font-bold flex justify-center items-center text-center text-4xl font-sans'>
                    Skin and Hair
                </div>
            </div>
            <h1 className='flex text-center items-center justify-center text-lg mt-8 mb-4 font-semibold'>
                You will find information on how and why PCOS impacts skin and hair and the range of available treatments.
            </h1>

            <div className='grid grid-cols-3 gap-x-16 gap-y-16 p-6'>
                {topics.map((topic, index) => (
                    <div key={index} className='relative flex flex-col'>
                        <Image src={topic.image} alt={topic.alt} width={372} height={221} className='rounded-t-lg'></Image>
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

            {modalContent && (
                <Modal show={showModal} onClose={handleCloseModal} content={modalContent} />
            )}
        </div>
    );
};

export default HairandSkin;
