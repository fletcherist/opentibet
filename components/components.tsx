"use client";

import Image from 'next/image'

import { useState, useEffect } from 'react';
import { useRef } from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const BackgroundSlider = () => {
  const images = [
    // 'https://storage.googleapis.com/opentibet/chiu.jpg',
    // 'https://storage.googleapis.com/opentibet/raduga.jpg',
    // 'https://storage.googleapis.com/opentibet/topor.jpg',
    'https://storage.googleapis.com/opentibet/background-6.jpg', // padmasambhava

    'https://storage.googleapis.com/opentibet/background-2.jpg', // drak yerpa ok
    // 'https://storage.googleapis.com/opentibet/background-3.jpg',
    'https://storage.googleapis.com/opentibet/background-4.jpg',
    'https://storage.googleapis.com/opentibet/background-5.jpg', // monah ok
    // 'https://storage.googleapis.com/opentibet/background-8.jpg',
    'https://storage.googleapis.com/opentibet/background-1.jpg', // devochka ok

    // одну с маносраваром
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const currentImageUrl = images[currentImageIndex];
  // style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}

  // for cache
  const renderImagesList = () => {
    return images.map((url, index) => {
      return <img src={url} key={index} style={{ display: 'none' }} />
    })
  }
  return (
    <>
      <div
        className='w-full h-full absolute'
        style={{
          backgroundImage: `url(${currentImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      />
      {renderImagesList()}
    </>

  );
}


export const Arrow = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex justify-center items-center h-16 w-full">
      <div className="text-gray-300 hover:text-gray-600 cursor-pointer" onClick={scrollToNextSection}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

export const PhotoGallery = () => {
  const photo1src = 'https://storage.googleapis.com/opentibet/chiu.jpg'
  const photo2src = 'https://storage.googleapis.com/opentibet/raduga.jpg'
  const photo3src = 'https://storage.googleapis.com/opentibet/topor.jpg'
  const photo4src = 'https://storage.googleapis.com/opentibet/background-7.jpg' // replace with actual photos
  const photo5src = 'https://storage.googleapis.com/opentibet/background-8.jpg'
  const photo6src = 'https://storage.googleapis.com/opentibet/background-1.jpg'

  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 gap-1">
        <PhotoView src={photo1src}>
          {/* <Image src={photo1src} alt="" width={375} height={250} quality={75} className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" /> */}
          <img src={photo1src} alt="" className="col-start-1 col-end-3 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo2src}>
          <img src={photo2src} alt="" className="col-start-1 col-end-2 row-start-2 row-end-4 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo3src}>
          <img src={photo3src} alt="" className="col-start-2 col-end-3 row-start-2 row-end-3 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo4src}>
          <img src={photo4src} alt="" className="col-start-1 col-end-2 row-start-3 row-end-4 rounded-sm cursor-pointer" />
        </PhotoView>
        <PhotoView src={photo5src}>
          <img src={photo5src} alt="" className="col-start-2 col-end-3 row-start-3 row-end-4 rounded-sm cursor-pointer" />
        </PhotoView>
      </div>
      {/* <PhotoView src={photo5src}>
        <img src={photo5src} alt="" />
      </PhotoView>
      <PhotoView src={photo6src}>
        <img src={photo6src} alt="" />
      </PhotoView> */}
    </PhotoProvider>
  )
}



const Accordion: React.FC<{ title: string, content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-base font-medium text-left text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="ml-6">
          {isOpen ? (
            <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-6 pt-0 text-gray-700 leading-7">{content}</div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <>
      <Accordion
        title="Какие документы и визы мне понадобятся для поездки в Тибет?"
        content="Для посещения Тибета необходимо получить специальное разрешение от китайских властей, известное как 'Тибетский пермит'. Этот пермит можно оформить через нашу компанию. Также вам потребуется китайская виза. Мы предоставим подробную информацию и помощь в получении всех необходимых документов."
      />
      <Accordion
        title="Какие медицинские меры безопасности следует предпринять перед поездкой в высокогорные районы Тибета?"
        content="Высокогорные районы Тибета могут вызвать высотную болезнь. Рекомендуется проконсультироваться с врачом перед поездкой. Мы также предоставляем медицинские советы и обеспечиваем медицинскую поддержку во время поездки."
      />
      <Accordion
        title="Какие виды путешествий и маршрутов вы предлагаете?"
        content="Мы предлагаем разнообразные маршруты, включая паломнические поездки, горные походы, культурные туры и многое другое. Мы также создаем индивидуальные маршруты, чтобы удовлетворить потребности каждого клиента."
      />
      <Accordion
        title="Какие условия проживания и питания во время поездки?"
        content="В зависимости от выбранного маршрута, размещение может варьироваться от комфортных гостиниц до традиционных монастырей. Мы предоставляем вкусное питание, включая местные блюда. Все детали проживания и питания будут ясно оговорены в выбранном путешествии."
      />
      <Accordion
        title="Какое лучшее время года для посещения Тибета?"
        content="Лучшее время для посещения Тибета - с мая по сентябрь, когда погода наиболее благоприятна. Однако, в зависимости от выбранного маршрута, есть возможность посещения Тибета в течение всего года. Мы поможем вам выбрать наилучшее время для вашей поездки."
      />
    </>
  );
};


