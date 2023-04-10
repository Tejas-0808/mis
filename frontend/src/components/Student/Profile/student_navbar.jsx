import React from "react";
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
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(2),
        display: "flex",
        overflowX: 'scroll',
        width: "fit - content"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        borderBottom: "1px solid transparent",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function StuNavbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" className={classes.AppBar}>
            <CssBaseline />
            <Toolbar>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/fill_profile" className={classes.link}>
                            Profile
                        </Link>
                        <Link to="/addPersonalDetails" className={classes.link}>
                            Personal details
                        </Link>
                        <Link to="/Add_Educationdetails" className={classes.link}>
                            Educational details
                        </Link>
                        <Link to="/Add_contact_details" className={classes.link}>
                            Contact details
                        </Link>
                        <Link to="/faq" className={classes.link}>
                            Achievements
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default StuNavbar;