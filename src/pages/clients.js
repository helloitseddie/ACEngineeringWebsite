import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import { getClients } from "../actions/clientsActions";
import LinearProgress from "@material-ui/core/LinearProgress";

import background from "../assets/bg.png";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  servicesBox: {
    marginTop: "5em",
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "2em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  typeTitle: {
    color: theme.palette.common.gray,
    fontSize: "2em",
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
  divLine: {
    width: "65%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
    marginBottom: "2em",
  },
  clientGroup: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Client = (client) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3} xl={6} style={{ textAlign: "center", margin: "1em" }}>
        <Box display="flex" flexDirection="column" pb={2}>
          <img
            alt=""
            src={client.client.logo.url}
            style={{ aspectRatio: 3 / 2, height: undefined, width: "100%" }}
          />
          <Typography className={classes.type} component="p">
            {client.client.client}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

const ClientGroup = (clientGroup) => {
  const classes = useStyles();
  const clients = clientGroup.clientGroup.clientsCollection.items;
  console.log(clients);
  return (
    <>
      <Box
        className={classes.clientGroup}
        style={{ marginTop: "3em", marginLeft: "3em" }}
      >
        <Typography className={classes.typeSubTitle} component="p">
          {clientGroup.clientGroup.category}
        </Typography>
      </Box>
      <hr
        className={classes.divLine}
        style={{ float: "left", marginLeft: "3em", width: "30%" }}
      />
      <Box
        className={classes.clientGroup}
        style={{ marginTop: "3em", marginLeft: "3em" }}
      >
        {clients.map((client, index) => {
          return <Client key={index} client={client} />;
        })}
      </Box>
    </>
  );
};

const Clients = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1000 ? "75%" : "100%";
  let topMargin = width > 1000 ? "10vh" : "12vh";

  const [showSpinner, setShowSpinner] = useState(false);
  const [clientGroups, setClientGroups] = useState([]);

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  useEffect(() => {
    const refreshClients = async () => {
      try {
        setShowSpinner(true);
        let response = await getClients();

        setClientGroups(response);
        setShowSpinner(false);
      } catch (error) {
        console.error(error);
        setShowSpinner(false);
      }
    };
    if (clientGroups === undefined || clientGroups.length === 0)
      refreshClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        <Paper
          elevation={0}
          className={classes.articleContainer}
          style={{ width: articleWidth, marginTop: topMargin }}
        >
          <Box className={classes.servicesBox}>
            <Typography className={classes.typeTitle} component="p">
              Clients
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

          {showSpinner && <LinearProgress />}

          {clientGroups !== undefined &&
            clientGroups.length !== 0 &&
            clientGroups.map((clientGroup, index) => {
              return <ClientGroup key={index} clientGroup={clientGroup} />;
            })}
          <Box className={classes.servicesBox}></Box>
          <Box className={classes.servicesBox}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Clients;