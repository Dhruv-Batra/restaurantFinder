import React, { useState, useEffect } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import Maps from './Maps'

export default function Main(){

    const [cords, setCords] = useState({'lon':null, lat:'null'});

    if (cords.lon==null && cords.lat===null){
        navigator.geolocation.getCurrentPosition(function(position) { //get initial position
        setCords({'lon':position.coords.longitude, lat:'position.coords.latitude'});
        });
    }

    useEffect(() => {
        console.log(cords);
    },[cords])

    return(
        <div>
            <Grid container spacing={9} justify="right">
                <Grid item xs={3}>
                    <div><Inputs
                        cords={cords}
                        setCords={setCords}
                    /></div>
                </Grid>
                <Grid item xs={4}>
                    <div><Searcher
                        cords={cords}
                    /></div>
                </Grid>
                <Grid item xs={5}>
                    <div><Maps/></div>
                </Grid>
            </Grid>
        </div>
    )
}