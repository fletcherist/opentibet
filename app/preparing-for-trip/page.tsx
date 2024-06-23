"use client";

import { Footer, Navbar, PreparingForTrip, WithLanguageProvider } from '@/components/components'
import React from 'react'

import { useTranslateFn } from '@/lib/language';

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
            className="flex min-h-screen flex-col items-center justify-between"
        >
            <Navbar />

            <div className="pt-32" />
            <PreparingForTrip />

            <Footer />
        </main>
    )
}

