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
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

const styles = theme => ({
  root: {
    height: "100vh !important",
    width: "100vw !important"
  }, 
  content: {
    height: "95% !important",
    width: "100% !important"
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
          <div className={classes.root}>
            <NavBar />
            <Grid container spacing={12} className={classes.content}>
              <Grid item lg={2} md={3} sm={3} xs={3}>
                <LeftAppBar />
              </Grid>
              <Grid item row lg={10} md={3} sm={3} xs={3}>
                <Switch>
                  <Route
                    exact
                    path="/Calendario"
                    render={() => <Calendario />}
                  />
                  <Route path="/Monitores" render={() => <Monitores />} />
                </Switch>
              </Grid>
            </Grid>
          </div>
        </BrowserRouter>
      );
    }
  }
);

