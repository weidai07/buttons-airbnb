import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const moveCard = {
    paddingLeft:'300px'
}

const useStyles = makeStyles({
    root: {
      minWidth: 365,
      width: '170px',
      marginTop: 100,
      height: '600px',
     

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
      
      


    },
    title: {
      fontSize: 14,
      
      
      
    },
    pos: {
      marginBottom: 1,
      
    },
  });



export default function CheckIn() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
      <div style={moveCard}>
    <Card className={classes.root} variant="outlined">
    <CardContent>
    <form>
        <h3>Book unique places to stay and things to do.</h3>
     <TextField id="filled-basic" label="Where" variant="filled" />
     <br/><br/>
        <h5>Check-In</h5>
       <TextField id="filled-basic" label="mm/dd/yyyy" variant="filled" />
       <br/>
       <h5>Check-In</h5>
       <TextField id="filled-basic" label="mm/dd/yyyy" variant="filled" />
       <br/>
       <h5>Guests</h5>
       <TextField id="outlined-basic" label="Guests" variant="filled" />
      </form> 
    </CardContent>
    <CardActions>
      <Button   variant="contained" size="medium" color="secondary">Submit</Button>
    </CardActions>
  </Card>
 
   
    </div>
  );
}