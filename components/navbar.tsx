import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import MobileNav from './mobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'


function Navbar() {
    return (
        <div className='fixed top-0 right-0 w-screen z-50 flex justify-between px-6 py-4 
        lg:px-10 items-center bg-dark-1 backdrop-blur-md'>
            <div className='flex gap-2 items-center'>
                <Image src={'/icons/video.jpg'} alt='TalentBridge' height={40} width={40} />
                <span className='text-lg'>TalentBridge</span>
            </div>
            <div className='flex gap-4'>
                {/* clerk */}
                <SignedIn>
                    <UserButton />
                </SignedIn>

                {/* mobile Nav */}
                <MobileNav />
            </div>
        </div>
    )
}

export default Navbar