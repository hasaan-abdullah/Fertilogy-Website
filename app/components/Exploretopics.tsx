import React from 'react'
import causes from '../../public/assests/casues.svg'
import causesicon from '../../public/assests/causesicon.svg'
import periods from '../../public/assests/periods.svg'
import periodsicon from '../../public/assests/periodsicon.svg'
import fertilityissue from '../../public/assests/fertilityissue.svg'
import fertilityissueicon from '../../public/assests/fertilityissueicon.svg'
import managementandtreatment from '../../public/assests/managementandtreatment.svg'
import managementandtreatmenticon from '../../public/assests/managementandtreatmenticon.svg'
import weightmanagement from '../../public/assests/weightmanagement.svg'
import weightmanagementicon from '../../public/assests/weightmanagementicon.svg'
import hairandskin from '../../public/assests/hairandskin.svg'
import hairandskinicon from '../../public/assests/hairandskinicon.svg'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface Topic {
  href: string;
  imageSrc: StaticImageData;
  iconSrc: StaticImageData;
  text: string;
}

const Exploretopics: React.FC = () => {
  const topics: Topic[] = [
    {
      href: '/causes',
      imageSrc: causes,
      iconSrc: causesicon,
      text: 'Causes, Symptoms, and Diagnosis'
    },
    {
      href: '/periods',
      imageSrc: periods,
      iconSrc: periodsicon,
      text: 'Periods'
    },
    {
      href: '/fertilityissues',
      imageSrc: fertilityissue,
      iconSrc: fertilityissueicon,
      text: 'Fertility Issues'
    },
    {
      href: '/managementandtreatment',
      imageSrc: managementandtreatment,
      iconSrc: managementandtreatmenticon,
      text: 'Management and Treatment'
    },
    {
      href: '/weightmanagement',
      imageSrc: weightmanagement,
      iconSrc: weightmanagementicon,
      text: 'Weight Management'
    },
    {
      href: '/hairandskin',
      imageSrc: hairandskin,
      iconSrc: hairandskinicon,
      text: 'Hair and Skin'
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 mx-24'>
      {topics.map((topic, index) => (
        <Link href={topic.href} key={index} className='w-full group'>
          <div className='relative h-72 w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <Image src={topic.imageSrc} alt={topic.text} layout='fill' objectFit='cover' className='rounded-t-lg' />
            <div className='absolute bottom-0 w-full bg-gray-200 bg-opacity-100 flex items-center justify-center h-16 text-black rounded-b-lg p-2'>
              <Image src={topic.iconSrc} alt={`${topic.text} Icon`} className='mr-2' width={24} height={24} />
              <div className='font-bold text-center transition-all duration-300 group-hover:font-extrabold group-hover:text-lg'>
                {topic.text}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Exploretopics;
