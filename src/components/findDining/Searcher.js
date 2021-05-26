import React, {useEffect, useState} from "react";
import Item from './Item'
import Maps from './Maps'
import Grid from '@material-ui/core/Grid';

const API_KEY = process.env.REACT_APP_api_key;

export default function Searcher({cords,searchs,sort}){

    const [data, setData] = useState({'results':[{'photos':[{'photoreference':["Failed"]}],'geometry':{'location':{'lat':30,'lng':-77}},'opening_hours':[{'open_now':false}]}]});

    useEffect(() => {
        //console.log(searchs);
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
        //console.log(data['results']);
    },[cords,searchs])

    function compareName(a, b) {
        if (a.name<b.name) {
          return -1;
        }
        if (a.name>b.name) {
          return 1;
        }
        // a must be equal to b
        return 0;
    }

    function compareRating(a, b) {
        if (a['rating']<b['rating']) {
          return 1;
        }
        if (a['rating']>b['rating']) {
          return -1;
        }
        if (a['rating']) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

    function comparePrice(a, b) {
        if (a['price_level']<b['price_level']) {
          return -1;
        }
        if (a['price_level']>b['price_level']) {
          return 1;
        }
        if (a['price_level']) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

    return(
        <div>
            <Grid container spacing={9}>
                <Grid item xs={6}>
                    <Item
                        itemList={(sort==='name') ? data['results'].sort(compareName) 
                        : (sort==='rating'||sort==='default') ? data['results'].sort(compareRating)
                        : (sort==='price') ? data['results'].sort(comparePrice) : data['results']}
                        cords={cords}
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