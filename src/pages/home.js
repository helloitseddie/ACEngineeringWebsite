import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import SimpleImageSlider from "react-simple-image-slider";
// import styles from "../components/imageRevolver.css";

import background from "../assets/bg.png";

import { getBrands } from "../actions/brandActions";
import { getImages } from "../actions/homeActions";

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
    fontFamily: "Arial",
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
    fontSize: "2em",
    fontFamily: "Arial",
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

const Brand = (brand) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.brands} style={{ marginTop: "3em" }}>
        <Grid item xs={5} style={{ textAlign: "center" }}>
          <Button target="_blank" href={brand.brand.url}>
            <img
              alt={brand.brand.brand}
              src={brand.brand.logo.url}
              className={classes.logo}
            />
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.brandName} component="p">
            {brand.brand.brand.toUpperCase()}
          </Typography>
          <hr className={classes.divLine} style={{ float: "left" }} />
          <br />
          <br />
          {brand.brand.description.map((attr, index) => {
            return (
              <Typography
                key={index}
                className={classes.brandDesc}
                component="p"
              >
                {" "}
                - {attr}
              </Typography>
            );
          })}
        </Grid>
      </Box>
      <Box style={{ marginBottom: "2em" }}></Box>
    </>
  );
};

const Home = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";
  const [showSpinner, setShowSpinner] = useState(false);
  const [brands, setBrands] = useState([]);
  const [homeImages, setHomeImages] = useState([]);

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  console.log(articleWidth);

  useEffect(() => {
    const refreshBrands = async () => {
      try {
        setShowSpinner(true);
        let response = await getBrands();
        setBrands(response);
        let revolverImages = await getImages();
        setHomeImages(revolverImages);
        setShowSpinner(false);
      } catch (error) {
        console.error(error);
        setShowSpinner(false);
      }
    };
    if (brands === undefined || brands.length === 0) refreshBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        <Paper
          elevation={0}
          className={classes.articleContainer}
          style={{ width: articleWidth }}
        >
          <Box style={{ marginBottom: "5vh" }}></Box>
          {homeImages !== undefined && homeImages.length !== 0 && (
            <SimpleImageSlider
              width={articleWidth}
              height={500}
              images={homeImages}
              showBullets={false}
              showNavs={true}
              autoPlay={true}
              autoPlayDelay={5}
              className={classes.imageRevolver}
            />
          )}
          <div>
            <p
              className={classes.brandName}
              style={{
                textAlign: "center",
                margin: 0,
                marginTop: "10vh",
              }}
            >
              Representing innovative HVAC and power brands since 1980
            </p>
          </div>
          <hr className={classes.divLine} style={{ marginTop: "1.5em" }} />
          <Box style={{ marginBottom: "8em" }}></Box>
          {brands !== undefined &&
            brands.length !== 0 &&
            brands.map((brand, index) => {
              return <Brand key={index} brand={brand} />;
            })}
          <Box style={{ marginBottom: "8em" }}></Box>
          {showSpinner && <LinearProgress />}

          <Box style={{ marginBottom: "2em" }}></Box>
          <hr className={classes.divLine} style={{ marginTop: "1.5em" }} />
          <Box style={{ marginBottom: "2em" }}></Box>

          <Box style={{ marginBottom: "1em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
