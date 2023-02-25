import { useState } from "react"
import '../../styles/sidebar.css';
import { BsChevronCompactDown } from 'react-icons/bs';

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {item.icon}
                        <span className="subtitle">{item.title}</span>
                    </span>
                    <BsChevronCompactDown onClick={() => setOpen(!open)} size={20} className="toggle-btn" />
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.icon}
                {item.title}
            </a>
        )
    }
}