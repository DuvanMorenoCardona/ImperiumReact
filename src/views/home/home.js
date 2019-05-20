import React, { Component } from "react";

// Importar componentes
import NavBar from "../../components/NavBar/NavBar";
import LeftAppBar from "../../molecules/LeftAppBar/LeftAppBar";
import Calendario from "../Calendario/calendario";
import Monitores from "../Monitores/Monitores";

// Importar Componentes de Material-Ui
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

// Importar Router
import { BrowserRouter ,HashRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

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
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const { classes } = this.props;
      return (
        <BrowserRouter>
          <div style={{ height: "100%" }}>
            <NavBar />
            <Grid container className={classes.LeftBar} spacing={16}>
              <Grid item xs={2} className={classes.LeftAppBar}>
                <LeftAppBar />
              </Grid>
                <Switch>
                  <Route
                    exact
                    path="/Calendario"
                    render={() => <Calendario />}
                  />
                  <Route path="/Monitores" render={() => <Monitores />} />
                </Switch>
            </Grid>
          </div>
        </BrowserRouter>
      );
    }
  }
);
