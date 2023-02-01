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

import background from "../assets/bg.png";

import { getBrands } from "../actions/brandActions";

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
  servicesBox: {
    marginTop: "5.5em",
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "5.5em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  typeTitle: {
    color: theme.palette.common.blue,
    fontSize: "3em",
    fontFamily: "acFont",
    fontWeight: 500,
  },
  typeSubTitle: {
    color: theme.palette.common.gray,
    fontSize: "1.5em",
    fontFamily: "acFont",
    fontWeight: 500,
  },
  type: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "acFont",
    fontWeight: 0,
  },
  divLineTitle: {
    width: "80%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
  divLine: {
    width: "75%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: "1px",
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
    fontFamily: "acFont",
    fontWeight: 0,
  },
  brandDesc: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "acFont",
    fontWeight: 0,
    margin: "auto",
  },
  productGroup: {
    display: "flex",
    textAlign: "center",
  },
  productContainer: {
    border: "0.5px solid",
    borderColor: theme.palette.common.gray,
    width: "70vw",
  },
  productLink: {
    color: theme.palette.common.blue,
    fontSize: "0.9em",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Product = (brand) => {
  const classes = useStyles();
  const { width } = GetWindow();

  return (
    <>
      <Grid item>
        <Box
          className={classes.productContainer}
          style={{
            height: width < 1000 ? 400 : 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction={width < 1000 ? "column" : "row"}
            spacing={5}
            alignItems="center"
            justifyContent="center"
            style={{
              width: "70vw",
            }}
          >
            <Grid item xs={width < 1000 ? 12 : 3}>
              <Button
                target="_blank"
                href={brand.brand.url}
                style={{
                  width: brand.brand.logo.width * 0.75,
                }}
              >
                <img
                  alt={brand.brand.brand}
                  src={brand.brand.logo.url}
                  style={{ width: brand.brand.logo.width * 0.75 }}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: width < 1000 ? "center" : "left",
              }}
              xs={9}
            >
              <Typography className={classes.typeSubTitle} component="p">
                {brand.brand.brand}
              </Typography>
              <Typography className={classes.type} component="p">
                {brand.brand.description}
              </Typography>
              <Typography className={classes.type} component="p">
                <a href={brand.brand.url} className={classes.productLink} target="_blank" rel="noreferrer">
                  Click Here To Learn More
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

const Products = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";
  const [showSpinner, setShowSpinner] = useState(false);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  useEffect(() => {
    const refreshBrands = async () => {
      try {
        setShowSpinner(true);
        let brandResponse = await getBrands();
        setBrands(brandResponse);
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
          id="article"
        >
          <Box
            className={classes.servicesBox}
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Grid
              item
              style={{
                textAlign: "center",
                marginTop: "2em",
                marginBottom: "2em",
              }}
            >
              <Typography className={classes.typeTitle} component="p">
                Products
              </Typography>
            </Grid>
          </Box>
          {showSpinner && <LinearProgress />}

          <Box style={{ marginBottom: "5em" }}></Box>

          <Grid
            container
            direction="column"
            className={classes.productGroup}
            spacing={2}
            style={{ alignItems: "center", marginBottom: "5em" }}
          >
            {brands !== undefined &&
              brands.length !== 0 &&
              brands.map((brand, index) => {
                return <Product key={index} brand={brand} />;
              })}
          </Grid>

          <Box style={{ marginBottom: "2em" }}></Box>

          <Box style={{ marginBottom: "1em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Products;
