import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const API_KEY = process.env.REACT_APP_api_key;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
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
      console.log(url);
      return(<img src={url['href']}></img>)
    }
    //{getImage(item['photos'][0]['photo_reference'])}

    //console.log(itemList[0]['photos'][0]['photo_reference']);

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
                              <Typography variant="body1" color="textSecondary">
                              { (item['price_level'] != undefined) ? "Price: "+item['price_level']+"/5" : ''}
                              </Typography>
                              <Typography variant="body1" color="textSecondary">
                              { (item['vicinity'] != undefined) ? "Vicinity: "+item['vicinity'] : ''}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Remove
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
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