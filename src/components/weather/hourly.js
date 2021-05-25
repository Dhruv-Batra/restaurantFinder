import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_api_key_w;

export default function Hourly({long,lati}){

    const [hour, setHour] = useState(null);


    useEffect(() => {
        const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
        url.searchParams.append("appid", API_KEY);
        url.searchParams.append("lon", long);
        url.searchParams.append("lat", lati);
        url.searchParams.append("units", "imperial");
        url.searchParams.append("exclude", "current,minutely,daily,alerts");
        fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            // also important to check html error codes
            // 200 means no errors
            setHour(obj);
        });
    }, [long,lati]);



    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    //the commented out part here doesn't return anything when button is clicked
    /*return(hour&&(
        <div>
            <pre>{JSON.stringify(hour, undefined, 4)}</pre>
        </div>
    ));*/

    return(
        <div>
            <pre>{JSON.stringify(hour, undefined, 4)}</pre>
        </div>
    );

};