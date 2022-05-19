import { Button, makeStyles, Typography, Card, CardContent, CardActions } from "@material-ui/core";
import React from "react";
import pdf from "../images/Resume.pdf";
import ProgressBar from "./ProgressBar";


const Resume = ({title, id, dark}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card} >
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h6">MY PROFICIENCIES</Typography>
                        <ProgressBar title="HTML"bgcolor="orange" progress='85'  height={30} />
                        <ProgressBar title="JAVASCRIPT"bgcolor="red" progress='80'  height={30} />
                        <ProgressBar title="NODEJS"bgcolor="#99ff66" progress='75'  height={30} />
                        <ProgressBar title="CSS"bgcolor="#ff00ff" progress='95'  height={30} />
                        <ProgressBar title="REACT"bgcolor="#99ccff" progress='70'  height={30} />
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfBtn}>
                            <a href={pdf} download>
                            Download Resume
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark:{
        background: "#f8f8f8",
        color: "#777777"
    },
    sectioncontent:{
        maxWidth: "80Vw",
        margin: "0 auto"
    },
    card:{
        marginTop: theme.spacing(6),
        height: "auto",
        display: "flex",
        position: "relative"

    },
    cardContent:{
        width:"50%",
        marginTop: theme.spacing(2),
        "& h6": {
            marginLeft: theme.spacing(6)
        }
    },
    pdfBtn:{
        position: "absolute",
        bottom: "5rem",
        right: "4rem",
        [theme.breakpoints.down("sm")]:{
            bottom: "1rem",
            right: "1rem",
        },
        backgroundColor: "#d55499",
        padding: theme.spacing(3),
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900
        },
        "& a:hover": {
            color: "#d55499"
        }
    },
    heading:{
        color: "#d55499",
    }
  }))

export default Resume