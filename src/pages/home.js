import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import GalleryCarousel from "../components/GalleryCarousel";

import background from "../assets/bg.png";

import { getImages } from "../actions/homeActions";

import "../App.css";
import "../assets/acFont.otf";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
    float: "center",
  },
  aboutUsBox: {
    marginTop: "5em",
    marginBottom: "3em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  type: {
    color: theme.palette.common.blue,
    fontSize: "3em",
    fontFamily: "acFont",
    fontWeight: "bold",
  },
  brands: {
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  brandName: {
    color: theme.palette.common.blue,
    margin: "auto",
    fontFamily: "acFont",
    fontWeight: 0,
  },
  brandDesc: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "Arial",
    fontWeight: 0,
    margin: "auto",
  },
  logo: {
    float: "right",
    margin: "2em",
    width: "100%",
    height: "auto",
  },
  logog: {
    margin: "auto",
    width: "100%",
    height: "auto",
  },
  divLine: {
    width: "75%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";
  const [showSpinner, setShowSpinner] = useState(false);
  const [homeImages, setHomeImages] = useState([]);

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  useEffect(() => {
    const refreshBrands = async () => {
      try {
        setShowSpinner(true);
        let revolverImages = await getImages();
        setHomeImages(revolverImages);
        setShowSpinner(false);
      } catch (error) {
        console.error(error);
        setShowSpinner(false);
      }
    };
    if (homeImages === undefined || homeImages.length === 0) refreshBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Box style={{ marginBottom: "5vh" }}></Box>
          {showSpinner && <LinearProgress />}
          {homeImages !== undefined && homeImages.length !== 0 && <GalleryCarousel images={homeImages} />}
          <div>
            <p
              className={classes.brandName}
              style={{
                fontSize: width > 700 ? "2em" : "1em",
                textAlign: "center",
                marginTop: "10vh",
                marginLeft: "1em",
                marginRight: "1em",
              }}
            >
              Providing precision cooling, humidity control, heating, and electrical solutions since 1980
            </p>
          </div>
          <hr className={classes.divLine} style={{ marginTop: "1.5em" }} />
          <Box style={{ marginBottom: "8em" }}></Box>
          
          <Box style={{ marginBottom: "2em" }}></Box>

          <Box style={{ marginBottom: "1em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
