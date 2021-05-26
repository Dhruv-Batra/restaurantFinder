import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  linker: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontsize: '5vh',
  },
});

export default function Navbar() {

  const classes = useStyles();

    return (
      <div>
        <header className="App-header">
          <h2>Outing Planner</h2>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={2}><Link to="/" className={classes.linker}>Home</Link></Grid>
            <Grid item sm={2}><Link to="/dining" className={classes.linker}>Find Dining</Link></Grid>
            <Grid item sm={2}><Link to="/weather" className={classes.linker}>Weather</Link></Grid>
          </Grid>
          <br></br>
        </header>
        <br></br>
      </div>
    );
  };