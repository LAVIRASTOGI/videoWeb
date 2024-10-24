'use client'
import { meetingTemplate } from '@/constant'
import React, { useState } from 'react'
import HeroCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';

function MeetingTemplate() {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<string>('');

    const meetingcolor = (id: number) => {
        const arr = ['bg-orange-1', 'bg-blue-1', 'bg-purple-1'];
        return arr[id - 1];
    }
    const createMeeting = () => {

    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    meetingTemplate.map((item, index) => {
                        return (<HeroCard key={index} title={item.title}
                            description={item.descrption}
                            icon={item.icon}
                            id={item.id}
                            backgroundColor={meetingcolor(Number(item.id))}
                            handleClick={() => setMeetingState(item.meeting)}
                        />)

                    })
                }
                <HeroCard
                    icon="/icons/recordings.svg"
                    title="View Recordings"
                    description="Meeting Recordings"
                    backgroundColor="bg-yellow-1"
                    handleClick={() => router.push('/recordings')}
                    id={4}
                />
            </div>
            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState('')}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </>


    )
}

export default MeetingTemplate