import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Portfolio = ({title, id, dark}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
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
    }
  }))

export default Portfolio