export const sidebarLinks = [
  {
    imgURL: "/icons/Home.svg",
    route: "/",
    label: "Home",
  },

  {
    imgURL: "/icons/upcoming.svg",
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    imgURL: "/icons/previous.svg",
    route: "/previous",
    label: "Previous",
  },
  {
    imgURL: "/icons/Video.svg",
    route: "/recordings",
    label: "Recordings",
  },
  {
    imgURL: "/icons/add-personal.svg",
    route: "/personal-room",
    label: "Personal Room",
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];

export const meetingTemplate = [
  {
    id: 1,
    icon: "/icons/add-meeting.svg",
    title: "New Meeting",
    descrption: "Setup a new recording",
    color: "bg-orange-1",
    meeting: "isInstantMeeting",
  },
  {
    id: 2,
    icon: "/icons/join-meeting.svg",
    title: "Join Meeting",
    descrption: "via invitation link",
    color: "bg-blue-1",
    meeting: "isJoiningMeeting",
  },
  {
    id: 3,
    icon: "/icons/schedule.svg",
    title: "Schedule Meeting",
    descrption: "Plan your meeting",
    color: "bg-purple-1",
    meeting: "isSchedulingMeeting",
  },
];
