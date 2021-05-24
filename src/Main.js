import React, { useState, useEffect } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import Maps from './Maps'

export default function Main(){

    const [cords, setCords] = useState(['-78.507','38.033']);

    useEffect(() => {
        console.log(cords[1]+','+cords[0]);
    },[cords])

    return(cords&&(
        <div>
            <p>{(cords[1]+','+cords[0])}</p>
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
    ))
}