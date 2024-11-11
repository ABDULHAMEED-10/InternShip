import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import { LuArchive } from "react-icons/lu";
import { LuPackageOpen } from "react-icons/lu";
import { TfiSignal } from "react-icons/tfi";
import { IoMdTv } from "react-icons/io";
import { MdDevices } from "react-icons/md";
export const sideBarData = [
    {
        id:"1",
        title: "Dashboard",
        link: "/",
        icon: <LuLayoutDashboard />
    },
    {
        id:"2",
        title: "Services",
        link: "/services",
        icon: <MdOutlineMarkUnreadChatAlt />
    },
    {
        id:"3",
        title: "Billing",
        link: "/link",
        icon: <RiBillLine />
    },
    {
        id:"4",
        title: "Hardware",
        link: "/hardware",
        icon: <GoFileDirectory />
    },
    {
        id:"5",
        title: "Requests",
        link: "/requests",
        icon: <MdOutlineShield />
    },
    {
        id:"6",
        title: "Support",
        link: "/support",
        icon: <LuArchive />
    }
];

export const overviewData = [
    {
        id: "1",
        heading: "Current Packege",
        Description: "Internet + IPTV",
        Gradient:"linear-gradient(to bottom right, #ccffcc, #e6ffe6)",
        icon: <LuPackageOpen />,
        color:"rgba(0, 255, 116, 1)",
    },

    {
        id: "2",
        heading: "Internet Packege",
        Description: "20 Mbps",
        Gradient:"linear-gradient(to bottom right, #ccf2ff, #e6f7ff)",
        icon: <TfiSignal />,
        color:"rgba(0, 199, 255, 1)",
    },
    {
        id: "3",
        heading: "IPTV Channels",
        Description: "250",
        Gradient:"linear-gradient(to bottom right, #ffccf2, #ffe6f7)",
        icon: <IoMdTv />,
        color:"rgba(255, 0, 122, 1)",
    },
    {
        id: "4",
        heading: "Active Devices",
        Description: "7",
        Gradient:'linear-gradient(to bottom right, #FFEB3B, #FFF9C4)',
        icon: <MdDevices />,
        color:"rgba(180, 177, 0, 1)",
    },

]
export const chartData = [
    {
        label:"21 March 2003",
        labels: ['Used', 'Remaining'],
        datasets: [
            {
                data: [100, 50],
                backgroundColor: ['#36A2EB', '#B0BEC5'],
                hoverBackgroundColor: ['#36A2EB', '#B0BEC5'],
            },
        ],
    },
    {   label:"21 Feb 2023",
        labels: ['Used', 'Remaining'],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: ['#36A2EB', '#B0BEC5'],
                hoverBackgroundColor: ['#36A2EB', '#B0BEC5'],
            },
        ],
    },

];
