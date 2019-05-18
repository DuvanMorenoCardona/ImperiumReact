import React, { Component } from "react";
import './calendario.css';

// Importar componentes
import NavBar from "../../components/NavBar/NavBar";
import LeftAppBar from "../../molecules/LeftAppBar/LeftAppBar";
import Grid from "@material-ui/core/Grid";
import Fullcalendar from "../../components/Fullcalendar/fullcalendar";

// Importar componentes de Material-ui
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
  }
});

export default withStyles(styles)(
  class Calendario extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const { classes } = this.props;
      return (
        <div className="content-calendar" style={{ height: "100%" }}>
          <Fullcalendar />
        </div>
      );
    }
  }
);
