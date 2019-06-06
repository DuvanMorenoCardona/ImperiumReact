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
      this.state = {
        window: ""
      };
      this.changeView = this.changeView.bind(this);
    }
    changeView(data) {
      this.setState({
        window: data
      });
    }

    render() {
      const { classes } = this.props;
      return (
        <BrowserRouter>
          <Grid container spacing={12}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <NavBar window={this.state.window} />
            </Grid>
          </Grid>

          <Grid container className={classes.LeftBar} spacing={12}>
            <Grid
              item
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className={classes.LeftAppBar}
            >
              <LeftAppBar />
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
              <Switch>
                <Route
                  exact
                  path="/Calendario"
                  render={props => (
                    <Calendario
                      {...props}
                      window="calendar"
                      changeViewFunction={this.changeView}
                    />
                  )}
                />
                <Route
                  path="/Monitores"
                  render={props => (
                    <Monitores
                      {...props}
                      window="monitor"
                      changeViewFunction={this.changeView}
                    />
                  )}
                />
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      );
    }
  }
);
