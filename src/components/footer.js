import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import GetWindow from "./getWindow";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#707070",
    marginTop: "auto",
    position: "flex",
  },
  text: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "1em",
    margin: 0,
  },
  tabContainer: {
    margin: 0,
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { width, height } = GetWindow();
  const divRef = useRef();
  const [offset, setOffset] = useState(height - 100);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollOffset(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    if (divRef.current !== undefined) {
      setOffset(
        divRef.current.offsetHeight + divRef.current.offsetTop >= height - 50
          ? height - 100
          : divRef.current.offsetHeight + divRef.current.offsetTop
      );
    }
  }, [divRef, height, scrollOffset]);

  return (
    <>
      <div ref={divRef}></div>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        justifyContent="center"
        direction="row"
        className={classes.bar}
        style={{ height: `calc(100vh - ${offset}px)` }}
      >
        <Grid item xs={5} style={{ textAlign: "center"}}>
          <Typography className={classes.text} component={Link} 
            to="/" style={{fontSize: width < 500 ? "0.5em" : "1em", textDecoration: "none", cursor: "default"}}>
            © Copyright - AC Engineering, Inc. All Rights Reserved
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            textAlign: "center"
          }}
        >
          <Typography
            className={classes.text}
            component={Link}
            to="/"
            style={{ textDecoration: "none", fontSize: width < 500 ? "0.5em" : "1em" }}
          >
            Home |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/about"
            style={{ textDecoration: "none", fontSize: width < 500 ? "0.5em" : "1em" }}
          >
            About Us |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/products"
            style={{ textDecoration: "none", fontSize: width < 500 ? "0.5em" : "1em" }}
          >
            Products |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/clients"
            style={{ textDecoration: "none", fontSize: width < 500 ? "0.5em" : "1em" }}
          >
            Clients |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/contact"
            style={{ textDecoration: "none", fontSize: width < 500 ? "0.5em" : "1em" }}
          >
            Contact Us
          </Typography>
        </Grid>
        <Box sx={{ display: "flex" }} className={classes.bar}></Box>
      </Grid>
    </>
  );
}
