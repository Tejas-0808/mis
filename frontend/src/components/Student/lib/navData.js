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
        "path": "/",
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
                        "path": "/finalcoursesoffered"
                    },
                ]
            },
            {
                "title": "Time Table",
                "path": "/academic/time-table"
            },
            {
                "title": "Attendance",
                "path": "/academic/attendance"
            },
            {
                "title": "Academic Calendar",
                "path": "/academic/calender",
            },
        ]
    },
    {
        "title": "Fees Payment",
        "icon": <MdOutlinePayment className="icons" />,
        "childrens": [
            {
                "title": "Fees Payment",
                "path": "/settings/fees/academic-payment"
            },
            {
                "title": "Exam Fees",
                "path": "/settings/fees/exam"
            },
            {
                "title": "Re Exam Fees",
                "path": "/settings/fees/re-exam"
            },
            {
                "title": "Payment Reciepts",
                "path": "/settings/fees/reciepts"
            }
        ]
    },
    {
        "title": "Examination",
        "icon": <TbBooks className="icons" />,
        "childrens": [
            {
                "title": "Exam Registration",
                "path": "/exam-registration"
            },
            {
                "title": "Start Exam",
                "path": "/start-exam"
            },
            {
                "title": "Re- Exam Registration",
                "path": "/re-exam-registration"
            },
            {
                "title": "Grade Cards",
                "path": "/grade-cards"
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
                        "path": "/settings/notifications"
                    },
                    {
                        "title": "Forgot Password",
                        "path": "/forgot-password",
                    },
                    {
                        "title": "Reset Password",
                        "path": "/reset-password",
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