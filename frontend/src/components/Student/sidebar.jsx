import { useState } from "react";
import SidebarItem from "../Sidebar/SidebarItem.jsx";
import { navData } from './lib/navData.js';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import '../../styles/sidebar.css';

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    return (

        <div className={open ? "sidebar" : "sidebarClosed"}>
            <button className="menuBtn" onClick={toggleOpen}>
                {open ? <AiOutlineDoubleLeft size={20} /> : <AiOutlineDoubleRight size={20} />}
            </button>
            <h2 className="info">DashBoard</h2>
            {navData.map((item, index) => <SidebarItem key={index} item={item} />)}
        </div>
    )
}