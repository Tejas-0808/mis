import { FaHome, FaUniversity } from 'react-icons/fa';
import { AiFillProfile } from "react-icons/ai";
import { BsQuestionSquareFill } from 'react-icons/bs';
import { GiGuards, GiLockedDoor } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";
import { MdAccountCircle, MdEmail, MdOutlineFeedback, MdReport, MdOutlinePayment } from 'react-icons/md';
import { TbBooks } from "react-icons/tb";
import '../../../styles/sidebar.css';

export const navData = [
    {
        "title": "Home",
        "icon": <FaHome className="icons" />,
        "path": "/login",
    },
    {
        "title": "Academics",
        "icon": <TbBooks className="icons" />,
        "childrens": [
            {
                "title": "Branch",
                "path": "/branch"
            },
            {
                "title": "BOS",
                "path": "/bos"
            },
            {
                "title": "Scheme",
                "path": "/scheme"
            },
            {
                "title": "Master Scheme",
                "path": "/masterscheme"
            },
            {
                "title": "Session",
                "path": "/session"
            },
            {
                "title": "Structure",
                "path": "/structure"
            },
        ]
    },
    {
        "title": "Create New User",
        "icon": <MdAccountCircle className="icons" />,
        "childrens": [

            {
                "title": "Staff",
                "path": "/createstafflogin"
            },
            {
                "title": "Student",
                "path": "/createstudlogin"
            },
            {
                "title": "User",
                "path": "/createuserlogin"
            },
            {
                "title": "Other",
                "path": "/createotherlogin"
            },
        ]
    },
]