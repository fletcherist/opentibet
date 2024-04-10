import { Footer, Navbar, PreparingForTrip } from '@/components/components'
import React from 'react'

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