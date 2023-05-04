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
        "icon": <MdAccountCircle className="icons" />,
        "childrens": [
            {
                "title": "Course Registration",
                "childrens": [
                    {
                        "title": "Course Registration",
                        "path": "/coursereg"
                    },
                    {
                        "title": "Registration Reciepts",
                        "path": "/"
                    },
                ]
            },
            {
                "title": "Time Table",
                "path": "/"
            },
            {
                "title": "Attendance",
                "path": "/"
            },
            {
                "title": "Academic Calendar",
                "path": "/",
            },
        ]
    },
    {
        "title": "Fees Payment",
        "icon": <MdOutlinePayment className="icons" />,
        "childrens": [
            {
                "title": "Fees Payment",
                "path": "/"
            },
            {
                "title": "Exam Fees",
                "path": "/"
            },
            {
                "title": "Re Exam Fees",
                "path": "/"
            },
            {
                "title": "Payment Reciepts",
                "path": "/"
            }
        ]
    },
    {
        "title": "Examination",
        "icon": <TbBooks className="icons" />,
        "childrens": [
            {
                "title": "Exam Registration",
                "path": "/"
            },
            {
                "title": "Start Exam",
                "path": "/"
            },
            {
                "title": "Re- Exam Registration",
                "path": "/"
            },
            {
                "title": "Grade Cards",
                "path": "/"
            }
        ]
    },
    {
        "title": "Profile",
        "icon": <AiFillProfile className="icons" />,
        "childrens": [
            {
                "title": "Fill Profile",
                "path": "/student"
            },
            {
                "title": "Settings",
                "childrens": [
                    {
                        "title": "Notifications",
                        "path": "/"
                    },
                    {
                        "title": "Forgot Password",
                        "path": "/",
                    },
                    {
                        "title": "Reset Password",
                        "path": "/",
                    }
                ]
            },

            {
                "title": "Logout",
                "path": "/logout"
            }
        ]
    },
    {
        "title": "DigiLocker",
        "icon": <GiLockedDoor className="icons" />,
        "path": "/support"
    },
    {
        "title": "Institute Level FeedBack",
        "icon": <MdOutlineFeedback className="icons" />,
        "path": "/support"
    },
    {
        "title": "FAQ",
        "icon": <BsQuestionSquareFill className="icons" />
    },
    {
        "title": "Report Bug",
        "icon": <MdReport className="icons" />,
        "path": "/report-bug"
    }
]