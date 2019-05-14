import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./AppBar.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  AppBar: {
    backgroundColor: "#b71c1c"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 400,
    borderColor: "#92a8d1"
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 150,
    fontSize: "16px"
  },
  avatar: {
    flexGrow: 0
  }
});

export default withStyles(styles)(
  class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: true,
        anchorEl: null,
        age: "",
        labelWidth: 0
      };
    }

    componentDidMount() {
      this.setState({
        labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
      });
    }

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

    render() {
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const { classes } = this.props;
      return (
        <div>
          <AppBar position="sticky" className={classes.AppBar}>
            <Toolbar>
              <div className={classes.grow}>
                <Typography variant="h4" color="inherit">
                  IMPERIUM
                </Typography>
                <Button color="inherit" className={classes.button}>
                  Filtrar
                </Button>
              </div>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  htmlFor="outlined-age-simple"
                >
                  Age
                </InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange("age")}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <Avatar className={classes.avatar}>H</Avatar>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem>Perfil</MenuItem>
                    <MenuItem>Mi Cuenta</MenuItem>
                    <MenuItem>Cerrar Sesion</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
);
