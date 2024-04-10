import { Footer, Navbar, PreparingForTrip } from '@/components/components'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Open Tibet — Подготовка к поездке',
    description: 'Как подготовиться к путешествию в Тибет',
    openGraph: {
        description: 'Как подготовиться к путешествию в Тибет',
    }
}

export default function () {
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