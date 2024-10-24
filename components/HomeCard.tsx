
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface HeroCardProps {
    title: string;
    description: string;
    icon: string;
    backgroundColor: string;
    id: string | number;
    // handleClick?: () => void;

}

const HeroCard: React.FC<HeroCardProps> = ({ title, description, icon, id, backgroundColor, handleClick }) => {
    return (
        <div key={id} className={cn('flex flex-col justify-between w-full min-h-64 p-4 rounded-2xl cursor-pointer', backgroundColor)}>
            <div className='glassmorphism p-3 w-12 rounded-xl'
            // onClick={handleClick}
            >
                <Image src={icon} alt={title} width={32} height={32} />
            </div >
            <div className='flex flex-col'>
                <h2 className='text-xl'>{title}</h2>
                <p>{description}</p>
            </div>
        </div >
    )
}

export default HeroCard;
