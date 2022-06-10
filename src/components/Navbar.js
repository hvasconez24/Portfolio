import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from "@material-ui/core";
import React, { useState } from "react";
import {Link} from "react-scroll";
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import star from '../images/star.png'

const links = [
    {
        id:"about",
        text: "About me",
        icon: <InfoIcon fontSize="large"/>
    },
    {
        id:"portfolio",
        text: "Portfolio",
        icon: <FolderIcon fontSize="large"/>
    },
    {
        id:"contact",
        text: "Contact",
        icon: <ContactMailIcon fontSize="large"/>
    },
    {
        id:"resume",
        text: "Resume",
        icon: <ArticleIcon fontSize="large"/>
    }
]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={star} className={classes.logo} alt="HILARY"/>
                <h3 className={classes.logo} >HILARY</h3>
                <List className={classes.menu}>
                    {
                        links.map(({id,text}, index) => (
                            <Link key={index} 
                                to={id} 
                                activeClass="active" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                offset={-70}>
                            {text}</Link>
                        ))
                    }
                </List>
                <IconButton edge="end" 
                className={classes.menubtn}
                onClick={()=> setOpen(!open)}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
            <IconButton onClick={()=>setOpen(false)} className={classes.cancelIcon}>
                <CancelIcon fontSize="large"/>
            </IconButton>
            <Divider/>
            {
                links.map(({id,text,icon}, index) => (
                    <Link key={index} 
                        className={classes.sidebar}
                        to={id} 
                        activeClass="active" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70}>
                        <ListItem component="h5">
                            <span>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                            </span>{text}
                        </ListItem>
                    </Link>
                ))
            }
        </Drawer>
        </>
    )
}
const useStyles = makeStyles((theme) => ({
    root:{
        background: "#fff",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo: {
        height: "1.5rem",
        color: "#d55499",
        objectFit: "contain",
        "&:hover":{
            cursor: "pointer"
        }
    },
    menu:{
        color: "#333",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#d55499",
            borderBottom: "3px solid #d55499"
        }
    },
    menubtn: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block",
            color: "#d55499",
            position: "absolute",
            top: 0,
            right: 10
        }
    },
    sidebar:{
        width:"40Vw",
        [theme.breakpoints.down("sm")]:{
            width: "60Vw"
        },
        "& h5":{
            margin: theme.spacing(8,0,0,2),
            fontSize: "1.2rem",
            color: "#333",
            fontWeight: "bold"
        },
        "& h5:hover":{
            color: "#d55499",
            cursor: "pointer"
        }
    },
    cancelIcon:{
        position: "absolute",
        color: "#d55499",
        top: 0,
        right: 10
    }

  }))

export default Navbar