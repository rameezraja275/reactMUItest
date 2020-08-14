import React from "react";
import { Typography } from "@material-ui/core";
import ChildCard from "../../Components/ChildCard";
import AddChild from "../../Components/AddChildCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import children from "../../data";

const useStyles = makeStyles((theme)=>({
  root:{
    [theme.breakpoints.only('xs')]:{
      margin : '20px 0'
    }
  },
  mainHeading:{
    textAlign:'center',
    marginBottom :'20px'
  }
}));

const ChildView = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2} justify='center'>
      <Grid item xs={12} sm={8}>
        <Typography variant="h1" component="h2" className={classes.mainHeading}>
          Select your Child
        </Typography>
        <Grid container spacing={2} justify='center'>
          {children.map((child, index) => (
            <Grid item xs={12} key={index} sm={4}>
              <ChildCard child={child} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        <AddChild />
      </Grid>
    </Grid>
  );
};

export default ChildView;
