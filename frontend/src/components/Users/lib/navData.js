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
                        "path": "/batchallotment"
                    },
                    {
                        "title": "Course Allotment",
                        "path": "/courseallotment"
                    },
                    {
                        "title": "Edit Course",
                        "path": "/editcourse"
                    },
                    {
                        "title": "Faculty Advisor",
                        "path": "/facultyadvisor"
                    },
                    {
                        "title": "Faculty Advisor Confirmation",
                        "path": "/facultyconfirm"
                    },
                    {
                        "title": "Offered Courses",
                        "path": "/offeredcourses"
                    },
                    {
                        "title": "Promotion",
                        "path": "/promotion"
                    },
                    {
                        "title": "Scheme Allotment",
                        "path": "/schemeallotment"
                    },
                ]
                
            

            },
            {
                "title": "Course Confirmation",
                "path": "/courseconfirm"

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