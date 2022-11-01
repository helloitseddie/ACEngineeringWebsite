import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import emailjs from "emailjs-com";

import background from "../assets/bg.png";

import "../App.css";
import "../assets/acFont.otf";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
    margin: "auto",
  },
  servicesBox: {
    marginTop: "2em",
    marginRight: "2em",
    marginLeft: "2em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  typeTitle: {
    color: theme.palette.common.gray,
    fontSize: "2em",
    fontFamily: "acFont",
    fontWeight: 500,
    marginTop: "1em",
  },
  type: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "acFont",
    fontWeight: 0,
  },
  divLine: {
    width: "65%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
  inputTitle: {
    fontWeight: "bold",
    fontFamily: "acFont",
    marginTop: "1em",
  },
  formInput: {
    height: "2em",
    fontFamily: "acFont",
  },
  message: {
    height: "8em",
  },
  errorMessage: {
    color: "red",
  },
  submitButt: {
    color: "white",
    fontFamily: "acFont",
    marginTop: "1em",
    backgroundColor: theme.palette.common.blue,
  },
}));

const Contact = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";
  let [successStatus, setSuccessStatus] = useState(false);
  let [failStatus, setFailStatus] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        templateParams,
        `${process.env.REACT_APP_USER_ID}`
      );
      reset();
      setSuccessStatus(true);
      toastifySuccess();
    } catch (e) {
      setFailStatus(true);
      console.log(e);
    }
  };

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  return (
    <Grid container spacing={2} alignItems="stretch" justifyContent="center">
      <Paper
        elevation={0}
        className={classes.articleContainer}
        style={{ width: articleWidth }}
        id="article"
      >
        <Box className={classes.servicesBox} style={{ marginTop: "5em" }}>
          <Typography className={classes.typeTitle} component="p">
            Contact Us
          </Typography>
          <br />
        </Box>
        <Box
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <hr className={classes.divLine} style={{ float: "left" }} />
        </Box>
        <Box
          className={classes.servicesBox}
          style={{
            marginRight: width > 1000 ? "10em" : "3em",
            marginLeft: width > 1000 ? "10em" : "3em",
          }}
        >
          <Typography
            className={classes.type}
            component="p"
            style={{ margin: "auto", fontWeight: 100, fontSize: "1.25em" }}
          >
            Thank you for your interest in AC Engineering, Inc. For more
            information, please contact us directly by completing the form or by
            calling us at the telephone and/or address provided below:
          </Typography>
        </Box>
        <Box className={classes.servicesBox}></Box>
        <Box
          className={classes.servicesBox}
          style={{ textAlign: "center", alignItems: "center" }}
          display="flex"
          flexDirection={width > 800 ? "row" : "column"}
        >
          <Grid
            item
            xs={width > 800 ? 6 : 8}
            style={{ textAlign: "center", margin: "auto", marginleft: "2em"}}
          >
            <Typography className={classes.type} component="p">
              J.R. Diaz
            </Typography>
            <Typography
              className={classes.type}
              style={{ textDecoration: "none", margin: "auto"}}
              component="a"
              href="mailto:jrdiaz@acengineering.com"
            >
              jrdiaz@acengineering.com
            </Typography>
            <br />
            <br />
            <Typography className={classes.type} component="p">
              Joe E. Diaz, PE
            </Typography>
            <Typography
              className={classes.type}
              style={{ textDecoration: "none" }}
              component="a"
              href="mailto:jdiaz@acengineering.com"
            >
              jdiaz@acengineering.com
            </Typography>
            <br />
            <br />
            <Typography className={classes.type} component="p">
              Mauricio Dugand
            </Typography>
            <Typography
              className={classes.type}
              style={{ textDecoration: "none" }}
              component="a"
              href="mailto: mauricio@acengineering.com"
            >
              mauricio@acengineering.com
            </Typography>
            <br />
            <br />
            <Typography
              className={classes.type}
              style={{ fontWeight: "bold" }}
              component="p"
            >
              AC Engineering, Inc.
            </Typography>
            <Typography className={classes.type} component="p">
              14024 SW 140th St.
            </Typography>
            <Typography className={classes.type} component="p">
              Miami, FL 33186
            </Typography>
            <br />
            <Typography
              className={classes.type}
              style={{ textDecoration: "none" }}
              component="a"
              href="tel:305.594.6996"
            >
              T: 305.594.6996
            </Typography>
            <Typography className={classes.type} component="p">
              F: 305.594.7678
            </Typography>
          </Grid>
          <Grid item xs={5} style={{ textAlign: "left", margin: "auto" }}>
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                {failStatus && <Typography className={classes.inputTitle} style={{color: "red", fontSize: "1.25em"}} component="p">
                    Something went wrong
                  </Typography>}
                  {successStatus && <Typography className={classes.inputTitle} style={{color: "green", fontSize: "1.25em"}} component="p">
                    Successfully sent message!
                  </Typography>}
                  <div className="col-6">
                    <Typography className={classes.inputTitle} component="p">
                      Name*
                    </Typography>
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className={classes.formInput}
                      style={{ width: articleWidth }}
                      placeholder="Name"
                    ></input>
                    <br />
                    {errors.name && (
                      <span className={classes.errorMessage}>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6">
                    <Typography className={classes.inputTitle} component="p">
                      Email*
                    </Typography>
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          //eslint-disable-next-line
                          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      })}
                      className={classes.formInput}
                      style={{ width: articleWidth }}
                      placeholder="Email address"
                    ></input>
                    <br />
                    {errors.email && (
                      <span className={classes.errorMessage}>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <Typography className={classes.inputTitle} component="p">
                      Subject*
                    </Typography>
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className={classes.formInput}
                      style={{ width: articleWidth }}
                      placeholder="Subject"
                    ></input>
                    <br />
                    {errors.subject && (
                      <span className={classes.errorMessage}>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <Typography className={classes.inputTitle} component="p">
                      Message*
                    </Typography>
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className={classes.message}
                      style={{ width: articleWidth, fontFamily: "acFont" }}
                      placeholder="Message"
                    ></textarea>
                    <br />
                    {errors.message && (
                      <span className={classes.errorMessage}>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  className={classes.submitButt}
                  style={
                    width > 800
                      ? {}
                      : { display: "block", margin: "auto", marginTop: "1em" }
                  }
                  type="submit"
                  variant="outlined"
                >
                  Submit
                </Button>
              </form>
            </div>
          </Grid>
        </Box>
        <Box className={classes.servicesBox}></Box>
      </Paper>
      <Footer />
    </Grid>
  );
};

export default Contact;
