import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import { IconButton, Drawer, Hidden, Toolbar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";

// import { FaBars } from "react-icons/fa";
// import { IoIosCloseCircleOutline } from "react-icons/io";

import GetWindow from "./getWindow";

import logo from "../assets/newLogoBig.png";

import "../App.css";
import "../assets/acFont.otf";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  logoContainer: {
    // backgroundColor: "#f1f1f1",
    marginTop: "1.5em",
    marginBottom: "1em",
    display: "flex",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.gray,
    minWidth: 10,
    marginLeft: "25px",
  },
  newTab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    minWidth: "1vw",
    marginRight: "2vw",
    fontFamily: "acFont"
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  serve: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1em",
    fontFamily: "acFont",
    textTransform: "none",
    fontSize: "1.5em",
    color: "white",
    whiteSpace: "pre-wrap",
  },
  menuTitle: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "5vh",
    color: theme.palette.common.blue,
  },
  menuOptions: {
    textAlign: "center",
    width: "50vw",
  },
  menuText: {
    fontFamily: "acFont",
    "& span, & svg": {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    color: theme.palette.common.gray,
  },
  icons: {
    height: "2.5rem",
    width: "2.5rem",
  },
  exit: {
    height: "2rem",
    width: "2rem",
  },
  divLine: {
    width: "40vw",
    color: theme.palette.common.gray,
    backgroundColor: theme.palette.common.gray,
    height: 1,
    display: "flex",
    float: "center",
  },
}));

const Header = ({ container }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { width } = GetWindow();
  let onMobile = width > 1000 ? false : true;
  let logoWidth = onMobile ? "80%" : "100%";
  let logoContainerDem = onMobile
    ? { width: "50vw", height: "15vh" }
    : {
        width: "25vw",
        height: "15vh",
      };
  const history = useNavigate();

  // const handleDrawerToggle = () => {
  //   setDisplay(!displayMenu);
  // };

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/about":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/products":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/clients":
        if (value !== 3) {
          setValue(3);
        }
        break;
      default:
        if (value !== 4) {
          setValue(4);
        }
        break;
    }
  }, [value, history]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          <Toolbar
            style={{
              justifyContent: "center",
              backgroundColor: "#f1f1f1",
            }}
          >
            <Paper elevation={0} style={{ backgroundColor: "#f1f1f1" }}>
              <Button
                component={Link}
                to="/"
                disableRipple
                onClick={() => setValue(0)}
                className={classes.logoContainer}
                style={logoContainerDem}
              >
                <img
                  alt="company logo"
                  src={logo}
                  style={{ width: logoWidth }}
                />
              </Button>
            </Paper>
          </Toolbar>
          <Paper
            variant="outlined"
            style={{
              backgroundColor: "#005a98",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab
                className={classes.newTab}
                style={{ fontSize: onMobile ? "2vw" : "1.25vw" }}
                component={Link}
                to="/"
                label="HOME"
              />
              <Tab
                className={classes.newTab}
                style={{ fontSize: onMobile ? "2vw" : "1.25vw" }}
                component={Link}
                to="/about"
                label="ABOUT US"
              />
              <Tab
                className={classes.newTab}
                style={{ fontSize: onMobile ? "2vw" : "1.25vw" }}
                component={Link}
                to="/products"
                label="PRODUCTS"
              />
              <Tab
                className={classes.newTab}
                style={{ fontSize: onMobile ? "2vw" : "1.25vw" }}
                component={Link}
                to="/clients"
                label="CLIENTS"
              />
              <Tab
                className={classes.newTab}
                style={{ fontSize: onMobile ? "2vw" : "1.25vw" }}
                component={Link}
                to="/contact"
                label="CONTACT US"
              />
            </Tabs>
          </Paper>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
