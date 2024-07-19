'use client';
import React from 'react';
import Image from 'next/image';
import block from '../../public/assests/Blockdiagram.svg';
import depressed from '../../public/assests/depressed.svg';
import about1 from '../../public/assests/rizwan.svg';
import about2 from '../../public/assests/gulraeez.svg';
import about3 from '../../public/assests/aliza.svg';
import about4 from '../../public/assests/dileep.svg';
import about5 from '../../public/assests/hasaan.svg';
import tool1 from '../../public/assests/tech1.svg';
import tool2 from '../../public/assests/xailogo.svg';
import tool3 from '../../public/assests/difflogo.svg';
import tool4 from '../../public/assests/webhook.svg';
import tool5 from '../../public/assests/scikitlearn.svg';
import tool6 from '../../public/assests/nextjs.svg';
import tool7 from '../../public/assests/blue.svg';
import tool8 from '../../public/assests/googledrive.svg';
import tool9 from '../../public/assests/kubeflow.svg';
import tool10 from '../../public/assests/scikitlearn.svg';
import tool11 from '../../public/assests/digitalocean.svg';
import tool12 from '../../public/assests/n8n.svg';
import tool13 from '../../public/assests/google.svg';
import tool14 from '../../public/assests/github.svg';
import tool15 from '../../public/assests/digitalocean.svg';
import projectImage from '../../public/assests/overview.svg';
import additionalImage from '../../public/assests/llm1.svg';
import additional2 from '../../public/assests/additional2.svg';

import { Arvo } from 'next/font/google';
import { Header } from './Header';

const arvo = Arvo({ weight: '400', subsets: ['latin'] });

const Logoscreen = () => {
  return (
    <div className='w-full relative'>
      <Header />

      <div className='animated-background'>
        <div className='circle lightpink'></div>
        <div className='circle lightblue'></div>
        <div className='circle lightpink'></div>
        <div className='circle lightblue'></div>
      </div>
      <section className='flex flex-row w-full h-screen my-2 gap-x-4' id="home">
        <div className='flex flex-col ml-52 my-[8px] mt-40 items-center justify-center relative z-10'>
          <div className={`text-7xl font-bold ${arvo.className} hover:scale-110 hover:text-pink-900 transition-transform transition-colors duration-300`}>
            Predictive Analysis of
          </div>
          <div className={`text-8xl font-extrabold ${arvo.className} hover:scale-110 hover:text-pink-900 transition-transform transition-colors duration-300`}>
            PCOS
          </div>
          <div className={`text-7xl font-bold ${arvo.className} hover:scale-110 hover:text-pink-900 transition-transform transition-colors duration-300`}>
            on Ultrasound Images
          </div>
          <Image src={block} alt="Logo" className='h-[500px] w-[550px]' />
        </div>

        <div className='flex flex-1 justify-center items-center mr-20 relative z-10'>
        <Image src={depressed} alt='depressed' className='h-auto max-h-[600px]' />
        </div>

      </section>

      <section className='flex flex-col items-center justify-center py-16 bg-[#fbe8f3] mx-28' id="about">
        <h2 className={`text-5xl font-bold ${arvo.className} mb-8`}>About Us</h2>
        <p className='text-xl text-justify max-w-4xl'>
          Our team including Aliza Alwani, Dileep Kumar and Hasaan Abdullah are dedicated to advancing the field of medical imaging through cutting-edge research and innovative solutions. We specialize in predictive analysis of Polycystic Ovary Syndrome (PCOS) using ultrasound images, leveraging the latest advancements in machine learning and deep learning techniques. Our mission is to provide accurate, reliable, and efficient diagnostic tools to improve patient outcomes and healthcare processes.
        </p>
        <p className='text-xl text-justify max-w-4xl mt-4 mb-12'>
          With a team of experienced professionals and researchers including Dr. Rizwan Ahmed Khan and Sir Gulraeez Gulshan, we strive to push the boundaries of what is possible in medical diagnostics. Our commitment to excellence and passion for innovation drive us to continuously improve and expand our knowledge in this critical area of healthcare.
        </p>
        <div className='flex flex-row gap-6 justify-center'>
          <div className='flex flex-col items-center group'>
            <Image src={about1} alt='Dr. Rizwan Ahmed Khan' className='h-40 w-40 rounded-full transition-opacity duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-80' />
            <p className='mt-2 text-lg font-semibold'>Dr. Rizwan Ahmed Khan</p>
          </div>
          <div className='flex flex-col items-center group'>
            <Image src={about2} alt='Sir Gulraeez Gulshan' className='h-40 w-40 rounded-full transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-80' />
            <p className='mt-2 text-lg font-semibold'>Sir Gulraeez Gulshan</p>
          </div>
          <div className='flex flex-col items-center group'>
            <Image src={about3} alt='Aliza Alwani' className='h-40 w-40 rounded-full transition-opacity duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-80' />
            <p className='mt-2 text-lg font-semibold'>Aliza Alwani</p>
          </div>
          <div className='flex flex-col items-center group'>
            <Image src={about4} alt='Dileep Kumar' className='h-40 w-40 rounded-full transition-opacity duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-80' />
            <p className='mt-2 text-lg font-semibold'>Dileep Kumar</p>
          </div>
          <div className='flex flex-col items-center group'>
            <Image src={about5} alt='Hasaan Abdullah' className='h-40 w-40 rounded-full transition-opacity duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-80' />
            <p className='mt-2 text-lg font-semibold'>Hasaan Abdullah</p>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center py-16 mx-28' id="features">
        <h2 className={`text-5xl font-bold ${arvo.className} mb-8`}>Features</h2>
        <div className='flex flex-row gap-8'>
          <div className='flex flex-col items-center bg-[#ce3476] text-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
            <h3 className='text-2xl font-semibold mb-4'>Blogs</h3>
            <p className='text-center mb-4'>
              Access to a variety of articles and blog posts containing relevant information about PCOS, its symptoms, treatment options, and lifestyle tips.
            </p>
            <a href="/explore" className='bg-white text-[#ce3476] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#ce3476] hover:text-white'>Check This</a>
          </div>
          <div className='flex flex-col items-center bg-[#ce3476] text-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
            <h3 className='text-2xl font-semibold mb-4'>Symptom Checker</h3>
            <p className='text-center mb-4'>
              Track your own PCOS symptoms over time and receive personalized feedback and recommendations based on your inputs.
            </p>
            <a href="/symptomschecker" className='bg-white text-[#ce3476] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#ce3476] hover:text-white'>Check This</a>
          </div>
          <div className='flex flex-col items-center bg-[#ce3476] text-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
            <h3 className='text-2xl font-semibold mb-4'>Personalized Chatbot</h3>
            <p className='text-center mb-4'>
              Get your queries regarding PCOS answered instantly by our intelligent chatbot, designed to provide accurate and helpful information.
            </p>
            <a href="/fertilityai" className='bg-white text-[#ce3476] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#ce3476] hover:text-white'>Check This</a>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center py-16 bg-[#fbe8f3] mx-28' id="tools">
        <h2 className={`text-5xl font-bold ${arvo.className} mb-8`}>
          <a href="#tools">Tools and Technologies</a>
        </h2>
        <h2 className={`text-2xl font-semibold ${arvo.className} mb-8`}>
          <a href="#tools">Leveraging Advanced Tools and Technologies for Cutting-Edge Research and Innovation</a>
        </h2>
        <div className='tools-container overflow-hidden relative w-full'>
          <div className='tools-slider flex w-max animate-slide'>
            <Image src={tool1} alt='Tool 1' className='h-24 w-24' />
            <Image src={tool2} alt='Tool 2' className='h-24 w-24' />
            <Image src={tool3} alt='Tool 3' className='h-24 w-24' />
            <Image src={tool4} alt='Tool 4' className='h-24 w-24' />
            <Image src={tool6} alt='Tool 5' className='h-24 w-24' />
            <Image src={tool7} alt='Tool 6' className='h-24 w-24' />
            <Image src={tool8} alt='Tool 7' className='h-24 w-24' />
            <Image src={tool9} alt='Tool 8' className='h-24 w-24' />
            <Image src={tool10} alt='Tool 9' className='h-24 w-24' />
            <Image src={tool11} alt='Tool 10' className='h-24 w-24' />
            <Image src={tool12} alt='Tool 11' className='h-24 w-24' />
            <Image src={tool14} alt='Tool 12' className='h-24 w-24' />
            {/* Duplicate images for continuous loop effect */}
            <Image src={tool1} alt='Tool 1' className='h-24 w-24' />
            <Image src={tool2} alt='Tool 2' className='h-24 w-24' />
            <Image src={tool3} alt='Tool 3' className='h-24 w-24' />
            <Image src={tool4} alt='Tool 4' className='h-24 w-24' />
            <Image src={tool6} alt='Tool 5' className='h-24 w-24' />
            <Image src={tool7} alt='Tool 6' className='h-24 w-24' />
            <Image src={tool8} alt='Tool 7' className='h-24 w-24' />
            <Image src={tool9} alt='Tool 8' className='h-24 w-24' />
            <Image src={tool10} alt='Tool 9' className='h-24 w-24' />
            <Image src={tool11} alt='Tool 10' className='h-24 w-24' />
            <Image src={tool12} alt='Tool 11' className='h-24 w-24' />
            <Image src={tool14} alt='Tool 12' className='h-24 w-24' />
          </div>
        </div>

        <style jsx>{`
          .tools-container {
            overflow: hidden;
            width: 100%;
          }
          .tools-slider {
            display: flex;
            gap: 2rem;
            white-space: nowrap;
          }
          @keyframes slide {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-slide {
            animation: slide 20s linear infinite;
          }
        `}</style>
      </section>

      <section className='flex flex-col items-center justify-center py-16 mx-24' id="project-overview">
        <h2 className={`text-5xl font-bold ${arvo.className} mb-8`}>
          <a href="#project-overview">Project Overview</a>
        </h2>
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-3xl font-semibold mb-4 text-[#94204e]'>Understanding Our Project</h3>
          <p className='text-xl max-w-4xl mb-8'>
            Our project focuses on the predictive analysis of Polycystic Ovary Syndrome (PCOS) using advanced machine learning techniques on ultrasound images. This involves using state-of-the-art tools and technologies to create a reliable diagnostic tool that can aid in early detection and treatment planning for PCOS patients. Our goal is to improve healthcare outcomes by providing a more accurate and efficient diagnostic process.
          </p>
          <div>
            <h4 className='text-3xl font-semibold mb-2 text-[#94204e]'> Step 1: PCOS Detection System</h4>
            <p className='text-lg mb-4'>An illustration of our PCOS detection system using machine learning algorithms and deep learning architectures.</p>
            <Image src={projectImage} alt='Project Overview' />
          </div>
        </div>
        <div className='text-center my-16 mx-20'>
          <h2 className='text-3xl font-bold mb-8 text-[#94204e]'>Step 2: Large Language Model </h2>
          <div className='flex flex-row items-center'>
            <div className='flex-1 p-4'>
              <h4 className='text-2xl font-bold mb-2'>Phase One</h4>
              <p className='text-lg mb-4'>The workflow shows clicking a Test Workflow button to download a Google Drive file, inserting it into Pinecone Vector, embedding with Google PaLM, and splitting text with a Recursive Character Text Splitter.</p>
            </div>
            <div className='flex-1 p-4'>
              <Image src={additionalImage} alt='Advanced Analysis' className='rounded-lg' />
            </div>
          </div>
          <div className='flex flex-row items-center '>
            <div className='flex-1 p-4'>
              <Image src={additional2} alt='Advanced Analysis' className='rounded-lg' />
            </div>
            <div className='flex-1 p-4'>
              <h4 className='text-2xl font-bold mb-2'>Phase Two</h4>
              <p className='text-lg mb-4'>The diagram shows a workflow where a webhook triggers a Question and Answer Chain, which uses the Google PaLM Chat Model and Vector Store Retriever to read Pinecone Vector Store embeddings and respond, integrating with the Fertilogy Chatbot via API.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logoscreen;
