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
                "title": "Academic Reports",
                "childrens": [
                    {
                        "title": "Identity Card Gen",
                        "path": "/identitycard"
                    },
                ]
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
        "title": "Masters",
        "icon": <MdAccountCircle className="icons" />,
        "childrens": [
            {
                "title": "Caste",
                "path": "/caste"
            },
            {
                "title": "Category",
                "path": "/category"
            },
            {
                "title": "City",
                "path": "/city"
            },
            {
                "title": "District",
                "path": "/district"
            },
            // {
            //     "title": "Nationality",
            //     "path": "/nationality"
            // },
            {
                "title": "Religion",
                "path": "/religion"
            },
            {
                "title": "State",
                "path": "/state"
            },
            {
                "title": "Payment Type",
                "path": "/payment"
            },
        ]

    },
    {
        "title": "Student Section Transaction",
        "icon": <MdOutlinePayment className="icons" />,
        "childrens": [
            {
                "title": "Roll No generation",
                "path": "/rollnogeneration"
            },
        ]
    },
    {
        "title": "Utility",
        "icon": <TbBooks className="icons" />,
        "childrens": [
            {
                "title": "Branch Change",
                "path": "/branchchange"
            },
            {
                "title": "Roll List",
                "path": "/rollist"
            },
        ]
    },
]