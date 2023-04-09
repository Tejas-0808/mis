import { FiSettings, FiInfo } from 'react-icons/fi';
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
        "title": "Configuration",
        "icon": <FaUniversity className="icons" />,
        "childrens": [
            {
                "title": "Create Notice",
                "icon": <GiGuards className="icons" />,
                
            },
        ]
    },
    {
        "title": "Academic",
        "icon": <MdAccountCircle className="icons" />,
        "childrens": [
            {
                "title": "Masters",
                "childrens": [
                    {
                        "title": "Payment Type",
                       
                    },
                    {
                        "title": "Caste",
                        "path": "caste"
                    },
                    {
                        "title": "Category",
                        "path": "category"
                    },
                    {
                        "title": "Religion",
                        "path": "religion"
                    },
                    {
                        "title": "Nationality",
                        
                    },
                    {
                        "title": "City",
                        "path": "city"
                    },
                    {
                        "title": "District",
                        "path": "district"
                    },
                    {
                        "title": "State",
                        "path": "state"
                    },
                ]
            },
            {
                "title": "Student Section-Transaction",
                "childrens": [
                    {
                        "title": "Roll Number Generation",
                       
                    }, 
                ]
            },
            {
                "title": "Fees Collection",
            },
            {
                "title": "Admission",
                "childrens": [
                    {
                        "title": "New Student",
                        "path": "newstudent"
                    },
                    {
                        "title": "Student Information",
                       
                    },
                    {
                        "title": "Student Detail Search",
                       
                    },
                    {
                        "title": "Admission Cancel",
                        
                    },
                    {
                        "title": "Student Information lock",
                        
                    },
                    {
                        "title": "Student Admission Form",
                       
                    },
        
                ]
            },
            {
                "title": "Academic Reports",
            
                "childrens": [
                    {
                        "title": "Course Registration Report",
                        
                    },
                    {
                        "title": "Admission Regsistration ",
                        
                    },
                    {
                        "title": "Identity Card",
                       
                    },
                    {
                        "title": "Certificate",
                        
                    },
                    {
                        "title": "Student Roll List",
                        
                    },
        
                ]
            },
            {
                "title": "Fees Defination",
              
            },
            {
                "title": "Utility",
              
                "childrens": [
                    {
                        "title": "Bulk Update Of Photo",
                        
                    },
                    {
                        "title": "Branch Change ",
                        "path": "branchchange"
                    },
                ]
            },

        ]
    },
  
    {
        "title": "Profile",
        "icon": <AiFillProfile className="icons" />,
        "childrens": [
            {
                "title": "Fill Profile",
               // "path": "/fill_profile"
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