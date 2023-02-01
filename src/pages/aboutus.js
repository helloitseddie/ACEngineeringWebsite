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
  },
  type: {
    color: theme.palette.common.gray,
    fontFamily: "acFont",
  },
  typeTitle: {
    color: theme.palette.common.blue,
    fontSize: "3em",
    fontFamily: "acFont",
    fontWeight: 500,
    marginTop: "0.5em",
    marginBottom: "0.5em",
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
  let isMobile = width > 1000 ? false : true;

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
          <Box
            className={classes.aboutUsBox}
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Typography className={classes.typeTitle} component="p">
              About Us
            </Typography>
          </Box>
          <Box
            className={classes.aboutUsBox}
            style={{
              marginRight: width > 800 ? "5em" : "3em",
              marginLeft: width > 800 ? "5em" : "3em",
            }}
          >
            <Grid item>
              <Typography
                className={classes.type}
                component="p"
                style={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.1em" : "1.1vw",
                }}
              >
                {!isMobile && "\u2003\u2003"}Mr. Joe Diaz, P.E. is a graduate
                from University of South Florida with a Bachelor of Science in
                Mechanical Engineering. He began his career with Tampa Electric
                and continued with Reynolds Metals where they formed a joint
                venture with the McClaren Racing Team designing and developing
                aluminum engines for their Can Am race cars. Shortly thereafter,
                they followed the same protocol with General Motors and Ford.
              </Typography>
              <br />
              <br />
            </Grid>
            <Grid item>
              <Typography
                className={classes.type}
                component="p"
                style={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.1em" : "1.1vw",
                }}
              >
                {!isMobile && "\u2003\u2003"}In 1971, Joe became a P.E. in the
                State of Florida with a Mechanical discipline. In the same year,
                he joined and was immediately named partner of the two year old
                firm Gemaire Distributors. He was named President of Gemaire
                International and through very hard work, dedication and
                constant travel abroad, he and his partners made Gemaire a
                global company as sole distributors for Rheem globally and
                Liebert internationally.
              </Typography>
            </Grid>
            <Grid item>
              <br />
              <br />
              <Typography
                className={classes.type}
                component="p"
                style={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.1em" : "1.1vw",
                }}
              >
                {!isMobile && "\u2003\u2003"}In 1980, he founded A.C.
                Engineering, Inc. with a vision focused on data center HVAC and
                electrical power - a pioneer of his time. He continued to
                represent Liebert locally and had established a business
                relationship and friendship with Ralph and Larry Liebert.
              </Typography>
            </Grid>
            <Grid item>
              <br />
              <br />
              <Typography
                className={classes.type}
                component="p"
                style={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.1em" : "1.1vw",
                }}
              >
                {!isMobile && "\u2003\u2003"}He was first in representing
                prestigious manufactures such as Multistack and Heat Pipe
                Technology (HPT) in South Florida. He cemented the HPT brand as
                a standard for HVAC dehumidification locally and internationally
                in countries such as Panama and Japan. He was a Board member of
                HPT for over 10 years.
              </Typography>
            </Grid>
            <Grid item>
              <br />
              <br />
              <Typography
                className={classes.type}
                component="p"
                style={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.1em" : "1.1vw",
                }}
              >
                {!isMobile && "\u2003\u2003"}He founded the South Florida
                chapter and was the founder and chairman of the international
                chapters for AIPE (American Institute of Plant Engineers) which
                was later renamed AFE (Association of Facilities Engineers). He
                was a member of the Board for over 20 years.
              </Typography>
            </Grid>
            <Grid item>
              <br />
              <br />
              <Typography
                className={classes.type}
                component="p"
                style={{
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile ? "1.1em" : "1.1vw",
                }}
              >
                {!isMobile && "\u2003\u2003"}Carrying the same spirit moving
                forward, A.C. Engineering, Inc. continues to be a leader in HVAC
                and electrical power applications focusing on specialized
                markets with the highest quality of products and services.
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
