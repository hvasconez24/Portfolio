import { Button, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import avatar from "../images/avatar.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import { CardActions } from "@mui/material";
import Resume from "../images/Resume.pdf"

const AboutMe = ({title, id, dark}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card} >
                    <CardMedia image={avatar} className={classes.cardMedia} title="avatar"/>
                    <CardContent className={classes.cardContent}>
                        <TypeWriterEffect
                        text= "My name is Hilary Vasconez"
                        textStyle={{fontSize: "2rem", fontWight: "700px", color:"#d55499"}}
                        startDelay={100}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <TypeWriterEffect
                        text= "I am new to the Coding World"
                        textStyle={{fontSize: "1.2rem", fontWight: "400px"}}
                        startDelay={2500}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                            I am a person that loves traveling and move to New Jersey five years ago from Ecuador. I am currently a student for the Rutgers Bootcamp also I am majoring in Management Information systems in the same school. I transferred from Raritan Valley Community College where I obtained my Associates Degree on Business Administration. I am looking forward to growing a career in systems. This portfolio is a representation of what I have learned and accomplished during the Coding Bootcamp. The different projects in this portfolio demonstrate how I have grow my skills on coding. Through this course I have learned HTML, Java Script, and many other skills.
                        </Typography>
                    </CardContent>
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
        paddingTop: theme.spacing(4),
        maxWidth: "85Vw",
        margin: "0 auto",
        paddingBottom: theme.spacing(4)
    },
    card:{
        marginTop: theme.spacing(6),
        height: "auto",
        display: "flex",
        position: "relative"

    },
    cardMedia: {
        width:"599px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            height: 250
        }
    },
    cardContent:{
        width:"599px",
        marginTop: theme.spacing(2),
        "& h6":{
            marginTop: theme.spacing(3),
            [theme.breakpoints.down("sm")]:{
                display: "none"
            },
        }
    }
   
  }))

export default AboutMe