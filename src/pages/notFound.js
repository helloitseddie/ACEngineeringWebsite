import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bg.png";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
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
    fontSize: "1.5em",
    fontFamily: "Arial",
    fontWeight: 0,
  },
  divLineTitle: {
    width: "75%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
  divLine: {
    width: "75%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 800 ? "75%" : "100vw";

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
          <Box className={classes.servicesBox} style={{backgroundColor: "#f1f1f1"}}>
            <Grid item style={{ textAlign: "center", marginTop: "2em", marginBottom: "2em" }}>
              <Typography className={classes.typeTitle} component="p">
                Page Not Found
              </Typography>
            </Grid>
          </Box>
          <Box
            className={classes.servicesBox}
            style={{ textAlign: "center", alignItems: "center"}}
            display="flex"
            flexDirection={"column"}
          >
            <Grid item>
              <Typography className={classes.type} component="p">
                It looks like we coulnd't find the page you were looking for.
                Please try one of the links below:
              </Typography>
              <br />
              <br />
            </Grid>
            <Grid item>
              <Typography className={classes.type} component={Link} to="/">
                Home
              </Typography>
              <br />
              <Typography className={classes.type} component={Link} to="/about">
                About Us
              </Typography>
              <br />
              <Typography
                className={classes.type}
                component={Link}
                to="/products"
              >
                Products
              </Typography>
              <br />
              <Typography
                className={classes.type}
                component={Link}
                to="/clients"
              >
                Clients
              </Typography>
              <br />
              <Typography
                className={classes.type}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Typography>
            </Grid>
          </Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default NotFound;
