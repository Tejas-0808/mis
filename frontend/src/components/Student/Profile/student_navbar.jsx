import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Add_EducationDetails from "./Add_EducationaDetails";
import Add_per_d from "./AddPersonalDetails";
import Add_C_d from "./Add_contact_details";
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
        overflowX: 'scroll',
        width: "90vw"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(15),
        borderBottom: "1px solid transparent",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function StuNavbar() {
    const [currentPage, setCurrentPage] = useState(<Add_per_d />);

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const pages = [
        { name: "Add Personal Details", component: <Add_per_d /> },
        { name: "Add Contact Details", component: <Add_C_d /> },
        { name: "Add educational details", component: <Add_EducationDetails /> },
        { name: "Add Achievements", component: <Add_per_d /> },
        { name: "Add Documents", component: <Add_C_d /> },
        { name: "Add internship details", component: <Add_C_d /> },
    ];
    return (
        <AppBar position="static" className={classes.AppBar}>
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        {pages.map((page) => (
                            <Link class="li" key={page.name} className={classes.link} onClick={() => setCurrentPage(page.component)}>
                                {page.name}
                            </Link>
                        ))}
                        {currentPage}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default StuNavbar;