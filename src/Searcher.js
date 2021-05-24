import React, {useEffect, useState} from "react";
import Item from './Item'
import Maps from './Maps'
import Grid from '@material-ui/core/Grid';

const API_KEY = process.env.REACT_APP_api_key;

export default function Searcher({cords,searchs}){

    const [data, setData] = useState({'results':[{'photos':[{'photoreference':["Failed"]}],'geometry':{'location':{'lat':30,'lng':-77}}}]});

    useEffect(() => {
        console.log(searchs);
        const cordSearch = (cords[1]+','+cords[0]);
        const url = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json");
        url.searchParams.append("location", cordSearch);
        url.searchParams.append("radius", "1500");
        url.searchParams.append("keyword", searchs);
        url.searchParams.append("fields", "formatted_address,name,rating,price_level,opennow,vicinity");
        url.searchParams.append("key", API_KEY);
        fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            setData(obj);
        });   
        console.log(data['results'])
    },[cords,searchs])



    return(
        <div>
            <Grid container spacing={9} justify="right">
                <Grid item xs={5}>
                    <Item
                        itemList={data['results']}
                    />
                </Grid>
                <Grid item xs={4}>
                    <div><Maps
                        cords={cords}
                        itemList={data['results']}
                    /></div>
                </Grid>
            </Grid>
        </div>
    )
}