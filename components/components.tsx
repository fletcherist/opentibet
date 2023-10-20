"use client";

import { useState, useEffect } from 'react';
import { useRef } from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const BackgroundSlider = () => {
    const images = [
        'https://downloader.disk.yandex.ru/preview/7c934c34aeb3afccf224c723f98841ce270e22cb26e7c0a8d9f002c3e5b8a3dd/65293fe3/L1sEtzb6m2fyknzu_fd_YnrYpZEqDsNpW6nAFt2plIsrgbMBIr7R9wmjRk2sv0JgkDL4dWbgZgAB2B9raCXXnQ%3D%3D?uid=0&filename=39f89fbd0aea0779c5a622aa8e221ec9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1466x1782',
        'https://downloader.disk.yandex.ru/preview/bbb8a85cc30edafaa46305325c1618b0fee3f52873addafc375eb00c255c1384/65293fe3/lUT1By65xraD20QlL1Y0r8v8eEujZ3XAkuMAzdFcMZUyIn3OhaXP5x_rjP4eHEiYX1l0KcOXPyCTEojUrp2BqQ%3D%3D?uid=0&filename=70fb311b12bb2b8ca02a8d29282e3efe.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1412x1782',
        'https://downloader.disk.yandex.ru/preview/e54dfe4667c560f3be77aea225e0e1a335a7478e963a4f5bcc2a4f6ead81e02b/65293fe3/-jhbmWASF9VLc4gj1amFbxE76QJpl7hmKElzvhj8opC6H-bgDVXvZnQZFYHkkS1hlpFkbDVOX9aRfZusDpM3Mw%3D%3D?uid=0&filename=83356f9bfc0d8934c6590beddab5c791.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1153x1227'
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
    return (
        <div
            className='w-full h-full absolute'
            style={{
                backgroundImage: `url(${currentImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
            }}
        />
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
    const photo1src = 'https://downloader.disk.yandex.ru/preview/f857fe927c0febffe1b2e93de7ace908180de53148212ea282c90b8fcea38c59/652975df/0Ko8c4YsBFhQeFhTOEYydcv8eEujZ3XAkuMAzdFcMZXuizd7VKpM5sF-vpH6hgbIiMqneV791aoYwvgz3uZtzQ%3D%3D?uid=0&filename=896a0f6fd727afaa571824a19c1411cf.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1173x1227'
    const photo2src = 'https://downloader.disk.yandex.ru/preview/c2d3686c0fecc3feec795d5db947afc80400bc222f12aef92f7cd8299c185491/652975df/149ifKMUKMXv2ey7LLEMalRPLJoJnU39K4mFFJRYQVz3zmi79OKEs40s3HUzm19QRmEAzwatiIEmvSa5SvE6TQ%3D%3D?uid=0&filename=95c33b7ea8d0cf28e1911885d922ac6d%20%281%29.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1173x1227'
    const photo3src = 'https://downloader.disk.yandex.ru/preview/ce50dd95c87967eb6dc6c8c8199db1f437ee906d393ece1dd79e7648b517f298/652975df/fGi1zeHSLbWo9SXDe8ryDahmQOWZY2KOIFcK_ZvilrvWbjk2I2GXMfLgttT4q-pjd-R0yGs63VR0Oz04awRIEw%3D%3D?uid=0&filename=97d6a6c65307d9d4ba28cc4fe995b635.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1173x1227'

    return (
        <PhotoProvider>
            <PhotoView src={photo1src}>
                <img src={photo1src} alt="" />
            </PhotoView>
            <PhotoView src={photo2src}>
                <img src={photo2src} alt="" />
            </PhotoView>
            <PhotoView src={photo3src}>
                <img src={photo3src} alt="" />
            </PhotoView>
        </PhotoProvider>
    )
}
