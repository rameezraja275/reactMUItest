import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display : 'flex',
    minHeight: "100vh",
    alignItems:'center'
  }
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}
