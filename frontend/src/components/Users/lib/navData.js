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
        "title": "Academic",
        "icon": <TbBooks className="icons" />,
        "childrens": [
            {
                "title": "Student-Section Transaction",
                "childrens": [
                    {
                        "title": "Batch Allotment",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Course Allotment",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Edit Course",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Faculty Advisor",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Faculty Advisor Confirmation",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Offered Courses",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Promotion",
                        "path": "/identitycard"
                    },
                    {
                        "title": "Scheme Allotment",
                        "path": "/identitycard"
                    },
                ]
                
            

            },
            {
                "title": "Course Confirmation",
                "path": "/courseconfirmation"

            },

            {
                "title": "Admission",
                "childrens": [
                    {
                        "title": "Add New Student",
                        "path": "/newstudent"
                    },
                ]
            },
           
        ]

    },


    {
        "title": "HOD",
        "icon": <MdAccountCircle className="icons" />,
        "childrens": [
            {
                "title": "New Faculty",
                "path": "/newuser"
            },
        ]

    },
]