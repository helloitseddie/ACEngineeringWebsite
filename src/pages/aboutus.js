import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bg.png";

import "../App.css";
import "../assets/acFont.otf";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  aboutUsBox: {
    marginTop: "3em",
    marginRight: "2em",
    marginLeft: "2em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  type: {
    color: theme.palette.common.blue,
    fontSize: "1.25em",
    fontFamily: "acFont",
    fontWeight: 100,
  },
  typeTitle: {
    color: theme.palette.common.blue,
    fontSize: "3em",
    fontFamily: "acFont",
    fontWeight: 500,
    marginTop: "0.5em",
    marginBottom: "0.5em"
  },
  logo: {
    float: "right",
    margin: "2em",
    width: "100%",
    height: "auto",
  },
  divLine: {
    width: "65%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  return (
    <>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        <Paper
          elevation={0}
          className={classes.articleContainer}
          style={{ width: articleWidth }}
          id="article"
        >
          <Box style={{ marginBottom: "6em" }}></Box>
          <Box className={classes.aboutUsBox} style={{backgroundColor: "#f1f1f1"}}>
            <Typography className={classes.typeTitle} component="p">
              About Us
            </Typography>
          </Box>
          <Box
            className={classes.aboutUsBox}
            style={{
              marginRight: width > 800 ? "10em" : "3em",
              marginLeft: width > 800 ? "10em" : "3em",
            }}
          >
            <Grid item>
              <Typography className={classes.type} component="p">
                AC Engineering Inc. has over 40 years of continuous sales and
                design experience in South Florida involving critical
                application and solutions for commercial and residential
                buildings.
              </Typography>
              <br />
            </Grid>
            <Grid item>
              <Typography className={classes.type} component="p">
                AC Engineering Inc. is committed to providing integrated
                solutions for mission critical applications involving precision
                cooling and power support for data centers and healthcare
                buildings, dehumidification for indoor pool environments, UV
                lighting and indoor air quality solutions, and pre-fabricated
                custom solutions for industrial-commercial rated HVAC and
                electrical markets. In addition, AC Engineering Inc. is able to
                support our customers during and after the construction process,
                including all aspects of system procurement, start-up,
                commissioning, monitoring, and maintenance to ensure that these
                systems work as designed and adapt to the individual needs of
                the end user.
              </Typography>
            </Grid>
            <Grid item>
              <br />
              <Typography className={classes.type} component="p">
                AC Engineering Inc. has vast experience and expertise in the
                following product lines, as well as many others, and can be
                counted on as your consultative partner for your next project:
              </Typography>
            </Grid>
          </Box>
          <Box style={{ marginTop: "7em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default AboutUs;
