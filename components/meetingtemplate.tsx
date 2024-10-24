'use client'
import { meetingTemplate } from '@/constant'

// import React, { useState } from 'react'
import HeroCard from './HomeCard'
// import { useRouter } from 'next/navigation';

function MeetingTemplate() {
    // const router = useRouter();
    // const [meetingState, setMeetingState] = useState<string>('');


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                meetingTemplate.map((item, index) => {
                    return (<HeroCard key={index} title={item.title}
                        description={item.descrption}
                        icon={item.icon}
                        id={item.id}
                        backgroundColor={item.id === 1 ? 'bg-orange-1' : item.id === 2 ? 'bg-blue-1' : 'bg-purple-1'}
                    // handleClick={() => setMeetingState(item.meeting)}
                    />)

                })
            }
            <HeroCard
                icon="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                backgroundColor="bg-yellow-1"
                // handleClick={() => router.push('/recordings')}
                id={4}
            />
        </div>
    )
}

export default MeetingTemplate