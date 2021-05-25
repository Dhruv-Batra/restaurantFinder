import React, { useState, useEffect, useContext } from "react";
import Inputs from './Inputs'
import Searcher from './Searcher'
import Grid from '@material-ui/core/Grid';
import CordsContext from '../../contexts/CordsContext';

export default function Main(){

    const {cords, setCords} = useContext(CordsContext);
    
    const [search, setSearch] = useState(['Restaurant']);
    const [sort, setSort] = useState('rating');

    useEffect(() => {
        console.log(sort);
    },[sort])

    return(cords&&(
        <div>
            <Grid container spacing={9} justify="right">
                <Grid item xs={3}>
                    <div><Inputs
                        setCords={setCords}
                        setSearch={setSearch}
                        setSort={setSort}
                    /></div>
                </Grid>
                <Grid item xs={9}>
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