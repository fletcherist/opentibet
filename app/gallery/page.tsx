"use client";

import { Header, Navbar, NavbarHeightCompensation, PhotoGallery, WithLanguageProvider } from '@/components/components';
import { useTranslateFn } from '@/lib/language';
import React from 'react'

export default function Page() {
    return (
        <WithLanguageProvider>
            <PhotoGalleryPage />
        </WithLanguageProvider>
    );
}

const PhotoGalleryPage = () => {
    const translate = useTranslateFn();
    return (
        <main
            lang="ru"
            className="flex min-h-screen flex-col items-center justify-between"
        >
            <Navbar />
            <NavbarHeightCompensation />

            <div>
                <div className="max-w-4xl w-full">
                    <Header
                        title={
                            translate({
                                ru: "Фото с прошлых туров",
                                en: "Photos from past tours",
                            }) as string
                        }
                        subtitle={
                            translate({
                                ru: "Нажмите на фото, чтобы открыть галерею",
                                en: "Click on the photo to open the gallery",
                            }) as string
                        }
                    />
                </div>
                <div className="max-w-6xl pt-6">
                    <PhotoGallery />
                </div>
            </div>


            <div className="pt-10" />
        </main>
    );
}