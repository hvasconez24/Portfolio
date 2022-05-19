import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import projectData from "../projectData"

const Portfolio = ({title, id, dark}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        projectData.map(({title,image,link,gitLink}, index)=> (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia image={image} className={classes.cardImage}/>
                                    <CardContent>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                        <br/>
                                        <Link href={gitLink} color="primary" target="_blank" rel="noopener noreferrer">
                                            Repository
                                        </Link>
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
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
        maxWidth: "90Vw",
        margin: "0 auto"
    },
    grid:{
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    card:{
        maxWidth: 360,
        minHeight: 250,
        margin: theme.spacing(1)
    },
    cardImage:{
        height: 0,
        paddingTop: '56.25%'
    }
  }))

export default Portfolio