import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Add_EducationDetails from "./Add_EducationaDetails";
import Add_per_d from "./AddPersonalDetails";
import Add_C_d from "./Add_contact_details";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    },
    listItem: {
        backgroundColor: "white",
        padding: theme.spacing(2),
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        marginRight: theme.spacing(1),
        "&:hover": {
            backgroundColor: "#f5f5f5",
        },
    },
    selected: {
        backgroundColor: "#2196f3",
        color: "white",
        "&:hover": {
            backgroundColor: "#2196f3",
        },
    },
}));

const SecondaryNavbar = () => {
    const classes = useStyles();
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
        <div className={classes.root}>
            <List style={{ display: "flex", flexDirection: "row" }}>
                {pages.map((page, index) => (
                    <ListItem
                        key={page.name}
                        className={`${classes.listItem} ${currentPage === page.component && classes.selected
                            }`}
                        onClick={() => setCurrentPage(page.component)}
                        style={{
                            marginRight: index !== pages.length - 1 ? "8px" : 0,
                        }}
                    >
                        {page.name}
                    </ListItem>
                ))}
            </List>
            {currentPage}
        </div>
    );
};

export default SecondaryNavbar;
