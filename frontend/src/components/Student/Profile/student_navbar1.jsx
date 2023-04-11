import React, { useState } from "react";
import Add_EducationDetails from "./Add_EducationaDetails";
import Add_per_d from "./AddPersonalDetails";
import Add_C_d from "./Add_contact_details";

import "../../../styles/temp.css";

const SecondaryNavbar = () => {
    const [currentPage, setCurrentPage] = useState(<Add_per_d />);
    const pages = [
        { name: "Add Personal Details", component: <Add_per_d /> },
        { name: "Add Contact Details", component: <Add_C_d /> },
        { name: "Add educational details", component: <Add_EducationDetails /> },
        { name: "Add Achievements", component: <Add_per_d /> },
        { name: "Add Documents", component: <Add_C_d /> },
        { name: "Add internship details", component: <Add_C_d /> },
    ];

    return (
        <div>
            <ul class="ul">
                {pages.map((page) => (
                    <li class="li" key={page.name} onClick={() => setCurrentPage(page.component)}>
                        {page.name}
                    </li>
                ))}
            </ul>
            {currentPage}
        </div>
    );
};

export default SecondaryNavbar;
