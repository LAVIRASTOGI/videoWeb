'use client'
import { useParams } from "next/navigation";

const MeetingRoom = () => {
    const { id } = useParams();
    return (<div>Meeting Room Number {id}</div>);
}

export default MeetingRoom;

