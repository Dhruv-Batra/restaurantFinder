import React, { useState, useContext } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import {CordsContext} from '../../contexts/CordsContext';

export default function Main(){

    const {cords, setCords} = useContext(CordsContext);
    
    const [search, setSearch] = useState(['Restaurant']);
    const [sort, setSort] = useState('rating');

    return(cords&&(
        <div>
            <Grid container spacing={9} justify="flex-start">
                <Grid item xs={3}>
                    <div><Inputs
                        setCords={setCords}
                        setSearch={setSearch}
                        setSort={setSort}
                    /></div>
                </Grid>
                <Grid item xs={8}>
                    <div><Searcher
                        cords={cords}
                        searchs={search.join('+')}
                        sort={sort}
                    /></div>
                </Grid>
            </Grid>
        </div>
    ))
}