import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: '100%',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin : '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '540px'
    }
  },
}));

export default function AddChild() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="elevation">
      <Typography variant="h2" component="h2">
        Add Another Child
      </Typography>
      <Typography>
        You’ll need a class code from your teacher to get started.
      </Typography>
      <Button variant="contained" color="primary">
        Add Child
      </Button>
    </Paper>
  );
}
