import { TiHome } from "react-icons/ti";
import { FaPoll } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaVoteYea } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

export const Index= [
    {name: 'Home', path: '/', Icon:<TiHome />},
    {name: 'Registration', path: '/registration', Icon:<TiUserAdd />},
    {name: 'Elections', path: '/election', Icon:<FaPoll />},
    {name: 'Admin', path: '/admin', Icon:<MdDashboard />},
    
    {name: 'Candidates', path: '/candidates', Icon:<IoIosPeople />},
    {name: 'Voting', path: '/voting', Icon:<FaVoteYea />},
    
    {name: 'Profile', path: '/profile', Icon:<CgProfile />},
    
]