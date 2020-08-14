import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    display: "flex",
    justifyContent: "center"
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding : '10px 0'
  }
}));

export default function ChildCard({ child }) {

  const { name, image } = child
  const classes = useStyles();


  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image="/assets/images/card-background.png"
        title={name}
      >
        <img src={image} alt={name} />
      </CardMedia>

      <CardActions disableSpacing>
        <div className={classes.actions}>
          <Typography component="p" variant='h3'>
            {name}
          </Typography>
          <ArrowForwardIosIcon fontSize='small'/>
        </div>
      </CardActions>

    </Card>
  );
}
