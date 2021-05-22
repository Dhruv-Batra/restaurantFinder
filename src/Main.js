import React, { useState, useEffect } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import Map from './Map'


export default function Main(){

    return(
        <div>
            <Grid container spacing={9} justify="right">
                <Grid item xs={3}>
                    <div><Inputs/></div>
                </Grid>
                <Grid item xs={4}>
                    <div><Searcher/></div>
                </Grid>
                <Grid item xs={5}>
                    <div><Map/></div>
                </Grid>
            </Grid>
        </div>
    )
}