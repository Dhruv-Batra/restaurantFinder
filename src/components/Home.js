import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function  Home(){

    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Link to="/dining" style={{ textDecoration: 'none', padding: '5vh'}}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Find Dining"
                        height="140"
                        image="https://www.mtievents.com/wp-content/uploads/2017/11/progressive-dining.jpg"//"/images/dining.jpg"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Find Dining
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The age old question - where to eat? Choose a destination hassle free with our easy to use tool based on the Google Places API.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Link>

                <Link to="/weather" style={{ textDecoration: 'none' }}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Weather"
                        height="140"
                        image="https://resources.altair.com/corp/images/industries_weather_cylc_image_left_interior_desktop_400pxhigh.jpg"//"/images/dining.jpg"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Weather
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Failing to prepare is preparing to fail. Don't let bad weather ruin your outing by checking the hourly and daily forecast!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Link>
            </Grid>
        </div>
      );
}
