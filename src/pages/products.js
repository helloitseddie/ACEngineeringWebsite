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

import { getProducts } from "../actions/productActions";

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
    fontFamily: "Arial",
    fontWeight: 500,
  },
  typeSubTitle: {
    color: theme.palette.common.gray,
    fontSize: "1.5em",
    fontFamily: "Arial",
    fontWeight: 500,
  },
  type: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "Arial",
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
  productGroup: {
    display: "flex",
    textAlign: "center"
  },
  productContainer: {
    border: "0.5px solid", 
    borderColor: theme.palette.common.gray,
    width: "70vw", 
    marginLeft: "2vw"
  },
  productLink: {
    color: theme.palette.common.blue,
    fontSize: "0.75em",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

const Product = (product) => {
  const classes = useStyles();
  const { width } = GetWindow();

  return (
    <>
      <Grid item>
        <Box display="flex" flexDirection="column" pt={0.5}
          className={classes.productContainer}
          >
          <Grid container 
            direction= {width < 1000 ? "column" : "row"}
            spacing={10}
            style={{
              alignSelf: "center",
              alignItems: "center"}}
          >
            
            <Grid item style={{textAlign: "center"}}>
              <Button target="_blank" href={product.product.link} style={{width: product.product.logo.width * 0.75, marginLeft: width < 1000 ? 0 : "2em"}}>
                <img
                  alt={product.product.product}
                  src={product.product.logo.url}
                  style={{width: product.product.logo.width * 0.75}}
                />
              </Button>
            </Grid>
            <Grid item style={width < 1000 ? {textAlign: "center"} : {textAlign: "left"}}>
              <Typography className={classes.type} component="p">
                {product.product.brand} {product.product.product} <br />
                <a href={product.product.link} className={classes.productLink}>Click Here To Learn More</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

const ProductGroup = (productGroup) => {
  const classes = useStyles();
  const { width } = GetWindow();
  const products = productGroup.productGroup.productsCollection.items
  return (
    <>
      <Grid container 
        direction="column"
        className={classes.productGroup}
        style={width < 1000 ? {alignItems: "center"} : { marginLeft: "3em", marginRight: "3em", width: "85%"}}
        id={productGroup.productGroup.group}
      >
        <Grid item xs={8}>
          <Box
            className={classes.productGroup}
            style={{ marginLeft: "0.5em"}}
          >
            <Typography className={classes.typeSubTitle} component="p">
              {productGroup.productGroup.group}
            </Typography>
          </Box>
          <hr className={classes.divLine} style={{float: "left", marginBottom: "2em", marginTop: "1em", width: width < 1000 ? "100%" : "40vw"}} />
        </Grid>
      </Grid>

      <Grid container 
        direction="column"
        className={classes.productGroup}
        spacing={1}
        style={{alignItems: "center", marginBottom: "5em"}}
      >
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </Grid>
    </>
  );
};

const ProductJump = (groups) => {
  const classes = useStyles();
  const { height } = GetWindow();

  const scrollToTop = (offset) => {
    console.log(offset)
    window.scrollTo({
      top: offset - (height / 3.5),
      behavior: "smooth",
    });
  };

  return (
    <Grid container 
      direction="row"
      style={{justifyContent: "center"}}
      spacing={5}
    >
      {groups.groups.map((group, index) => {
          return (
            <>
              {document.getElementById(group.group) !== null && <Grid item key={index}>
                <button key={index} onClick={() => scrollToTop(document.getElementById(group.group).getBoundingClientRect().y)} style={{cursor: "pointer"}}>
                  <Typography key={index} className={classes.type} component="p">
                    {group.group}
                  </Typography>
                </button>
              </Grid>}
            </>
          );
      })}
    </Grid>
  );
}

const Services = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";
  const [showSpinner, setShowSpinner] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  useEffect(() => {
    const refreshBrands = async () => {
      try {
        setShowSpinner(true);
        let productsResponse = await getProducts();
        setProducts(productsResponse);
        setShowSpinner(false);
      } catch (error) {
        console.error(error);
        setShowSpinner(false);
      }
    };
    if (products === undefined || products.length === 0) refreshBrands();
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
          <Box className={classes.servicesBox} style={{backgroundColor: "#f1f1f1"}}>
            <Grid item style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
              <Typography className={classes.typeTitle} component="p">
                Products We Offer
              </Typography>
            </Grid>
          </Box>
          <Typography className={classes.typeSubTitle} component="p" style={{textAlign: "center", marginBottom: "1em"}}>
            Jump To: 
          </Typography>
          { products !== undefined && products.length !== 0 && <ProductJump groups={products} /> }
          {showSpinner && <LinearProgress />}
          <Box style={{ marginBottom: "5em" }}></Box>
          {products !== undefined &&
            products.length !== 0 &&
            products.map((product, index) => {
              return <ProductGroup key={index} productGroup={product} />;
            })}
          <Box style={{ marginBottom: "2em" }}></Box>

          <Box style={{ marginBottom: "1em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Services;
