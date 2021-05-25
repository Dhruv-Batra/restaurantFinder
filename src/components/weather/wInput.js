import React, { useEffect, useState, useContext } from "react";
import Current from './Current';
import { Grid, Button } from "@material-ui/core";
import Hourly from './Hourly';
import {CordsContext} from '../../contexts/CordsContext';
import CurLoc from '../CurLoc';
import Address from '../Address'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));


export default function WInput(w){
    const classes = useStyles();

    const [weather, setWeather] = useState(null);
    //const [cords, setCords] = useState(['-78.507','38.033']);
    const {cords, setCords} = useContext(CordsContext);

    const [lon, setLon] = useState(cords[0]);
    const [lat, setLat] = useState(cords[1]);

    useEffect(() => {
        setCords([lon,lat])
    },[lat,lon])

    useEffect(() => {
        setLon(cords[0]);
        setLat(cords[1]);
    },[cords])

    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    const [showCurr, setShowCurr] = useState(false);
    const [showHour, setShowHour] = useState(false);

    function handleCurrClick(){
        setShowCurr(true);
        setShowHour(false);
    }

    function handleHourClick(){
        setShowCurr(false);
        setShowHour(true);
    }

    return(cords&&lon&&lat&&(
        <div>
            <Grid
                container
                direction="row  "
                justify="center"
                alignItems="top"
            >
                    <Grid item xs={3}>
                        <Address/>
                        <br></br>
                        <Current
                            long={lon}
                            lati={lat}
                        />
                        {/*<ButtonGroup
                                orientation="horizontal"
                                color="primary"
                                aria-label="vertical outlined primary button group"
                            >
                            <Button onClick={handleCurrClick}>Current</Button>
                            <Button onClick={handleHourClick}>Hourly</Button>
                        </ButtonGroup>
                    </Grid>
                    <br></br>
                    <Grid item xs={7.5}>
                    {showCurr ? (
                        <Current
                            long={lon}
                            lati={lat}
                        />
                    ):<div></div>}
                    {showHour ? (
                        <Hourly
                            long={lon}
                            lati={lat}
                        />
                    ):<div></div>}*/}
                    </Grid>
                    <Grid item>
                        <Hourly
                            long={lon}
                            lati={lat}
                        />
                    </Grid>
            </Grid>
        </div>
    ));

};