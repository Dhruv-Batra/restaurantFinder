import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_api_key_w;

export default function Current({long,lati}){

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const url = new URL("https://api.openweathermap.org/data/2.5/weather");
        url.searchParams.append("appid", API_KEY);
        url.searchParams.append("lon", long);
        url.searchParams.append("lat", lati);
        url.searchParams.append("units", "imperial");
        fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            // also important to check html error codes
            // 200 means no errors
            if (obj.cod === 200) {
            setWeather(obj);
            } else {
            setWeather(false);
            }
        });
    }, [long,lati]);

    //<pre>{JSON.stringify(weather, undefined, 4)}</pre>

    return(weather&&(
        <div>
            <div>
                <h2>{weather.name}</h2>
                <p>Current Temperature: {weather.main.temp}</p>
                <p>Feels Like: {weather.main.feels_like}</p>
                <img alt="" src={"https://openweathermap.org/img/w/"+weather.weather[0].icon+".png"}></img>
                <p>Daily Low: {weather.main.temp_min}</p>
                <p>Daily High: {weather.main.temp_max}</p>
            </div>
        </div>
    ));

};