
import MeetingTemplate from '@/components/meetingtemplate';
import React from 'react'

function Home() {
    const now = new Date();

    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

    return (
        <div className='size-full flex flex-col gap-10 bg-dark-2 pt-[120px] p-10'>
            {/* hero */}
            <div className='w-full md:h-[60vh]  h-[50vh] bg-cover bg-hero rounded-2xl'>
                <div className='flex justify-center md:justify-end h-full md:h-auto'>
                    <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 gap-6">
                        <h1 className="glassmorphism max-w-[273px] rounded p-2 text-center text-base font-normal mx-auto">
                            Upcoming Meeting at: 12:30 PM
                        </h1>
                        <div className="flex flex-col gap-4 backdrop-blur-lg items-center p-4">
                            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
                            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
                        </div>
                    </div></div>

            </div>
            <MeetingTemplate />
        </div>
    )
}

export default Home