import { BuyBookButtonStory, NavbarHamburgerStory } from '@/components/components'
import React from 'react'

export default function () {
    return (
        <div>
            <h1>Dev Page</h1>

            <BuyBookButtonStory />
            <div className='p-10 bg-slate-300'>
                <NavbarHamburgerStory />
            </div>
        </div>
    )
}