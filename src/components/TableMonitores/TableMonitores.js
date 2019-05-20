import React, { Component } from "react";
import "./TableMonitores.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableRowContent from "../../molecules/TableRowContent/TableRowContent";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  },
  tableHead: {
    backgroundColor: "#b1b1b1"
  },
  tableHeadText: {
    color: "white"
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "Ingenieria Multimedia", "6", 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default withStyles(styles)(
  class TableMonitores extends Component {
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
        <div className="">
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableHead}>
                  <TableCell className={classes.tableHeadText}>
                    Nombre
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableHeadText}
                  >
                    Carrera
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableHeadText}
                  >
                    Semestre
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableHeadText}
                  >
                    Elimina o editar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRowContent row={rows[0]}/>
                {/* rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                )) */}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    }
  }
);
