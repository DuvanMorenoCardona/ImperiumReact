import React, { Component } from "react";
import "./LeftAppBar.css";

// Importar componentes de Material
import CalendarIcon from "@material-ui/icons/CalendarToday";
import GroupIcon from "@material-ui/icons/Group";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles } from "@material-ui/core/styles";

// Importar rutas
import { NavLink } from "react-router-dom";

const styles = theme => ({
  menuItem: {
    "&:focus": {
      backgroundColor: "#b71c1c",
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    },
    height: "6em"
  },
  paper: {
    height: "100% !important",
    padding: "0px !important"
  },
  primary: {
    fontSize: "25px",
    textDecoration: "none"
  },
  icon: {
    fontSize: "2.5em"
  }
});

export default withStyles(styles)(
  class LeftAppBar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.props.login();
    }

    render() {
      const { classes } = this.props;
      return (
        <Paper className={classes.paper}>
          <MenuList>
            <NavLink exact to="./Calendario" style={{ textDecoration: "none" }}>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  <CalendarIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary="Calendario"
                />
              </MenuItem>
            </NavLink>
            <NavLink to="./Monitores" style={{ textDecoration: "none" }}>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  <GroupIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary="Monitores"
                />
              </MenuItem>
            </NavLink>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon>
                <SettingsIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Ajustes"
              />
            </MenuItem>
          </MenuList>
        </Paper>
      );
    }
  }
);
