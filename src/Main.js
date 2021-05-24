import React, { useState, useEffect } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import Maps from './Maps'

export default function Main(){

    const [cords, setCords] = useState(['-78.507','38.033']);
    const [searchArr, setSearchArr] = (['Restaurant']);

    useEffect(() => {
        //console.log(cords);
    },[cords])

    return(cords&&(
        <div>
            <Grid container spacing={9} justify="right">
                <Grid item xs={3}>
                    <div><Inputs
                        cords={cords}
                        setCords={setCords}
                        setSearchArr={setSearchArr}
                    /></div>
                </Grid>
                <Grid item xs={4}>
                    <div><Searcher
                        cords={cords}
                        searchArr={searchArr}
                    /></div>
                </Grid>
                <Grid item xs={5}>
                    <div><Maps
                        cords={cords}
                    /></div>
                </Grid>
            </Grid>
        </div>
    ))
}