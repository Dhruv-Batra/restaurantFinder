import React, { useState, useEffect } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import Maps from './Maps'

export default function Main(){

    const [cords, setCords] = useState(['-78.507','38.033']);
    const [search, setSearch] = useState(['Restaurant']);

    useEffect(() => {
        console.log(search);
        console.log(search.join('+'));
    },[search])

    return(cords&&(
        <div>
            <Grid container spacing={9} justify="right">
                <Grid item xs={3}>
                    <div><Inputs
                        cords={cords}
                        setCords={setCords}
                        setSearch={setSearch}
                    /></div>
                </Grid>
                <Grid item xs={9}>
                    <div><Searcher
                        cords={cords}
                        searchs={search.join('+')}
                    /></div>
                </Grid>
            </Grid>
        </div>
    ))
}