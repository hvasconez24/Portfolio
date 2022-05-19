import { Button, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WebIcon from '@mui/icons-material/Web';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { purple } from "@material-ui/core/colors";
import FormComponent from "./form";

const Contact = ({title, id, dark}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.divContact}>
                        <Typography variant="h5">CONTACT ME</Typography><br/>
                        <Typography variant="subtitle2"><AlternateEmailIcon/> Email: hilaryjhomayravas@gmail.com</Typography><br/>
                        <Typography variant="subtitle2"><LocalPhoneIcon/> Phone: (908)-421-7805</Typography><br/>
                        <Typography variant="subtitle2"><WebIcon/> Website: www.hilaryvasconez.com</Typography><br/>
                        <Typography variant="subtitle2"><FmdGoodIcon/> Address: Somerville, NJ</Typography><br/>
                    </div>
                    <FormComponent/>
                </Paper>

            </div>
        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    sectiondark:{
        background: "#f8f8f8",
        color: "#777777"
    },
    sectioncontent:{
        maxWidth: "80Vw",   
    },
    root:{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        background: "#d55499",
        color: "#fff",
        fontSize: "1.2rem",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        padding: theme.spacing(4),
        "& button":{
            backgroundColor: "#fff",
            color: "#d55499",
            fontWeight: 900,
            fontSize: "1.2rem",
            marginTop: theme.spacing(4)
        },
        "& button:hover":{
            backgroundColor: purple[400],
            color: "#fff"
        }
    },
    divContact:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        "& h5":{
            marginTop: theme.spacing(1)
        }
    }
  }))

export default Contact