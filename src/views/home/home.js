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
    height: "94% !important",
    width: "100% !important"
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
          <div className={classes.root}>
            <NavBar window={this.state.window} />
           <Grid container spacing={12} className={classes.content}>
              <Grid item lg={2} md={3} sm={3} xs={3}>
                <LeftAppBar />
              </Grid>
              <Grid item lg={10} md={3} sm={3} xs={3}>
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
          </Grid >
          </div>
        </BrowserRouter>
                  );
    }
  }
);
