"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import managementtreatment from '../../public/assests/managementtreatment.svg';
import pcosgeneral from '../../public/assests/pcosgeneral.svg';
import insuline from '../../public/assests/insuline.svg';
import decisonmaking from '../../public/assests/shareddecisonmaking.svg';
import medicines from '../../public/assests/medicines.svg';
import lifestylescreeing from '../../public/assests/lifestylemaagement.svg';
import alternativemedicines from '../../public/assests/alternative.svg';
import weightpcos from '../../public/assests/weightpcos.svg';
import endometrialcancer from '../../public/assests/endometrialcancer.svg';
import glucosetest from '../../public/assests/pcosglucosetesting.svg';
import screening from '../../public/assests/healthscreeing.svg';
import sleep from '../../public/assests/pcossleep.svg';
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
        image: pcosgeneral,
        alt: 'Managing PCOS in general',
        title: 'Managing PCOS in general',
        content: 'Managing PCOS generally involves lifestyle changes, such as maintaining a healthy diet, exercising regularly, and managing stress. It can also include medical treatments like hormonal therapies to regulate menstrual cycles and medications to manage symptoms like insulin resistance and hirsutism.',
    },
    {
        image: insuline,
        alt: 'Insulin resistance',
        title: 'Insulin resistance',
        content: 'Insulin resistance is a common feature of PCOS and involves the body\'s reduced ability to respond to insulin. This can lead to higher levels of insulin in the blood, which can contribute to weight gain and other metabolic issues. Managing insulin resistance may involve dietary changes, exercise, and medications such as metformin.',
    },
    {
        image: decisonmaking,
        alt: 'Why shared decision-making is important',
        title: 'Why shared decision-making is important',
        content: 'Shared decision-making between a patient and healthcare provider is crucial in managing PCOS. This collaborative process ensures that treatment decisions align with the patient\'s preferences, values, and lifestyle, leading to better adherence and outcomes. It involves discussing the risks, benefits, and alternatives of various treatment options.',
    },
    {
        image: medicines,
        alt: 'Common medications used in PCOS',
        title: 'Common medications used in PCOS',
        content: 'Common medications for PCOS include hormonal contraceptives to regulate menstrual cycles, anti-androgens to reduce excessive hair growth, and medications like metformin to manage insulin resistance. Fertility treatments such as clomiphene citrate and letrozole are also used to induce ovulation.',
    },
    {
        image: lifestylescreeing,
        alt: 'Lifestyle management',
        title: 'Lifestyle management',
        content: 'Lifestyle management is a cornerstone of PCOS treatment and includes dietary changes to support weight management and improve insulin sensitivity, regular physical activity, and stress management techniques. These changes can help reduce symptoms and improve overall health.',
    },
    {
        image: alternativemedicines,
        alt: 'Complementary and alternative treatments',
        title: 'Complementary and alternative treatments',
        content: 'Complementary and alternative treatments for PCOS may include acupuncture, herbal supplements, and nutritional interventions. While some women find these approaches helpful, it\'s important to discuss them with a healthcare provider to ensure they are safe and appropriate for individual health needs.',
    },
    {
        image: weightpcos,
        alt: 'PCOS and weight',
        title: 'PCOS and weight',
        content: 'Weight management is often more challenging for women with PCOS due to insulin resistance and hormonal imbalances. Strategies for managing weight include a balanced diet, regular physical activity, and, in some cases, medications or bariatric surgery. Maintaining a healthy weight can help reduce PCOS symptoms and improve overall health.',
    },
    {
        image: endometrialcancer,
        alt: 'Endometrial cancer risk in women with PCOS',
        title: 'Endometrial cancer risk in women with PCOS',
        content: 'Women with PCOS have a higher risk of developing endometrial cancer due to prolonged periods of unopposed estrogen exposure. Regular monitoring, maintaining a healthy weight, and using hormonal treatments to regulate menstrual cycles can help mitigate this risk.',
    },
    {
        image: glucosetest,
        alt: 'PCOS and glucose (blood sugar) testing',
        title: 'PCOS and glucose (blood sugar) testing',
        content: 'Regular glucose testing is important for women with PCOS, as they are at an increased risk of developing type 2 diabetes. Monitoring blood sugar levels can help manage insulin resistance and prevent long-term complications. Testing may include fasting glucose tests, HbA1c tests, and glucose tolerance tests.',
    },
    {
        image: screening,
        alt: 'PCOS health screening',
        title: 'PCOS health screening',
        content: 'Health screening for women with PCOS includes regular monitoring of blood pressure, cholesterol levels, and glucose levels. These screenings help identify and manage cardiovascular risk factors and metabolic complications associated with PCOS.',
    },
    {
        image: sleep,
        alt: 'PCOS and sleep',
        title: 'PCOS and sleep',
        content: 'Sleep disorders, such as sleep apnea, are common in women with PCOS. Poor sleep can exacerbate symptoms of PCOS and contribute to weight gain and insulin resistance. Improving sleep hygiene, addressing sleep disorders, and ensuring adequate rest are important aspects of managing PCOS.',
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


const ManagementandTreatment = () => {
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
                <Image src={managementtreatment} alt='CausesLogo' width={656} height={327}></Image>
                <div className='font-bold flex justify-center items-center text-center text-4xl font-sans'>
                    Management and Treatment
                </div>
            </div>
            <h1 className='flex text-center items-center justify-center text-lg mt-8 mb-4 font-semibold'>
                You will find information on the most effective management and treatment options for women and girls with PCOS.
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

export default ManagementandTreatment;
