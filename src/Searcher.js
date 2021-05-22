import React, {useEffect, useState} from "react";
import Item from './Item'

const API_KEY = process.env.REACT_APP_api_key;

export default function Searcher(){

    const [data, setData] = useState({'results':[{'photos':[{'photoreference':["Failed"]}]}]});

    useEffect(() => {
        const url = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json");
        url.searchParams.append("location", "-33.8670522,151.1957362");
        url.searchParams.append("radius", "1500");
        url.searchParams.append("keyword", "restaurant");
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

    },[])



    return(
        <div>
            <Item
                itemList={data['results']}
            />
        </div>
    )
}