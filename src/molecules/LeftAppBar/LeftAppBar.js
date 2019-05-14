import React, { Component } from "react";
import "./LeftAppBar.css";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import CalendarIcon from "@material-ui/icons/CalendarToday";

import { withStyles } from "@material-ui/core/styles";

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
    height: "100%",
    padding: "0px !important"
  },
  paperFixed: {
    height: "100%",
    padding: "0px !important",
    position: "fixed",
    marginTop:"72px"
  },
  primary: {
    fontSize: "25px"
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
        <div className={classes.paper}>
          <Paper className={classes.paperFixed}>
            <MenuList className={classes.paper}>
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
              <MenuItem className={classes.menuItem}>
                <ListItemIcon >
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
        </div>
      );
    }
  }
);
