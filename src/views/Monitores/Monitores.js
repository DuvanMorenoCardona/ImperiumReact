import React, { Component } from "react";
import "./Monitores.css";

import NavBar from "../../components/NavBar/NavBar";
import LeftAppBar from "../../molecules/LeftAppBar/LeftAppBar";
import Grid from "@material-ui/core/Grid";
import TableMonitores from "../../components/TableMonitores/TableMonitores";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    width: "100% !important",
    height: "100%"
  },
  LeftBar: {
    flexGrow: 0,
    padding: 0,
    margin: 0,
    height: "100%"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  LeftAppBar: {
    height: "100%",
    padding: "0px !important",
    margin: "0px !important"
  },
  content: {
    marginTop: "6em",
    paddingLeft: "4em !important",
    paddingRight: "1em !important"
  }
});

export default withStyles(styles)(
  class Monitores extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const { classes } = this.props;
      return (
        <div style={{ height: "100%" }}>
          <NavBar />
          <Grid container className={classes.LeftBar} spacing={16}>
            <Grid item xs={2} className={classes.LeftAppBar}>
              <LeftAppBar />
            </Grid>
            <Grid item xs={10} className={classes.content}>
              <TableMonitores />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
