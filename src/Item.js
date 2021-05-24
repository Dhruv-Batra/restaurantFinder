import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import React, {useState} from "react";
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>

const API_KEY = process.env.REACT_APP_api_key;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '20px',
    },
    paper: {
      background: '#33BAFF',
      padding: theme.spacing(4),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 150,
      height: 150,
      background: '#FEFFFE',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export default function Item({itemList}){
    const classes = useStyles();

    function getImage(photoId) {
      const url = new URL("https://maps.googleapis.com/maps/api/place/photo");
      url.searchParams.append("key", API_KEY);
      url.searchParams.append("maxheight", "128");
      url.searchParams.append("maxwidth", "128");
      url.searchParams.append("photoreference", photoId);
      return(<img src={url['href']}></img>)
    }

    //{getImage(item['photos'][0]['photo_reference'])}

    //console.log(itemList[0]['photos'][0]['photo_reference']);

    /*
     <Typography variant="body1" color="textSecondary">
      { (item['vicinity'] != undefined) ? "Vicinity: "+item['vicinity'] : ''}
     </Typography>
    */

    return(
        <div>

            <div>
                {itemList.map((item) => (
                    <div className={classes.root}>
                    <Paper className={classes.paper}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            {getImage(item['photos'][0]['photo_reference'])}
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="h5">
                                {item['name']}
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                              { (item['price_level'] != undefined) ? "Rating: "+item['rating']+"/5" : ''}
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                              { (item['price_level'] != undefined) ? "Price: "+item['price_level']+"/5" : ''}
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Button
                                variant="contained" 
                                color="primary"
                              >View Directions</Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                ))}
            </div>  
        </div>
    )
}