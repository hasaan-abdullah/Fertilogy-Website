"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import fertilitymain from '../../public/assests/fertilitymain.svg';
import preparingforpregnancy from '../../public/assests/preparingforpregnancy.svg';
import gestationaldiabetes from '../../public/assests/gestationaldiabetes.svg';
import surgicaloptionsfertilty from '../../public/assests/surgicaloptionsfertilty.svg';
import medicaltreatmentpcos from '../../public/assests/medicaltreatmentpcos.svg';
import pcosandfertility from '../../public/assests/pcosandfertilty.svg';
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
        image: pcosandfertility,
        alt: 'PCOS and fertility',
        title: 'PCOS and fertility',
        content: 'Polycystic Ovary Syndrome (PCOS) can significantly affect a woman\'s fertility. Women with PCOS often experience irregular menstrual cycles, anovulation (lack of ovulation), and hormonal imbalances, which can make it difficult to conceive. Treatments such as lifestyle changes, medications to induce ovulation, and assisted reproductive technologies can help improve fertility outcomes.',
    },
    {
        image: preparingforpregnancy,
        alt: 'Preparing for pregnancy',
        title: 'Preparing for pregnancy',
        content: 'Preparing for pregnancy involves several steps to ensure a healthy start for both mother and baby. It\'s important to maintain a healthy diet, exercise regularly, and achieve a healthy weight. Taking prenatal vitamins, particularly folic acid, can reduce the risk of birth defects. Managing chronic conditions, avoiding harmful substances, and having a preconception checkup with a healthcare provider are also crucial steps.',
    },
    {
        image: gestationaldiabetes,
        alt: 'Gestational diabetes',
        title: 'Gestational diabetes',
        content: 'Gestational diabetes occurs when a woman without diabetes develops high blood sugar levels during pregnancy. It\'s important to manage gestational diabetes through diet, exercise, and, if necessary, medication to ensure a healthy pregnancy. Uncontrolled gestational diabetes can lead to complications such as high birth weight, preterm birth, and increased risk of developing type 2 diabetes later in life.',
    },
    {
        image: medicaltreatmentpcos,
        alt: 'Medical treatment for infertility',
        title: 'Medical treatment for infertility',
        content: 'Medical treatments for infertility in women with PCOS may include medications like clomiphene citrate or letrozole to induce ovulation, as well as insulin-sensitizing drugs such as metformin. In some cases, gonadotropins may be used to stimulate the ovaries. Assisted reproductive technologies like in vitro fertilization (IVF) can also be considered for those who do not respond to medication alone.',
    },
    {
        image: surgicaloptionsfertilty,
        alt: 'Surgical options for fertility treatment',
        title: 'Surgical options for fertility treatment',
        content: 'Surgical options for treating infertility in women with PCOS may include ovarian drilling, a procedure where small holes are made in the ovaries to restore regular ovulation. This is typically considered when other treatments have not been successful. Other surgical options may include laparoscopic surgery to remove ovarian cysts or adhesions that may be affecting fertility.',
    },
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


const Fertilitypage = () => {
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
            <div className='flex gap-x-8 mt-20'>
                <Image src={fertilitymain} alt='CausesLogo' width={656} height={327}></Image>
                <div className='font-bold flex justify-center items-center text-center text-4xl font-sans'>
                    Fertility Treatments and Advice
                </div>
            </div>
            <h1 className='flex text-center items-center justify-center text-lg mt-8 mb-4 font-semibold'>
                Information on PCOS and fertility, preparing for pregnancy, gestational diabetes, and more
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

export default Fertilitypage;
