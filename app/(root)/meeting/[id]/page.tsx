const MeetingRoom = ({ params }: { params: { id: string } }) => {
    return (<div className="text-white">Meeting Room Number {params.id}</div>);
}

export default MeetingRoom;

