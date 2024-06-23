"use client";

import { Footer, Navbar, NavbarHeightCompensation, PageBreadcrumbs, PreparingForTrip, WithLanguageProvider } from '@/components/components'
import React from 'react'

import { useTranslateFn } from '@/lib/language';
import { classNameMobilePaddingX } from '@/utils/constants';

export default function Page() {
    return (
        <WithLanguageProvider>
            <PreparingForTripPage />
        </WithLanguageProvider>
    );
}

const PreparingForTripPage = () => {
    const translate = useTranslateFn();
    return (
        <main
            lang="ru"
            className="flex min-h-screen flex-col items-center"
        >
            <Navbar />
            <NavbarHeightCompensation />

            <div className={`max-w-4xl w-full ${classNameMobilePaddingX}`}>
                <PageBreadcrumbs title={translate({
                    ru: "Подготовка к поездке",
                    en: "Preparing for the trip",
                }) as string} />
                <PreparingForTrip />
            </div>

            <Footer />
        </main>
    )
}

