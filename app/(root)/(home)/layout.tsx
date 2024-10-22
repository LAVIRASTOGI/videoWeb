import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import React, { ReactNode } from 'react'
function HomeLayout({ children }: { children: ReactNode }) {
    return <main className='relative'>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 flex-col'>{children}</div>
        </div>
    </main>;
}

export default HomeLayout;
